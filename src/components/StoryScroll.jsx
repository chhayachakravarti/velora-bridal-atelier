import React, { useRef, useState, useEffect } from "react";
import { PlayCircle } from "lucide-react";

function StoryScroll({ images, onStoryClick }) {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (scroll && images.length > 0) {
      // Wait for layout to be ready
      setTimeout(() => {
        const containerWidth = scroll.clientWidth;
        const itemWidth = scroll.querySelector("div > div")?.offsetWidth || 0;
        const totalWidth = itemWidth * images.length;
        // Calculate center offset
        const centerOffset = (totalWidth - containerWidth) / 2;
        scroll.scrollLeft = centerOffset > 0 ? centerOffset : 0;
      }, 100);
    }
  }, [images]);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const onTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const onTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const onTouchEnd = () => setIsDragging(false);

  return (
    <div
      ref={scrollRef}
      className="w-full overflow-x-auto py-4 bg-white shadow-sm cursor-grab scroll-smooth snap-x snap-mandatory"
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="w-max mx-auto flex space-x-4 md:space-x-6 px-4">
        {images.map((story, index) => (
          <div
            key={story.id}
            onClick={() => onStoryClick(index)}
            className="flex-shrink-0 snap-start w-24 sm:w-28 md:w-32 lg:w-36 text-center relative group"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-2 border-pink-500 hover:border-pink-700 transition transform hover:scale-105 duration-300 shadow-md">
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-full object-cover"
              />
              {story.video && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition rounded-full">
                  <PlayCircle className="w-6 h-6 text-white" />
                </div>
              )}
            </div>
            <p className="text-xs sm:text-sm md:text-base mt-2 font-medium text-gray-700 truncate">
              {story.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoryScroll;
