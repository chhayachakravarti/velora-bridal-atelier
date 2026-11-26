import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";

export default function MakeupDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/makeup.json");
      const data = await res.json();
      const found = data.makeup.find((item) => String(item.id) === id);
      setProduct(found);
    };
    fetchData();
  }, [id]);

  // ✅ Autoplay video like a reel
  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          videoRef.current.muted = true;
          videoRef.current.play();
        });
      }
    }
  }, [product]);

  if (!product)
    return (
      <div className="text-center mt-20 text-gray-500 text-lg">Loading...</div>
    );

  const isVideo = Boolean(product.video);

  return (
    <div className="w-full min-h-[100dvh] bg-black flex items-center justify-center px-3 sm:px-4 py-6 sm:py-10 relative overflow-hidden">
      {/* === Back Button === */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 z-30 bg-white/10 hover:bg-white/20 text-white p-2.5 sm:p-3 rounded-full transition"
        title="Back"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      {/* === Content Wrapper === */}
      <div className="relative w-full max-w-[430px] h-[82dvh] sm:h-auto sm:aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
        {/* === Video or Image === */}
        {isVideo ? (
          <video
            ref={videoRef}
            src={product.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        )}

        {/* === WhatsApp Button === */}
        <a
          href={`https://wa.me/919876543210?text=Hi! I'm interested in ${encodeURIComponent(
            product.name
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 flex items-center justify-center bg-green-500 p-3 rounded-full hover:bg-green-600 transition shadow-lg z-30"
        >
          <FaWhatsapp className="text-2xl text-white" />
        </a>

        {/* === Info Overlay === */}
        <div className="absolute bottom-5 left-4 z-20 max-w-[80%] text-left">
          <h2 className="text-white font-bold text-lg mb-1 drop-shadow-lg">
            {product.name}
          </h2>
          <p className="text-pink-400 font-semibold text-base mb-1 drop-shadow-lg">
            ₹{product.price?.toLocaleString()}
          </p>
          {product.brand && (
            <p className="text-white text-xs mb-1 drop-shadow-lg">
              Brand: {product.brand}
            </p>
          )}
          <p className="text-gray-300 text-xs">Click WhatsApp to inquire</p>
        </div>
      </div>
    </div>
  );
}
