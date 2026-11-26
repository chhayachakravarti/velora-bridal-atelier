import React, { useState } from "react";
import OfferBar from "../components/OfferBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function MainLayout({
  children,
  enableNavbar = false,
  minimalHeader = false,
  onSearch,
  onSortChange
}) {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <div className="sticky top-0 z-50 bg-gray-50 shadow-sm">
        {/* Only show OfferBar if not minimal */}
        {!minimalHeader && <OfferBar />}

        <Header minimal={minimalHeader} />

        {enableNavbar && (
          <Navbar
            onSearch={onSearch}
            onSortChange={onSortChange}
            showFilter={showFilter}
            setShowFilter={setShowFilter}
          />
        )}
      </div>

      <main className="flex-1 w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}

