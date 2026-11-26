import React, { useEffect, useState } from "react";
import StoryScroll from "../components/StoryScroll";
import InstaGallery from "../components/InstaGallery";

export default function Makeup() {
  const [makeup, setMakeup] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [videoOpenCard, setVideoOpenCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/makeup.json");
      const data = await res.json();
      setMakeup(data.makeup);
      setFiltered(data.makeup.slice(0, 8));
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* === Story Scroll === */}
      <section className="w-full px-4 md:px-8 py-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-pink-700">
          Trending Makeup
        </h2>
        <StoryScroll images={filtered} onStoryClick={() => {}} />
      </section>

      {/* === Gallery (Pictures + Videos) === */}
      <InstaGallery data={filtered} onOpenCard={(item) => setVideoOpenCard(item)} />

      {/* === Selected Card Details (same as Lehengas) === */}
      {videoOpenCard && (
        <div className="max-w-7xl mx-auto w-full p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col">
              <img
                src={videoOpenCard.image}
                alt={videoOpenCard.name}
                className="w-full h-56 object-cover rounded-xl mb-3"
              />
              <h3 className="text-sm font-medium line-clamp-2">{videoOpenCard.name}</h3>
              <p className="text-pink-600 font-semibold mt-1">
                ₹{videoOpenCard.price.toLocaleString()}
              </p>
              <div className="mt-auto flex gap-2 pt-3">
                <a
                  href={`/makeup/${videoOpenCard.id}`}
                  className="flex-1 bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-700 transition text-sm font-medium text-center"
                >
                  View Details
                </a>
                <a
                  href={`https://wa.me/919876543210?text=Hi! I'm interested in ${encodeURIComponent(
                    videoOpenCard.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-500 w-10 h-10 rounded-xl hover:bg-green-600 transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="h-20"></div>

    </div>
  );
}
