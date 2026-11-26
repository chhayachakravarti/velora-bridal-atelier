// import React, { useState } from "react";
// import { X, Filter, ChevronRight } from "lucide-react";
// import Slider from "rc-slider";
// import "rc-slider/assets/index.css";


// export default function FilterSidebar({ filters, onFilterChange, isMobile = false }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState(null);

//   const sections = {
//     size: ["Free Size", "S", "M", "L", "XL", "XXL", "XXXL", "4XL"],
//     color: [
//       "Beige (3)", "Black (2)", "Blue (24)", "Cream (35)", "Fawn (7)",
//       "Gold (1)", "Green (15)", "Grey (5)", "Maroon (8)", "Orange (5)",
//       "Peach (1)", "Pink (52)", "Purple (16)", "Red (11)", "Wine (8)", "Yellow (11)"
//     ],
//     price: ["Select price range", "6999 – 69999"],
//     design: [
//       "Cutdana Work", "Embroidery", "Floral", "Gota Work", "Hand Embroidery",
//       "Mirror Work", "Mori Work", "Moti Work", "Print", "Sequin Work",
//       "Stone Work", "Thread Work", "Weave", "Zardozi Work", "Zari", "Zari Weave"
//     ],
//     fabric: ["Art Silk", "Chinon", "Crepe", "Georgette", "Net", "Organza", "Tissue", "Velvet"],
//     availability: ["In Stock Only"],
//   };

//   const handleSelect = (type, value) => onFilterChange(type, value);

//   const SidebarContent = (
//     <div className="p-4 space-y-4">
//       <h2 className="text-lg font-semibold mb-3">Filters</h2>

//       {Object.keys(sections).map((section) => (
//         <div key={section} className="border-b border-gray-200 pb-2">
//           <button
//             className="flex justify-between w-full text-left py-2 font-medium text-gray-800 hover:text-pink-600"
//             onClick={() => setActiveSection(activeSection === section ? null : section)}
//           >
//             {section.charAt(0).toUpperCase() + section.slice(1)}
//             <ChevronRight
//               className={`w-4 h-4 transition-transform ${activeSection === section ? "rotate-90 text-pink-600" : ""}`}
//             />
//           </button>

//           {activeSection === section && (
//             <div className="pl-3 pb-2 space-y-2">
//               {section === "price" ? (
//                 <div className="pt-2">
//                   <Slider
//                     range
//                     min={6999}
//                     max={69999}
//                     defaultValue={[6999, 69999]}
//                     step={1000}
//                     trackStyle={[{ backgroundColor: "#db2777" }]}
//                     handleStyle={[
//                       { borderColor: "#db2777", backgroundColor: "#db2777" },
//                       { borderColor: "#db2777", backgroundColor: "#db2777" },
//                     ]}
//                     onAfterChange={(value) => handleSelect("price", value)}
//                   />
//                   <div className="flex justify-between text-sm text-gray-600 mt-2">
//                     <span>₹{filters.price?.[0] || 6999}</span>
//                     <span>₹{filters.price?.[1] || 69999}</span>
//                   </div>
//                 </div>
//               ) : (
//                 sections[section].map((item) => (
//                   <label
//                     key={item}
//                     className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-pink-600"
//                   >
//                     <input
//                       type={section === "price" ? "radio" : "checkbox"}
//                       name={section}
//                       onChange={() => handleSelect(section, item)}
//                       className="accent-pink-600"
//                     />
//                     {item}
//                   </label>
//                 ))
//               )}
//             </div>
//           )}
//         </div>
//       ))}

//     </div>
//   );

//   // ─── Mobile Version ────────────────────────────────
//   if (isMobile) {
//     return (
//       <>
//         <button
//           onClick={() => setIsOpen(true)}
//           className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg fixed bottom-6 right-6 shadow-lg z-50 md:hidden"
//         >
//           <Filter size={18} /> Filters
//         </button>

