import React, { useState, useEffect, useRef } from 'react';
import './DanglingFooter.css';

const ParticleWord = ({ text, initialPosition, delay = 0 }) => {
  const [position, setPosition] = useState(initialPosition);
  const [velocity, setVelocity] = useState({ x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 });
  const wordRef = useRef(null);

  // Set the initial position based on props
  useEffect(() => {
    setPosition(initialPosition);
  }, [initialPosition]);

  useEffect(() => {
    let animationFrame;
    let lastTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = (currentTime - lastTime) / 16; // Normalize to 60fps
      lastTime = currentTime;

      setPosition((prevPosition) => {
        const boundingBox = wordRef.current?.getBoundingClientRect();
        const parentBox = wordRef.current?.parentElement?.getBoundingClientRect();

        if (!boundingBox || !parentBox) return prevPosition;

        // Calculate new positions based on velocity
        let newX = prevPosition.x + velocity.x * deltaTime;
        let newY = prevPosition.y + velocity.y * deltaTime;

        // Bounce off walls (horizontal bounds)
        if (newX < 0 || newX + boundingBox.width > parentBox.width) {
          setVelocity((v) => ({ ...v, x: -v.x }));
          newX = Math.max(0, Math.min(newX, parentBox.width - boundingBox.width)); // Keep it within bounds
        }

        // Bounce off walls (vertical bounds)
        if (newY < 0 || newY + boundingBox.height > parentBox.height) {
          setVelocity((v) => ({ ...v, y: -v.y }));
          newY = Math.max(0, Math.min(newY, parentBox.height - boundingBox.height)); // Keep it within bounds
        }

        return { x: newX, y: newY };
      });

      animationFrame = requestAnimationFrame(animate);
    };

    // Start the animation after a delay
    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [velocity, delay]);

  const handleMouseMove = (e) => {
    const rect = wordRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const distance = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));
    const maxDistance = 150;

    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance;
      const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
      setVelocity({
        x: -Math.cos(angle) * force * 4,
        y: -Math.sin(angle) * force * 4,
      });
    }
  };

  return (
    <span
      ref={wordRef}
      className="particle-word"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        position: 'absolute',
        transition: 'transform 0.05s linear',
      }}
      onMouseMove={handleMouseMove}
    >
      {text}
    </span>
  );
};

const DanglingFooter = () => {
  const containerRef = useRef(null);
  const phrases = [
    "AI-powered matching",
    "preferences based",
    "budget friendly",
    "blockchain contracts",
    "automated payments",
    "on-demand services",
    "maintenance support",
    "secure platform",
    "smart solutions",
  ];

  const getInitialPosition = (index) => {
    const containerBox = containerRef.current?.getBoundingClientRect();
    if (!containerBox) return { x: 0, y: 0 };

    const wordWidth = 100; // Adjust this based on actual width
    const wordHeight = 50;  // Adjust this based on actual height

    const padding = 20; // Space between words
    const randomY = Math.random() * (containerBox.height - wordHeight); // Random Y position within bounds

    // Calculate the X position based on index and padding
    const randomX = index * (wordWidth + padding); // Place words beside each other

    return {
      x: randomX,
      y: randomY,
    };
  };

  return (
    <div className="footer-wrapper">
      <div
        className="particles-container"
        style={{ position: 'relative', width: '100%', height: '135px' }}
        ref={containerRef} // Capture the container's size
      >
        {phrases.map((phrase, index) => (
          <ParticleWord
            key={index}
            text={phrase}
            initialPosition={getInitialPosition(index)} // Use index-based positioning
            delay={index * 100} // Staggered delay
          />
        ))}
      </div>
    </div>
  );
};

export default DanglingFooter;
