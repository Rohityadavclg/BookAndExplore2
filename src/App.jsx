import { useEffect } from "react"
import React from "react"
import "./App.css"
// Redux
import { useDispatch, useSelector } from "react-redux"
// React Router
import { Route, Routes, useNavigate } from "react-router-dom"
import Navbar from "./components/Common/Navbar"

 
 import Home from "./pages/Home"
 

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     const token = JSON.parse(localStorage.getItem("token"))
  //    // dispatch(getUserDetails(token, navigate))
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <div>
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes> 
    </div>
  )
}

export default App
