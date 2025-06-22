import React from 'react';

const dockApps = [
  { name: 'Finder', icon: '/icons/finder.png', isOpen: true },
  { name: 'Launchpad', icon: '/icons/launchpad.png', isOpen: false },
  { name: 'Safari', icon: '/icons/safari.png', isOpen: true },
  { name: 'Notes', icon: '/icons/notes.png', isOpen: false },
  { name: 'Settings', icon: '/icons/settings.png', isOpen: true },
];

const Dock = () => {
  return (
    <div className="fixed bottom-1 left-1/2 -translate-x-1/2 px-2 pb-0.5 pt-1 backdrop-blur-md bg-white/30 border border-white/20 rounded-xl flex gap-1.5 items-end shadow-lg z-50">
      {/* App Icons */}
      {dockApps.map((app) => (
        <div
          key={app.name}
          className="flex items-center justify-center flex-col h-full transition-transform duration-200 relative group"
        >
          <img
            src={app.icon}
            alt={app.name}
            className="w-[25px] h-[25px] mb-1 object-contain"
          />

          {/* Tooltip */}
          <span className="absolute bottom-[35px] text-[5px] text-[#F1F1F1] bg-black/50 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {app.name}
            <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/50"></span>
          </span>

          {/* Open Dot */}
          {app.isOpen && (
            <span className="w-[2px] h-[2px] rounded-full bg-black/50 absolute bottom-[-2px]"></span>
          )}
        </div>
      ))}

      {/* Vertical Divider */}
      <div className="w-[0.5px] h-[28px] bg-white/40 mx-1 mb-[2px]"></div>

      {/* Trash Icon */}
      <div className="flex items-center justify-center flex-col h-full transition-transform duration-200 relative group">
        <img
          src="/icons/trash.png"
          alt="Trash"
          className="w-[25px] h-[25px] mb-1 object-contain"
        />

        {/* Tooltip */}
        <span className="absolute bottom-[35px] text-[5px] text-white bg-black/50 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Trash
          <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/50"></span>
        </span>
      </div>
    </div>
  );
};

export default Dock;