//         <div
//           className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white shadow-xl transform ${isOpen ? "translate-x-0" : "-translate-x-full"
//             } transition-transform duration-300 z-40`}
//         >
//           <div className="flex items-center justify-between p-4 border-b">
//             <h2 className="font-semibold">Filters</h2>
//             <button onClick={() => setIsOpen(false)}>
//               <X size={22} />
//             </button>
//           </div>
//           <div className="overflow-y-auto h-[calc(100%-60px)]">{SidebarContent}</div>
//         </div>

//         {isOpen && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
//             onClick={() => setIsOpen(false)}
//           ></div>
//         )}
//       </>
//     );
//   }

//   // ─── Desktop Version ───────────────────────────────
//   return <div className="h-full overflow-y-auto">{SidebarContent}</div>;
// }

// import React, { useState } from "react";
// import { X } from "lucide-react";

// export default function FilterSidebar({ filters, onFilterChange, isMobile, onClose }) {
//   const [openSection, setOpenSection] = useState(null);

//   const sizes = ["Free Size", "S", "M", "L", "XL", "XXL", "XXXL", "04XL"];
//   const colors = [
//     "Beige", "Black", "Blue", "Cream", "Fawn", "Gold", "Green", "Grey",
//     "Maroon", "Orange", "Peach", "Pink", "Purple", "Red", "Wine", "Yellow"
//   ];
//   const fabrics = ["Art Silk", "Chinon", "Crepe", "Georgette", "Net", "Organza", "Tissue", "Velvet"];
//   const designs = [
//     "Cutdana Work", "Embroidery", "Floral", "Gota Work", "Hand Embroidery",
//     "Mirror Work", "Mori Work", "Moti Work", "Print", "Sequin Work",
//     "Stone Work", "Thread Work", "Weave", "Zardozi Work", "Zari", "Zari Weave"
//   ];

//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? null : section);
//   };

//   const handleFilter = (type, value) => {
//     onFilterChange(type, value);
//   };

//   return (
//     <>
//       {/* Sidebar overlay for mobile */}
//       {isMobile && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-30"
//           onClick={onClose}
//         ></div>
//       )}

//       <div
//         className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-40 transform transition-transform duration-300 overflow-y-auto p-5
//         ${isMobile ? "translate-x-0" : ""}`}
//       >
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-semibold">Filters</h2>
//           {isMobile && (
//             <button onClick={onClose}>
//               <X size={22} />
//             </button>
//           )}
//         </div>

//         {/* Collapsible Sections */}
//         <div className="space-y-4">
//           {/* Size */}
//           <div>
//             <button
//               onClick={() => toggleSection("size")}
//               className="w-full flex justify-between font-semibold"
//             >
//               Size
//               <span>{openSection === "size" ? "▲" : "▼"}</span>
//             </button>
//             {openSection === "size" && (
//               <div className="mt-2 flex flex-wrap gap-2">
//                 {sizes.map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => handleFilter("size", size)}
//                     className={`px-3 py-1 rounded-full border ${
//                       filters.size === size
//                         ? "bg-pink-600 text-white border-pink-600"
//                         : "border-gray-300 text-gray-700"
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Color */}
//           <div>
//             <button
//               onClick={() => toggleSection("color")}
//               className="w-full flex justify-between font-semibold"
//             >
//               Color
//               <span>{openSection === "color" ? "▲" : "▼"}</span>
//             </button>
//             {openSection === "color" && (
//               <div className="mt-2 flex flex-wrap gap-2">
//                 {colors.map((color) => (
//                   <button
//                     key={color}
//                     onClick={() => handleFilter("color", color)}
//                     className={`px-3 py-1 rounded-full border ${
//                       filters.color === color
//                         ? "bg-pink-600 text-white border-pink-600"
//                         : "border-gray-300 text-gray-700"
//                     }`}
//                   >
//                     {color}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Price */}
//           <div>
//             <button
//               onClick={() => toggleSection("price")}
//               className="w-full flex justify-between font-semibold"
//             >
//               Price
//               <span>{openSection === "price" ? "▲" : "▼"}</span>
//             </button>
//             {openSection === "price" && (
//               <div className="mt-2 flex flex-col gap-2">
//                 <label className="text-sm">Select price range</label>
//                 <input
//                   type="number"
//                   placeholder="Min"
//                   className="border rounded px-2 py-1 w-full"
//                   onChange={(e) =>
//                     handleFilter("price", { ...filters.price, min: +e.target.value })
//                   }
//                 />
//                 <input
//                   type="number"
//                   placeholder="Max"
//                   className="border rounded px-2 py-1 w-full"
//                   onChange={(e) =>
//                     handleFilter("price", { ...filters.price, max: +e.target.value })
//                   }
//                 />
//               </div>
//             )}
//           </div>

