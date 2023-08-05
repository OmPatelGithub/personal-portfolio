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
            marginLeft: "auto",
            marginBottom: "auto + 500px",
            // move to the right
            transformStyle: "preserve-3d",
            transition: "transform 300ms ease-out",
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
              
              transform: "translateZ(-150px) scale(1)", /* Move the gradient behind the image */
              borderRadius: "50%", /* Make the gradient background look like a circle */
            }}
          />



            <div
            className="frosted"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              transform: "translateZ(-100px) scale(1.1)", /* Move the gradient behind the image */
             
              borderRadius: "50%", /* Make the gradient background look like a circle */

            }}
          />    

             

    

    

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