import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function InstaGallery({ data = [] }) {
  const [activeTab, setActiveTab] = useState("pictures");

  return (
    <div className="w-full flex flex-col items-center mt-6">
      {/* Tab Toggle */}
      <div className="flex justify-center gap-6 mb-4">
        <button
          onClick={() => setActiveTab("pictures")}
          className={`text-sm font-medium pb-1 border-b-2 transition ${
            activeTab === "pictures"
              ? "border-pink-600 text-pink-600"
              : "border-transparent text-gray-500 hover:text-pink-400"
          }`}
        >
          🖼 Pictures
        </button>
        <button
          onClick={() => setActiveTab("videos")}
          className={`text-sm font-medium pb-1 border-b-2 transition ${
            activeTab === "videos"
              ? "border-pink-600 text-pink-600"
              : "border-transparent text-gray-500 hover:text-pink-400"
          }`}
        >
          🎥 Videos
        </button>
      </div>

      {/* === PICTURES SECTION === */}
      {activeTab === "pictures" && (
        <div className="w-full flex justify-center px-3 sm:px-4">
          <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-7xl justify-items-center">
            {data
              .filter((item) => item.image)
              .map((item) => (
                <Link
                  key={item.id}
                  to={`/photo/${item.id}`} // 👈 this will open photo detail page
                  className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden group shadow-lg cursor-pointer bg-gray-100 flex items-center justify-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none" />

                  {/* WhatsApp Button Bottom Right */}
                  <a
                    href={`https://wa.me/919876543210?text=Hi! I'm interested in ${encodeURIComponent(
                      item.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 flex items-center justify-center bg-green-500 w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-green-600 transition shadow-lg z-20"
                  >
                    <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </a>

                  {/* Info Overlay */}
                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 text-left z-20 max-w-[68%]">
                    <h3 className="text-white font-bold text-xs sm:text-sm mb-0.5 sm:mb-1 drop-shadow-lg line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-pink-300 font-semibold text-xs sm:text-sm mb-0.5 drop-shadow-lg">
                      ₹{item.price?.toLocaleString()}
                    </p>
                    {item.brand && (
                      <p className="text-white/90 text-[11px] sm:text-xs drop-shadow-lg truncate">
                        Brand: {item.brand}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}

      {/* === VIDEOS SECTION === */}
      {activeTab === "videos" && (
        <div className="w-full flex justify-center px-3 sm:px-4">
          <div className="grid w-full grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6 max-w-7xl justify-items-center">
            {data
              .filter((item) => item.video)
              .map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`} // 👈 this opens your ProductDetailLehnga page
                  className="relative w-full aspect-[3/4] group rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-gray-100"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 p-2 rounded-full">
                      <PlayCircle className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                  </div>

                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/919876543210?text=Hi! I'm interested in ${encodeURIComponent(
                      item.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 flex items-center justify-center bg-green-500 w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-green-600 transition shadow-lg z-20"
                  >
                    <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </a>

                  {/* Info Overlay */}
                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 text-left z-20 max-w-[68%]">
                    <h3 className="text-white font-bold text-xs sm:text-sm mb-0.5 sm:mb-1 drop-shadow-lg line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-pink-300 font-semibold text-xs sm:text-sm mb-0.5 drop-shadow-lg">
                      ₹{item.price?.toLocaleString()}
                    </p>
                    {item.brand && (
                      <p className="text-white/90 text-[11px] sm:text-xs drop-shadow-lg truncate">
                        Brand: {item.brand}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
