import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/data/lehengas.json");
      const data = await res.json();
      setProducts(data.lehengas);
    };
    fetchProducts();
  }, []);

  const product = products.find((p) => p.id.toString() === id);
  if (!product) return <p className="text-center mt-20 text-gray-500">Loading...</p>;

  const isVideo = Boolean(product.video);

  return (
    <div className="w-full h-[100dvh] bg-black flex items-center justify-center relative overflow-hidden px-2 sm:px-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 bg-white/10 hover:bg-white/20 text-white p-2.5 sm:p-3 rounded-full transition"
        title="Back"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      {/* Show Video or Image */}
      {isVideo ? (
        <video
          ref={videoRef}
          src={product.video}
          className="max-h-[88dvh] max-w-full object-contain rounded-xl"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          src={product.image}
          alt={product.name}
          className="max-h-[88dvh] max-w-full object-contain rounded-xl"
        />
      )}

      {/* WhatsApp */}
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

      {/* Info */}
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
  );
}
