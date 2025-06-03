import React, { useEffect, useRef, useState } from 'react';

function Cursor() {
  const mainCursor = useRef(null);
  const follower = useRef(null);
  const [cursorColor, setCursorColor] = useState('#00d9ff');
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    const cursor = mainCursor.current;
    const ring = follower.current;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

  const animate = () => {
  ringX += (mouseX - ringX) / 15; // slower, smoother trail
  ringY += (mouseY - ringY) / 15;
  ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
  requestAnimationFrame(animate);
};

    document.addEventListener('mousemove', move);
    animate();

    return () => document.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    if (mainCursor.current && follower.current) {
      mainCursor.current.style.backgroundColor = cursorColor;
      follower.current.style.borderColor = cursorColor;
    }
  }, [cursorColor]);

  return (
    <>
      <div className="cursor" ref={mainCursor}></div>
      <div className="cursor-follower" ref={follower}></div>

      <div className="color-picker-panel">
        <button onClick={() => setShowPicker(!showPicker)} className="toggle-picker">
          🎨
        </button>

        {showPicker && (
          <div className="picker-popup">
            <label htmlFor="cursor-color">Pick Cursor Color:</label>
            <input
              id="cursor-color"
              type="color"
              value={cursorColor}
              onChange={(e) => setCursorColor(e.target.value)}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Cursor;
