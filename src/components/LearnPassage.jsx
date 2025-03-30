import React, { useEffect, useState, useRef } from 'react';

const AnimatedText = ({ children, delay = 0, className = "", resetKey }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(false);
    
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay, resetKey]);
  
  return (
    <div 
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 700ms ease-out, transform 900ms cubic-bezier(0.19, 1, 0.22, 1)',
      }}
      className={`transition-opacity duration-700 ease-out ${
        visible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const formatText = (text) => {
  if (!text) return '';
  
  let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  formattedText = formattedText.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  return formattedText;
};

const FormattedText = ({ text }) => {
  return <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: formatText(text) }} />;
};

const LearnPassage = ({ title, subpassages = [], images = [] }) => {
  const [resetKey, setResetKey] = useState(title);
  
  useEffect(() => {
    setResetKey(prev => title + Date.now());
  }, [title]);
  
  const splitIntoParagraphs = (text) => {
    return text.split(/\n+/).filter(para => para.trim() !== '');
  };
  
  const baseDelay = 200;
  const sectionDelayMultiplier = 500;
  const paragraphDelayMultiplier = 180;
  
  return (
    <div className="flex flex-row w-full gap-6">
      <div className="flex-1 bg-gray-800 text-white p-4 rounded-xl shadow-md overflow-hidden border border-gray-700">
        <AnimatedText delay={baseDelay} className="mb-4 pb-2 border-b border-gray-700" resetKey={resetKey}>
          <h2 className="text-xl font-bold text-amber-400">{title}</h2>
        </AnimatedText>
        
        {subpassages.map((subpassage, index) => {
          let accumulatedDelay = baseDelay + 500;
          
          for (let i = 0; i < index; i++) {
            const prevParagraphs = splitIntoParagraphs(subpassages[i].content).length;
            accumulatedDelay += sectionDelayMultiplier + (prevParagraphs * paragraphDelayMultiplier);
          }
          
          const headingDelay = accumulatedDelay;
          const paragraphs = splitIntoParagraphs(subpassage.content);
          
          return (
            <div key={`${resetKey}-${index}`} className="mb-6">
              <AnimatedText delay={headingDelay} className="mb-2" resetKey={resetKey}>
                <h3 className="text-lg font-semibold text-amber-300">{subpassage.heading}</h3>
              </AnimatedText>
              
              {paragraphs.map((paragraph, paraIndex) => (
                <AnimatedText 
                  key={`${resetKey}-${index}-${paraIndex}`} 
                  delay={headingDelay + ((paraIndex + 1) * paragraphDelayMultiplier)}
                  className="mb-2"
                  resetKey={resetKey}
                >
                  <FormattedText text={paragraph} />
                </AnimatedText>
              ))}
            </div>
          );
        })}
      </div>
      
      {images && images.length > 0 && (
        <div className="w-1/3 flex flex-col gap-4">
          {images.map((image, index) => (
            <AnimatedText 
              key={`${resetKey}-image-${index}`} 
              delay={baseDelay + (index * 300)}
              resetKey={resetKey}
              className="bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-700"
            >
              <div className="flex flex-col">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto object-cover"
                />
                {image.caption && (
                  <p className="text-sm text-gray-400 p-2 text-center">{image.caption}</p>
                )}
              </div>
            </AnimatedText>
          ))}
        </div>
      )}
    </div>
  );
};

export default LearnPassage;