import React, { useState, useEffect } from 'react';
import sampleImage from '../../assets/Images/bg-image-1.jpg';
import { HomePageExplore } from '../../data/homepage-explore';
import TrekDetail from './TrekDetail';
import Img1 from '../../assets/Images/trekking_13.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMountain, faTag, faRuler, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import track1 from '../../assets/Images/trekking_1.jpeg'
const tabsName = [
  'Ajneri', 'Harihar', 'Harishchandra', 'Ratangad', 'Mahuli', 
  'Ramshej', 'Madan Fort', 'Kalsubai Peak', 'Bhaskarga', 'Kavnai'
];

const trekkingData = {
  image: Img1,
  title: "Harihar Fort Trek",
  description: "Experience the thrill of climbing the rock cut steps of 'Harihar'",
  type: "Hill fort",
  category: "Trek",
  parentRange: "Sahyadri (Western Ghats)",
  altitude: "1120 m / 3676 ft",
  subRange: "Trimbakesh",
  routes: [
    { grade: "Easy", name: "Harshwandi Route" },
    { grade: "Moderate", name: "Nirgudpada Route" },
  ],
  location: {
    country: "India",
    state: "Maharashtra",
    district: "Nashik",
    parentRange: "Trimbakeshwar",
    region: "Trimbakeshwar",
  },
};

const TrekingL = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

  const {
    title,
    description,
    type,
    category,
    parentRange,
    altitude,
    subRange,
    routes,
    location,
  } = trekkingData;

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div className="container mx-auto p-4">
      <div>
        <div className="text-4xl font-semibold text-center my-10">
          <p className="text-center text-white text-5xl font-semibold mt-1">
            Top rated Trekking locations
          </p>
        </div>
      </div>
      {/* Tabs Section */}
      <div className="hidden lg:flex gap-5 -mt-5 mx-auto w-max bg-white text-black p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
        {tabsName.map((ele, index) => (
          <div
            className={`text-[16px] flex flex-row items-center gap-2 ${
              currentTab === ele
                ? "bg-richblack-900 text-richblack-5 font-medium"
                : "text-black"
            } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
            key={index}
            onClick={() => setMyCards(ele)}
          >
            {ele}
          </div>
        ))}
      </div>
      <div></div>
      <div className="hidden lg:block lg:h-[3px]"></div>
      {/* Cards Group */}
    <TrekDetail location={trekkingData} />
    </div>
  );
};

export default TrekingL;

 

   
   
      {/* Cards Group */}
    //   <div className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
    //     {courses.map((ele, index) => {
    //       return (
    //         <CourseCard
    //           key={index}
    //           cardData={ele}
    //           currentCard={currentCard}
    //           setCurrentCard={setCurrentCard}
    //         />
    //       );
    //     })}
    //   </div>
    

 
