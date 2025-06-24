import React, { useRef, useState } from 'react';
import { useKernelContext } from '../context/kernelContext';
import { useAppContext } from '../context/AppContext';

const Dock = () => {
  const d = useKernelContext().docksize;
  const { dockApps, openSafari } = useAppContext();
  const { setdocksize } = useKernelContext();
  const resizing = useRef(false);
  const lastY = useRef(null);

  // Animation state for bouncing icons
  const [bounceMap, setBounceMap] = useState({});

  const handleIconClick = (app) => {
    if(app.name != 'Launchpad'){
    // Start bounce animation
      setBounceMap(prev => ({ ...prev, [app.name]: true }));

      // Call opener if defined
      
      // Remove bounce class after animation ends
      setTimeout(() => {
        setBounceMap(prev => ({ ...prev, [app.name]: false }));
        if (app.opener) app.opener();
      }, 400); // match animation duration
    }
  };

  const handleMouseDown = (e) => {
    resizing.current = true;
    lastY.current = e.clientY;

    const handleMouseMove = (e) => {
      if (!resizing.current) return;

      const deltaY = e.clientY - lastY.current;
      lastY.current = e.clientY;
      const direction = deltaY > 0 ? -1 : 1;

      setdocksize(prev => {
        const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
        return {
          main: {
            pt: clamp(prev.main.pt + direction, 0, 10),
            px: clamp(prev.main.px + direction, 0, 20),
            pb: clamp(prev.main.pb + direction * 0.5, 0, 10),
            rounded: clamp(prev.main.rounded + direction * 2, 0, 32),
            gap: clamp(prev.main.gap + direction * 2, 0, 16),
          },
          icon: {
            w: clamp(prev.icon.w + direction * 2, 20, 96),
            h: clamp(prev.icon.h + direction * 2, 20, 96),
            mb: clamp(prev.icon.mb + direction, 0, 16),
          },
          dot: {
            w: clamp(prev.dot.w + direction * 0.5, 1, 6),
            h: clamp(prev.dot.h + direction * 0.5, 1, 6),
            bottom: clamp(prev.dot.bottom + direction * -0.25, -6, 0),
          },
          divider: {
            w: prev.divider.w,
            h: clamp(prev.divider.h + direction * 4, 24, 96),
            mx: clamp(prev.divider.mx + direction * 0.5, 5, 8),
            mb: clamp(prev.divider.mb + direction * 0.5, 0, 8),
          },
          tooltip: {
            bottom: clamp(prev.tooltip.bottom + direction * 5, 20, 120),
            text: clamp(prev.tooltip.text + direction, 6, 18),
            px: clamp(prev.tooltip.px + direction, 1, 6),
            py: clamp(prev.tooltip.py + direction * 0.5, 0.5, 4),
          },
        };
      });
    };

    const handleMouseUp = () => {
      resizing.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div 
      className="select-none fixed bottom-1 left-1/2 -translate-x-1/2 backdrop-blur-md bg-white/30 border border-white/20 flex items-end shadow-lg z-50 overflow-visible"
      style={{
        paddingTop: `${d.main.pt}px`,
        paddingBottom: `${d.main.pb}px`,
        paddingLeft: `${d.main.px}px`,
        paddingRight: `${d.main.px}px`,
        borderRadius: `${d.main.rounded}px`,
        gap: `${d.main.gap}px`
      }}
    >
      {dockApps.map((app) => (
        <div
          key={app.name}
          className="flex items-center justify-center flex-col h-full transition-transform duration-200 relative group overflow-visible"
        >
          <img
            src={app.icon}
            alt={app.name}
            onClick={() => handleIconClick(app)}
            className={`${bounceMap[app.name] ? 'bounce-once' : ''} overflow-visible`}
            style={{
              width: `${d.icon.w}px`,
              height: `${d.icon.h}px`,
              marginBottom: `${d.icon.mb}px`
            }}
          />
          
          <span 
            className="absolute text-[#F1F1F1] bg-black/50 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
            style={{
              bottom: `${d.tooltip.bottom}px`,
              fontSize: `${d.tooltip.text}px`,
              padding: `${d.tooltip.py}px ${d.tooltip.px}px`
            }}
          >
            {app.name}
            <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/50"></span>
          </span>

          {app.isOpen && (
            <span 
              className="rounded-full bg-black/50 absolute"
              style={{
                width: `${d.dot.w}px`,
                height: `${d.dot.h}px`,
                bottom: `${d.dot.bottom}px`
              }}
            ></span>
          )}
        </div>
      ))}

      <div 
        className="hover:cursor-ns-resize bg-white/40"
        style={{
          width: `${d.divider.w}px`,
          height: `${d.divider.h}px`,
          marginLeft: `${d.divider.mx}px`,
          marginRight: `${d.divider.mx}px`,
          marginBottom: `${d.divider.mb}px`
        }}
        onMouseDown={handleMouseDown}
      ></div>

      <div className="flex items-center justify-center flex-col h-full transition-transform duration-200 relative group">
        <img
          src="/icons/trash.png"
          alt="Trash"
          style={{
            width: `${d.icon.w}px`,
            height: `${d.icon.h}px`,
            marginBottom: `${d.icon.mb}px`
          }}
        />
        <span 
          className="absolute text-white bg-black/50 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
          style={{
            bottom: `${d.tooltip.bottom}px`,
            fontSize: `${d.tooltip.text}px`,
            padding: `${d.tooltip.py}px ${d.tooltip.px}px`
          }}
        >
          Trash
          <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/50"></span>
        </span>
      </div>
    </div>
  );
};

export default Dock;
