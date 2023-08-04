import React, { useEffect, useRef } from "react";

const RotatingGrid = () => {
  const preRef = useRef(null);

  useEffect(() => {
    const pre = preRef.current;

    const rotateElement = (event, element) => {
      // get mouse position
      const x = event.clientX;
      const y = event.clientY;

      // find the middle
      const middleX = window.innerWidth / 2;
      const middleY = window.innerHeight / 2;

      // get offset from middle as a percentage
      // and tone it down a little
      const offsetX = ((x - middleX) / middleX) * 45;
      const offsetY = ((y - middleY) / middleY) * 45;

      // set rotation
      element.style.setProperty("--rotateX", offsetX + "deg");
      element.style.setProperty("--rotateY", -1 * offsetY + "deg");
    };

    const handleMouseMove = (e) => {
      rotateElement(e, pre);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pre-container css-only">
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index}></div>
      ))}
      <pre
        ref={preRef}
        contentEditable
        className="language-css"
        tabIndex="0"
      >
        <code className="language-css">
          .awesome-layouts &#123; display: grid; &#125;
        </code>
      </pre>
      <a
        href="https://youtu.be/Z-3tPXf9a7M"
        target="_blank"
        rel="noreferrer"
        className="yt"
      >
        YouTube tutorial on making this here
      </a>
    </div>
  );
};

export default RotatingGrid;
