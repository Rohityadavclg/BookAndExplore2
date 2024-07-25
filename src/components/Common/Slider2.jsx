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
    title: "Lorem Ipsum",
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
    title: "Lorem Ipsum",
    location: "Location 3",
    description: "Lorem Ipsum is dummy text",
    imageUrl: Img6
  },
];

const Slider2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === imageData.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(handlePrevClick, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full overflow-hidden">
      <button onClick={handlePrevClick} className="p-2 bg-blue-600 text-black rounded-full">
        &lt;
      </button>
      <div className="flex overflow-hidden space-x-4 p-4 w-full">
        {imageData.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-1/5 h-64 p-2 transition-transform duration-300 ease-in-out transform ${
              index === currentIndex ? 'scale-105' : 'scale-100'
            }`}
          >
            <div className="bg-white text-black rounded-l-lg shadow-md overflow-hidden">
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
      <button onClick={handleNextClick} className="p-2 bg-blue-600 text-white rounded-full">
        &gt;
      </button>
    </div>
  );
};

export default Slider2;
