import React from 'react';
import image from '../../assets/Images/bg-image-1.jpg'
const jsonData = {
  title: "Looking Trek Guide For",
  buttons: ["Sahyadri", "Himalaya", "Aravali"],
  inputs: [
    { label: "Enter Location", placeholder: "Enter Location" },
    { label: "Session", placeholder: "Winter" },
    { label: "Gradient", placeholder: "Demanding Treks" },
    { label: "Duration", placeholder: "2 Days" }
  ],
  searchButton: { label: "Search" }
};

const Slider1 = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-8">{jsonData.title}</h1>
        <div className="flex space-x-4 mb-8">
          {jsonData.buttons.map((button, index) => (
            <button key={index} className="px-4 py-2 bg-blue-600 rounded-full">
              {button}
            </button>
          ))}
        </div>
        <div className="flex space-x-4">
          {jsonData.inputs.map((input, index) => (
            <div key={index} className="flex flex-col items-center">
              <label className="mb-2">{input.label}</label>
              <input type="text" className="px-4 py-2 text-black rounded-full" placeholder={input.placeholder} />
            </div>
          ))}
          <button className="px-4 py-2 bg-yellow-500 rounded-full mt-6">{jsonData.searchButton.label}</button>
        </div>
      </div>
    </div>
  );
};

export default Slider1;