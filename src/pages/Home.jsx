// Icons Import
import React from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
// Component Im
import Footer from "../components/Common/Footer"
import Slider1 from "../components/Common/Slider1"
import Slider2 from "../components/Common/Slider2"
import TrekingL from "../components/Common/TrekingL"
import AtractionSlider from "../components/Common/AtractionSlider"
import Gallery from "../components/Common/Gallary"
function Home() {
  return (
    <div className="bg-white">
      {/* Section 1 */}
      <Slider1/>
      <Slider2 />
      {/* Section 2 */}
      <div className="min-h-screen bg-gray-100">
      <TrekingL/>
    </div>
    <AtractionSlider/>
      
     <Gallery/>     

          
         

      {/* Section 3 */}
      

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