//           {/* Design */}
//           <div>
//             <button
//               onClick={() => toggleSection("design")}
//               className="w-full flex justify-between font-semibold"
//             >
//               Design
//               <span>{openSection === "design" ? "▲" : "▼"}</span>
//             </button>
//             {openSection === "design" && (
//               <div className="mt-2 flex flex-wrap gap-2">
//                 {designs.map((design) => (
//                   <button
//                     key={design}
//                     onClick={() => handleFilter("design", design)}
//                     className={`px-3 py-1 rounded-full border ${
//                       filters.design === design
//                         ? "bg-pink-600 text-white border-pink-600"
//                         : "border-gray-300 text-gray-700"
//                     }`}
//                   >
//                     {design}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Fabric */}
//           <div>
//             <button
//               onClick={() => toggleSection("fabric")}
//               className="w-full flex justify-between font-semibold"
//             >
//               Fabric
//               <span>{openSection === "fabric" ? "▲" : "▼"}</span>
//             </button>
//             {openSection === "fabric" && (
//               <div className="mt-2 flex flex-wrap gap-2">
//                 {fabrics.map((fabric) => (
//                   <button
//                     key={fabric}
//                     onClick={() => handleFilter("fabric", fabric)}
//                     className={`px-3 py-1 rounded-full border ${
//                       filters.fabric === fabric
//                         ? "bg-pink-600 text-white border-pink-600"
//                         : "border-gray-300 text-gray-700"
//                     }`}
//                   >
//                     {fabric}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Availability */}
//           <div>
//             <button
//               onClick={() => toggleSection("availability")}
//               className="w-full flex justify-between font-semibold"
//             >
//               Availability
//               <span>{openSection === "availability" ? "▲" : "▼"}</span>
//             </button>
//             {openSection === "availability" && (
//               <div className="mt-2 flex flex-wrap gap-2">
//                 <button
//                   onClick={() => handleFilter("availability", "inStock")}
//                   className={`px-3 py-1 rounded-full border ${
//                     filters.availability === "inStock"
//                       ? "bg-pink-600 text-white border-pink-600"
//                       : "border-gray-300 text-gray-700"
//                   }`}
//                 >
//                   In Stock Only
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useState } from "react";
import { X } from "lucide-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function FilterSidebar({ filters, onFilterChange, isMobile, onClose }) {
  const [openSection, setOpenSection] = useState(null);

  const sizes = ["Free Size", "S", "M", "L", "XL", "XXL", "XXXL", "04XL"];
  const colors = [
    { name: "Beige", code: "#F5F5DC" },
    { name: "Black", code: "#000000" },
    { name: "Blue", code: "#1E90FF" },
    { name: "Cream", code: "#FFFDD0" },
    { name: "Fawn", code: "#E5AA70" },
    { name: "Gold", code: "#FFD700" },
    { name: "Green", code: "#008000" },
    { name: "Grey", code: "#808080" },
    { name: "Maroon", code: "#800000" },
    { name: "Orange", code: "#FFA500" },
    { name: "Peach", code: "#FFE5B4" },
    { name: "Pink", code: "#FF69B4" },
    { name: "Purple", code: "#800080" },
    { name: "Red", code: "#FF0000" },
    { name: "Wine", code: "#722F37" },
    { name: "Yellow", code: "#FFFF00" },
  ];
  const fabrics = ["Art Silk", "Chinon", "Crepe", "Georgette", "Net", "Organza", "Tissue", "Velvet"];
  const designs = [
    "Cutdana Work", "Embroidery", "Floral", "Gota Work", "Hand Embroidery",
    "Mirror Work", "Mori Work", "Moti Work", "Print", "Sequin Work",
    "Stone Work", "Thread Work", "Weave", "Zardozi Work", "Zari", "Zari Weave"
  ];

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleFilter = (type, value) => {
    onFilterChange(type, value);
  };

  const clearAll = () => {
    onFilterChange("clearAll", true);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose}></div>

      <div
        className="fixed bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out overflow-y-auto p-5 bottom-0 left-0 w-full max-h-[80vh] rounded-t-2xl md:rounded-none md:top-0 md:bottom-auto md:w-72 md:h-full md:max-h-full"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button onClick={onClose} aria-label="Close filters" className="p-1 rounded hover:bg-gray-100">
            <X size={22} />
          </button>
        </div>

        {/* Clear All */}
        <button
          onClick={clearAll}
          className="text-pink-600 font-medium text-sm mb-4 hover:underline"
        >
          Clear All
        </button>

        {/* Sections */}
        <div className="space-y-4">
          {/* Size */}
          <Section title="Size" open={openSection === "size"} toggle={() => toggleSection("size")}>
            <div className="flex flex-wrap gap-2 mt-2">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => handleFilter("size", size)}
                  className={`px-3 py-1 rounded-full border ${
                    filters.size === size
                      ? "bg-pink-600 text-white border-pink-600"
                      : "border-gray-300 text-gray-700"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </Section>

          {/* Color */}
          <Section title="Color" open={openSection === "color"} toggle={() => toggleSection("color")}>
            <div className="flex flex-wrap gap-2 mt-2">
              {colors.map(color => (
                <button
                  key={color.name}
                  onClick={() => handleFilter("color", color.name)}
                  className={`w-6 h-6 rounded-full border ${filters.color === color.name ? "border-pink-600" : "border-gray-300"}`}
                  style={{ backgroundColor: color.code }}
                />
              ))}
            </div>
          </Section>

          {/* Price */}
          <Section title="Price" open={openSection === "price"} toggle={() => toggleSection("price")}>
            <div className="mt-2">
              <Slider
                range
                min={6999}
                max={69999}
                step={1000}
                defaultValue={[filters.price?.min || 6999, filters.price?.max || 69999]}
                trackStyle={[{ backgroundColor: "#db2777" }]}
                handleStyle={[
                  { borderColor: "#db2777", backgroundColor: "#db2777" },
                  { borderColor: "#db2777", backgroundColor: "#db2777" },
                ]}
                onAfterChange={(value) => handleFilter("price", { min: value[0], max: value[1] })}
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>₹{filters.price?.min || 6999}</span>
                <span>₹{filters.price?.max || 69999}</span>
              </div>
            </div>
          </Section>

          {/* Design */}
          <Section title="Design" open={openSection === "design"} toggle={() => toggleSection("design")}>
            <div className="flex flex-wrap gap-2 mt-2">
              {designs.map(design => (
                <button
                  key={design}
                  onClick={() => handleFilter("design", design)}
                  className={`px-3 py-1 rounded-full border ${
                    filters.design === design
                      ? "bg-pink-600 text-white border-pink-600"
                      : "border-gray-300 text-gray-700"
                  }`}
                >
                  {design}
                </button>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}

// Collapsible Section Component
const Section = ({ title, open, toggle, children }) => (
  <div>
    <button
      className="w-full flex justify-between font-semibold"
      onClick={toggle}
    >
      {title} <span>{open ? "▲" : "▼"}</span>
    </button>
    {open && children}
  </div>
);
