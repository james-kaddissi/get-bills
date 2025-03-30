import SideBarIcon from "./SidebarIcon";
import { GiPlasticDuck } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAudio from "../hooks/audioPlayback";

const SideBar = () => {
    const quackSound = useAudio("/quack.mp3");

    return(
        <div className="fixed left-0 h-full w-16 m-0 flex flex-col bg-gray-800 text-amber-400 shadow-lg z-20 border-r border-gray-700">
            <Link to="/">
                <SideBarIcon icon={<AiFillHome size="30" />} />
            </Link>
            
            <Link to="/learn">
                <SideBarIcon icon={<FaBook size="28" />} />
            </Link>
            
            <div onClick={() => quackSound.play()}>
                <SideBarIcon icon={<GiPlasticDuck size="30" />} />
            </div>
        </div>
    );
}

export default SideBar;