import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import useAudio from "../hooks/audioPlayback";

const BottomTextInput = ({ 
    value, 
    onChange, 
    placeholder = "Type something...",
    modelSize = 2,
    buttonSize = 12
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const canvasRef = useRef(null);
    const sceneContainerRef = useRef(null);
    const duckRef = useRef(null);
    const isFlippingRef = useRef(false);
    const quackSound = useAudio("/quack.mp3");
    
    const toggleVisibility = () => {
        setIsVisible(prev => !prev);
        quackSound.play();
        
        if (duckRef.current) {
            isFlippingRef.current = true;
            setTimeout(() => {
                isFlippingRef.current = false;
            }, 500);
        }
    };
    
    useEffect(() => {
        if (!canvasRef.current) return;
        
        let containerRect = sceneContainerRef.current.getBoundingClientRect();
        const width = containerRect.width;
        const height = containerRect.height;
        
        const scene = new THREE.Scene();
        
        const camera = new THREE.PerspectiveCamera(
            50, 
            width / height,
            0.1,
            1000 
        );
        
        window.duckCamera = camera;
        
        const renderer = new THREE.WebGLRenderer({ 
            canvas: canvasRef.current, 
            antialias: true,
            alpha: true,
        });
        
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        renderer.setClearColor(0x000000, 0);
        scene.background = null;
        
        renderer.shadowMap.enabled = false;
        
        camera.position.set(3 * modelSize, 3 * modelSize, 3 * modelSize);
        camera.lookAt(0, 0, 0);
        
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        
        controls.enableRotate = false;
        controls.enablePan = false;
        controls.enableZoom = false;
        
        const lilyGeometry = new THREE.CircleGeometry(1.5 * modelSize, 24);
        const lilyMaterial = new THREE.MeshBasicMaterial({ 
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide
        });
        
        const lilyPad = new THREE.Mesh(lilyGeometry, lilyMaterial);
        lilyPad.rotation.x = -Math.PI / 2;
        lilyPad.position.y = 0;
        scene.add(lilyPad);
        
        const mtlLoader = new MTLLoader();
        mtlLoader.load('/models/duck.mtl', (materials) => {
            materials.preload();
            
            Object.values(materials.materials).forEach(material => {
                if (material.shininess) {
                    material.shininess = 30;
                }
                
                if (material.specular) {
                    material.specular.setRGB(0.4, 0.4, 0.4);
                }
                
                if (material.color) {
                    material.color.offsetHSL(0, 0, 0.15);
                }
                
                material.castShadow = false;
                material.receiveShadow = false;
            });
            
            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load('/models/duck.obj', (object) => {
                object.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        child.geometry.computeVertexNormals();
                        child.castShadow = false;
                        child.receiveShadow = false;
                    }
                });
                
                const box = new THREE.Box3().setFromObject(object);
                const size = box.getSize(new THREE.Vector3());
                const maxDim = Math.max(size.x, size.y, size.z);
                const scale = (3 * modelSize) / maxDim;
                
                object.scale.set(scale, scale, scale);
                
                const center = box.getCenter(new THREE.Vector3());
                object.position.x = -center.x * scale;
                object.position.y = -center.y * scale + (0.5 * modelSize);
                object.position.z = -center.z * scale;
                
                scene.add(object);
                duckRef.current = object;
            });
        });
        
        const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.0);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.5);
        directionalLight.position.set(5, 10, 7);
        directionalLight.castShadow = false;
        scene.add(directionalLight);
        
        const animate = () => {
            requestAnimationFrame(animate);
            
            if (duckRef.current && isFlippingRef.current) {
                duckRef.current.rotation.z += 0.2;
                if (duckRef.current.rotation.z >= Math.PI * 2) {
                    duckRef.current.rotation.z = 0;
                    isFlippingRef.current = false;
                }
            }
            
            controls.update();
            renderer.render(scene, camera);
        };
        
        const handleResize = () => {
            containerRect = sceneContainerRef.current.getBoundingClientRect();
            const newWidth = containerRect.width;
            const newHeight = containerRect.height;
            
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            
            renderer.setSize(newWidth, newHeight);
        };
        
        window.addEventListener('resize', handleResize);
        
        const onMouseEnter = () => {
            document.body.style.cursor = 'pointer';
        };
        
        const onMouseLeave = () => {
            document.body.style.cursor = 'auto';
        };
        
        sceneContainerRef.current.addEventListener('mouseenter', onMouseEnter);
        sceneContainerRef.current.addEventListener('mouseleave', onMouseLeave);
        sceneContainerRef.current.addEventListener('click', toggleVisibility);
        
        animate();
        
        return () => {
            window.removeEventListener('resize', handleResize);
            if (sceneContainerRef.current) {
                sceneContainerRef.current.removeEventListener('mouseenter', onMouseEnter);
                sceneContainerRef.current.removeEventListener('mouseleave', onMouseLeave);
                sceneContainerRef.current.removeEventListener('click', toggleVisibility);
            }
            document.body.style.cursor = 'auto';
            scene.clear();
            renderer.dispose();
            controls.dispose();
            delete window.duckCamera;
        };
    }, [modelSize]);
    
    return (
        <>
            <div 
                ref={sceneContainerRef}
                style={{ 
                    position: 'fixed',
                    right: '0.5rem',
                    bottom: '0.5rem',
                    width: `${buttonSize}rem`, 
                    height: `${buttonSize}rem`,
                    pointerEvents: 'auto'
                }}
            >
                <canvas 
                    ref={canvasRef} 
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </div>
            
            <div
                className={`fixed left-1/2 transform -translate-x-1/2 bottom-10 w-11/12 md:w-1/2 p-4 bg-yellow-600 text-white rounded-3xl shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
            >
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    className="w-full p-2 rounded-xl bg-yellow-700 text-white placeholder-yellow-200 border border-yellow-400"
                    placeholder={placeholder}
                />
            </div>
        </>
    );
};

export default BottomTextInput;