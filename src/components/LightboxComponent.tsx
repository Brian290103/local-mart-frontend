import React, {useEffect, useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {Maximize2} from "lucide-react"; // Icon for the expand effect
import "yet-another-react-lightbox/plugins/captions.css";
import Captions from "yet-another-react-lightbox/plugins/captions";

// Define types for the props
interface LightboxComponentProps {
  images: { src: string }[]; // Array of image URLs
  currentImage: string; // URL of the current image displayed
  currentImageIndex: number; // Index of the current image in the images array
  title?: string; // Optional caption for all images
  description?: string; // Optional caption for all images
}

const LightboxComponent: React.FC<LightboxComponentProps> = ({
  images,
  currentImage,
  currentImageIndex,
  title,
  description,
}) => {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState<{ src: string; caption?: string }[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Initialize slides with images and a common caption
  useEffect(() => {
    const mappedSlides = images.map((item) => ({
      src: item,
      title,
      description,
    }));
    setSlides(mappedSlides);
  }, [images, title]);

  // Open lightbox at the selected image index
  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setOpen(true);
  };

  // console.log(slides);

  return (
    <>
      {/* Display the current image with hover overlay */}
      <div
        onClick={() => handleImageClick(currentImageIndex)}
        className="cursor-pointer relative group min-h-[300px] w-full rounded-xl overflow-hidden"
      >
        {/* Hover overlay with expand icon */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center transition-opacity">
          <Maximize2
            className="text-white delay-100 w-10 h-10 scale-0 group-hover:scale-100 duration-300"
            aria-hidden="true"
          />
        </div>

        <img
          src={currentImage}
          alt="Product preview"
          className="min-h-[300px] w-full rounded-xl object-cover"
          loading="lazy"
        />
      </div>

      {/* Lightbox component to display images */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Captions]}
        index={selectedImageIndex}
        // render={{
        //   slide: (slide) => (
        //     <div className="flex flex-col items-center text-center p-4">
        //       <img
        //         src={slide.src}
        //         alt="Enlarged preview"
        //         className="w-full h-auto rounded-xl"
        //       />
        //       {caption && <p className="text-white mt-4">{caption}</p>}
        //     </div>
        //   ),
        // }}
      />
    </>
  );
};

export default LightboxComponent;
