import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faSnowflake, faCloudRain } from '@fortawesome/free-solid-svg-icons';
import Img1 from '../../assets/Images/trekking_1.jpeg';
import Img2 from '../../assets/Images/trekking_2.jpeg';
import Img3 from '../../assets/Images/trekking_3.jpeg';
import Img4 from '../../assets/Images/trekking_4.jpeg';
import Img5 from '../../assets/Images/trekking_5.jpeg';
import Img6 from '../../assets/Images/trekking_6.jpeg';

const imageData = {
  Summer: [
    { title: "Lorem Ipsum", imageUrl: Img1 },
    { title: "Lorem Ipsum", imageUrl: Img2 },
    { title: "Lorem Ipsum", imageUrl: Img4 },
    { title: "Lorem Ipsum", imageUrl: Img5 },
    { title: "Lorem Ipsum", imageUrl: Img6 },
    { title: "Lorem Ipsum", imageUrl: Img3 },
  ],
  Winter: [
    { title: "Lorem Ipsum", imageUrl: Img4 },
    { title: "Lorem Ipsum", imageUrl: Img5 },
    { title: "Lorem Ipsum", imageUrl: Img4 },
    { title: "Lorem Ipsum", imageUrl: Img5 },
    { title: "Lorem Ipsum", imageUrl: Img6 },
    { title: "Lorem Ipsum", imageUrl: Img6 },
    
  ],
  Monsoon: [
    { title: "Lorem Ipsum", imageUrl: Img1 },
    { title: "Lorem Ipsum", imageUrl: Img4 },
    { title: "Lorem Ipsum", imageUrl: Img2 },
    { title: "Lorem Ipsum", imageUrl: Img1 },
    { title: "Lorem Ipsum", imageUrl: Img4 },
    { title: "Lorem Ipsum", imageUrl: Img2 },
  ],
};

const Gallery = () => {
  const [selectedSeason, setSelectedSeason] = useState('Summer');

  const handleSeasonChange = (season) => {
    setSelectedSeason(season);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
     <div className='flex flex-row  '>
     <div>
       <h2 className="text-4xl font-bold mb-4 text-gray-800">Harihar Images Gallery</h2>
      <p className="text-gray-500 mb-8 text-center max-w-2xl">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
      </p>
       </div>
      <div className="flex space-x-4 mb-8">
        {['Summer', 'Winter', 'Monsoon'].map((season) => (
          <button
            key={season}
            onClick={() => handleSeasonChange(season)}
            className={`py-2 px-4 rounded-none flex items-center space-x-1 ${selectedSeason === season ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            <FontAwesomeIcon icon={season === 'Summer' ? faSun : season === 'Winter' ? faSnowflake : faCloudRain} />
            <span>{season}</span>
          </button>
        ))}
      </div>
     </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imageData[selectedSeason].map((image, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-500 hover:scale-105">
            <img src={image.imageUrl} alt={image.title} className="w-full h-48 object-cover" />
             
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
