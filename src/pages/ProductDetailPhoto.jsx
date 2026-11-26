import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { useGesture } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";

export default function ProductDetailPhoto() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const containerRef = useRef(null);

  // Spring for scale + position
  const [{ scale, x, y }, api] = useSpring(() => ({
    scale: 1,
    x: 0,
    y: 0,
    config: { tension: 300, friction: 30 },
  }));

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/data/lehengas.json");
      const data = await res.json();
      setProducts(data.lehengas);
    };
    fetchProducts();
  }, []);

  // Auto-scroll to clicked photo
  useEffect(() => {
    if (products.length && containerRef.current) {
      const target = document.getElementById(`photo-${id}`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [products, id]);

  // Gesture handling: pinch + drag
  const bind = useGesture({
    onPinch: ({ offset: [d] }) => {
      api.start({ scale: d });
    },
    onPinchEnd: () => {
      // Keep current zoom level or reset to 1
      api.start({ scale: 1, x: 0, y: 0 });
    },
    onDrag: ({ offset: [dx, dy] }) => {
      api.start({ x: dx, y: dy });
    },
    onDragEnd: () => {
      // Optional: reset position when drag ends if not zoomed
      api.start((prev) => ({ x: 0, y: 0, scale: prev.scale < 1 ? 1 : prev.scale }));
    },
  });

  const toggleZoom = (photoId) => {
    api.start({ scale: scale.get() === 1 ? 1.5 : 1, x: 0, y: 0 });
  };

  if (!products.length)
    return <p className="text-center mt-20 text-gray-500">Loading photos...</p>;

  return (
    <div
      ref={containerRef}
      className="w-full h-[100dvh] overflow-y-scroll snap-y snap-mandatory bg-black"
    >
      {products.map((product) => (
        <div
          key={product.id}
          id={`photo-${product.id}`}
          className="w-full h-[100dvh] snap-start relative flex items-center justify-center px-2 sm:px-4"
        >
          {/* Photo with zoom + drag */}
          <animated.img
            {...bind()}
            src={product.image}
            alt={product.name}
            onClick={() => toggleZoom(product.id)}
            className="max-h-[85dvh] max-w-[94vw] sm:max-w-[85vw] w-auto object-contain rounded-xl shadow-lg cursor-pointer touch-none"
            style={{ scale, x, y }}
          />

          {/* WhatsApp Icon */}
          <a
            href={`https://wa.me/919876543210?text=Hi! I'm interested in ${encodeURIComponent(
              product.name
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center justify-center p-2.5 sm:p-3 bg-green-500 rounded-full hover:bg-green-600 transition shadow-lg z-30"
          >
            <FaWhatsapp className="text-xl sm:text-2xl text-white" />
          </a>

          {/* Info Overlay */}
          <div className="absolute bottom-5 left-3 sm:bottom-6 sm:left-4 z-20 max-w-[78%] sm:max-w-[70%]">
            <h2 className="text-white font-bold text-base sm:text-xl mb-1.5 sm:mb-2 drop-shadow-lg">
              {product.name}
            </h2>
            <div className="text-pink-400 font-bold text-base sm:text-lg mb-1 drop-shadow-lg">
              ₹{product.price?.toLocaleString()}
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
      ))}
    </div>
  );
}
