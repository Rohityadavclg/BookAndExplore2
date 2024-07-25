import { combineReducers } from "@reduxjs/toolkit"

import authReducer from "../slices/authSlice"
 
 
import profileReducer from "../slices/profileSlice"
//import viewCourseReducer from "../slices/viewCourseSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  
  
  
})

export default rootReducer
