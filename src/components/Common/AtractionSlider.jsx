import React, { useState, useEffect } from 'react';
import Img1 from '../../assets/Images/trekking_1.jpeg';
import Img2 from '../../assets/Images/trekking_2.jpeg';
import Img3 from '../../assets/Images/trekking_3.jpeg';
import Img4 from '../../assets/Images/trekking_4.jpeg';
import Img5 from '../../assets/Images/trekking_5.jpeg';
import Img6 from '../../assets/Images/trekking_6.jpeg';

const imageData = [
  {
    title: "Lorem Ipsum",
    location: "Nashik",
    description: "Lorem Ipsum is dummy text",
    imageUrl: Img1
  },
  {
    title: "80 steps",
    location: "Location 2",
    description: "Lorem Ipsum is dummy text",
    imageUrl: Img2
  },
  {
    title: "Lorem Ipsum",
    location: "Location 2",
    description: "Lorem Ipsum is dummy text",
    imageUrl: Img3
  },
  {
    title: "Lorem Ipsum",
    location: "Location 3",
    description: "Lorem Ipsum is dummy text",
    imageUrl: Img4
  },
  {
    title: "Lorem Ipsum",
    location: "Location 3",
    description: "Lorem Ipsum is dummy text",
    imageUrl: Img5
  },
  {
    title: "View More Images",
    location: "Location 3",
    description: "Lorem Ipsum is dummy text",
    imageUrl: Img6
  },
];

const AtractionSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === imageData.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === imageData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Major Attractions</h2>
      <p className="text-gray-500 mb-8 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
      </p>
      <div className="relative w-full max-w-6xl flex items-center justify-center">
        <button onClick={handlePrevClick} className="absolute left-0 p-2 bg-white text-black rounded-full shadow-md hover:bg-gray-200 z-10">
          &lt;
        </button>
        <div className="flex overflow-x-hidden space-x-4 p-4">
          {imageData.map((image, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-48 h-64 p-2 transition-transform duration-300 ease-in-out transform ${
                index === currentIndex ? 'scale-105' : 'scale-100'
              }`}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={image.imageUrl} alt={image.title} className="w-full h-40 object-cover" />
                <div className="p-2">
                  <h2 className="text-lg font-bold">{image.title}</h2>
                  <p className="text-gray-600">{image.location}</p>
                  <p className="text-gray-600">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNextClick} className="absolute right-0 p-2 bg-white text-black rounded-full shadow-md hover:bg-gray-200 z-10">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default AtractionSlider;
