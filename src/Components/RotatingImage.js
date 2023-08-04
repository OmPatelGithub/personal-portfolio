import React from "react";
import { useRef, useEffect } from "react";
import { Translate } from "react-bootstrap-icons";


const RotatingImage = ({ src, alt }) => {
    const containerRef = useRef(null);
  
    useEffect(() => {
      const container = containerRef.current;
  
      const rotateElement = (event, element) => {
        const x = event.clientX;
        const y = event.clientY;
        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;
        const offsetX = ((x - middleX) / middleX) * 45;
        const offsetY = ((y - middleY) / middleY) * 45;
  
        container.style.transform = `perspective(5000px) rotateY(${offsetX}deg) rotateX(${-1 * offsetY}deg)`;
  
        // Apply the parallax effect: adjust the Z translation of the front image
        const image = container.querySelector("img");
        const parallaxFactor = 0.1; // Adjust the value to control the parallax intensity
        image.style.transform = `translateZ(${offsetY * parallaxFactor}px)`;
      };
  
      const handleMouseMove = (e) => {
        rotateElement(e, container);
      };
  
      document.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  
    return (
        <div
          className="rotating-image-container"
          ref={containerRef}
          style={{
            width: "500px",
            height: "500px",
            padding: "20px",
            marginLeft: "auto + 5000px", // move to the right
            marginBottom: "auto + 100px",
            // move to the right
            transformStyle: "preserve-3d",
            transition: "transform 200ms linear",
          }}
        >

        
          {/* Background Gradient */}
          <div
            className="gradient-background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(-45deg, red, blue)",
              transform: "translateZ(-150px)", /* Move the gradient behind the image */
              borderRadius: "50%", /* Make the gradient background look like a circle */
            }}
          />

        <div
            className="shadow"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "url(src/assets/img/frosted_background.avif)",
              transform: "translateZ(-125px) scale(0.9)", /* Move the gradient behind the image */
              backdropFilter: "blur(50px)", /* Add a blur effect */
              borderRadius: "50%", /* Make the gradient background look like a circle */
              opacity: 0.7,

            }}
          />

            <div
            className="shadow"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "url(src/assets/img/frosted_background.avif)",
              transform: "translateZ(-100px) scale(0.8)", /* Move the gradient behind the image */
              backdropFilter: "blur(90px)", /* Add a blur effect */
              borderRadius: "50%", /* Make the gradient background look like a circle */
              opacity: 0.7,

            }}
          />        

    

    
          {/* Image */}
          <img
            src={src}
            alt={alt}
            style={{
              width: "100%", // Adjust the size as needed
              height: "100%",
              transformStyle: "preserve-3d",
              transition: "transform 200ms linear",

              zIndex: 10,
            }}
          />
    
  
        </div>

     
      );
    };
    
    export default RotatingImage;