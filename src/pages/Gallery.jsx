import { useState } from "react";
import Footer from "../components/Footer";


const images = [
 
  {
    src: "/photos/bikesShed.webp",
    alt: "Shed Bikes",
    caption: "Razor electric bikes parked in front of a shed.",
    date: "June 2025",
  },
  {
    src: "/photos/canalTrees.webp",
    alt: "Panther Creek",
    caption: "Panther Creek in the summer.",
    date: "June 2025",
  },
  {
    src: "/photos/shedSigns.webp",
    alt: "Signs!",
    caption: "Road signs.",
    date: "June 2025",
  },
  {
    src: "/photos/ballShot.webp",
    alt: "Hoops",
    caption: "Basketball shot.",
    date: "June 2025",
  },
  {
    src: "/photos/shedBridge.webp",
    alt: "Fall leaves bridge",
    caption: "Fall time in Morrow, GA.",
    date: "November 2018",
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <div className="text-white flex flex-col items-center justify-center mt-10">
  <h2 className="text-[36px] font-bold mb-6">Gallery</h2>

  {/* Masonry Columns */}
  <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl px-4 space-y-4">
    {images.map((image, index) => (
      <div
        key={index}
        className="break-inside-avoid cursor-pointer transition s:hover:drop-shadow-[0.1rem_0.1rem_15px_rgba(235,94,40,0.7)] hover:shadow-2xl duration-300 hover:scale-[1.02]"
        onClick={() => setSelectedImage(image)}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="rounded-lg w-full object-cover shadow-lg mb-2"
        />
      </div>
    ))}
  </div>
</div>


      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-lg overflow-hidden max-w-xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 text-black">
              <h3 className="font-semibold mb-2">{selectedImage.alt}</h3>
              <p>{selectedImage.caption}</p>
              <p className="mt-1 font-light italic">{selectedImage.date}</p>
              <button
                onClick={() => setSelectedImage(null)}
                className="mt-4 px-4 py-2 bg-[#EB5E28] text-white rounded-lg hover:bg-[#cf4d1a]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
     
      <div className=" py-24"></div>
      <Footer />
    </>
  );
}
export default Gallery;
