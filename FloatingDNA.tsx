import  { useEffect, useState } from 'react';

export default function FloatingDNA() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-8 z-10 hidden xl:block" style={{ top: `${Math.max(120, 120 - scrollY * 0.1)}px` }}>
      <div className="relative h-[600px] w-[100px]">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 h-8 w-8 -translate-x-1/2"
            style={{
              top: i * 50,
              animation: `float 3s ease-in-out ${i * 0.2}s infinite`,
              transform: `translateY(${Math.sin((scrollY + i * 50) / 100) * 10}px)`,
            }}
          >
            <div className="h-3 w-3 rounded-full bg-blue-500/20" />
            <div className="absolute left-1/2 top-1/2 h-8 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-blue-500/20 to-transparent transform" 
              style={{ 
                transform: `rotate(${(scrollY + i * 30) / 5}deg)` 
              }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
 