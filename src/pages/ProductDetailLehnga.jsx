import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductDetailLehnga() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const videoRefs = useRef({});

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/data/lehengas.json");
      const data = await res.json();
      setProducts(data.lehengas);
    };
    fetchProducts();
  }, [id]);

  // Auto-play selected video
  useEffect(() => {
    const video = videoRefs.current[id];
    if (video) video.play();
  }, [id]);

  const handlePlayPause = (productId) => {
    const video = videoRefs.current[productId];
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  };

  if (!products.length)
    return <p className="text-center mt-20 text-gray-500">Loading...</p>;

  return (
    <div className="w-full h-[100dvh] overflow-y-scroll snap-y snap-mandatory bg-black">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full h-[100dvh] snap-start relative flex items-center justify-center px-2 sm:px-4"
        >
          <div className="relative h-[88dvh] w-full max-w-md flex items-center justify-center">
            {/* Video */}
            <video
              ref={(el) => (videoRefs.current[product.id] = el)}
              src={product.video}
              loop
              muted
              playsInline
              className="h-full w-full object-contain rounded-xl cursor-pointer"
              onClick={() => handlePlayPause(product.id)}
            />

            {/* WhatsApp Icon - Top Right */}
            <a
              href={`https://wa.me/919876543210?text=Hi! I'm interested in ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center justify-center p-2.5 sm:p-3 bg-green-500 rounded-full hover:bg-green-600 transition shadow-lg z-30"
            >
              <FaWhatsapp className="text-xl sm:text-2xl text-white" />
            </a>

            {/* Info Overlay - Bottom Left */}
            <div className="absolute bottom-5 left-3 sm:bottom-6 sm:left-4 z-20 max-w-[78%] sm:max-w-[70%]">
              <h2 className="text-white font-bold text-base sm:text-xl mb-1.5 sm:mb-2 drop-shadow-lg">
                {product.name}
              </h2>

              <div className="text-pink-400 font-bold text-base sm:text-lg mb-1 drop-shadow-lg">
                ₹{product.price.toLocaleString()}
              </div>

              {product.brand && (
                <div className="text-white text-sm font-medium mb-1 drop-shadow-lg">
                  Brand: {product.brand}
                </div>
              )}

              <div className="text-gray-200 text-sm drop-shadow-lg">
                Click WhatsApp to inquire!
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
