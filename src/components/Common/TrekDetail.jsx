import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMountain, faTag, faRuler, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../assets/Images/indiamap.jpg'
const TrekDetail = ({ location }) => {
    const {
      title,
      description,
      type,
      category,
      parentRange,
      altitude,
      subRange,
      routes,
      image,
    } = location;
  
    return (
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={image} alt={title} className="w-full rounded-lg md:rounded-none md:rounded-s-lg h-auto md:h-full object-cover" />
           
        </div>
        <div className="flex flex-col justify-between p-6 md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-700 my-2">{description}</p>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div>
              <span className="text-sm font-semibold">Type: </span>
              <span className="text-sm">{type}</span>
            </div>
            <div>
              <span className="text-sm font-semibold">Category: </span>
              <span className="text-sm">{category}</span>
            </div>
            <div>
              <span className="text-sm font-semibold">Parent Range: </span>
              <span className="text-sm">{parentRange}</span>
            </div>
            <div>
              <span className="text-sm font-semibold">Altitude: </span>
              <span className="text-sm">{altitude}</span>
            </div>
            <div>
              <span className="text-sm font-semibold">Sub Range: </span>
              <span className="text-sm">{subRange}</span>
            </div>
          </div>
          <div className="my-4">
            <h3 className="text-lg font-semibold text-gray-800">Grades</h3>
            <table  className='rounded-lg' style={{ width: '749px', height: '137px', top: '350.88px', left: '780.5px', gap: '0px', borderRadius: '15px 0px 0px 0px', border: '1px solid #D4ECFF', opacity: '1' }}>
              <thead>
                <tr className="  border-gray-200 bg-gray-100 bg-blue-50 ">
                  <th className="py-2 text-gray-800">Easy</th>
                  <th className="py-2 text-gray-800">Moderative</th>
                  <th className="py-2 text-gray-800">Hard</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((route, index) => (
                  <tr key={index} className="text-center  ">
                    <td className="py-2">{route.grade}</td>
                    <td className="py-2">{route.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
           
        </div>

      </div>
      <div className="my-4">
            
            <div className="text-[16px] flex flex-row gap-28">
              <p className='flex flex-row'><img src={img1} className='h-8'/>Country: {location.country}</p>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />State: {location.state}</p>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />District: {location.district}</p>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Parent Range: {location.parentRange}</p>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Region: {location.region}</p>
            </div>
          </div>
    </div>
    );
  };

export default TrekDetail