import React,{useState} from 'react'
import './App.css'
import Colorpick from './components/colorpicker/Colorpick'
import Navbar from './components/navbar/Navbar'
import UserSearch from './components/searchuser/UserSearch'
import Unsplash from './unsplash/Unsplash'
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom'



export default function App(){
  const[pick,setPick]=useState("")

  const handlechange=(e)=>{
    setPick(e.target.value)
  }
  return(
  
    <h2 className='container'>Colorpicker,UserSearch,Unsplash<br/><br/>
    <div style={{height:"200vh"}} className='App'>
      <Router>
        <Navbar/>
      
        <Routes>
          <Route path="/" element={<Colorpick myData={{pick,handlechange}}/>}/>
          <Route path="/usersearch" element={<UserSearch/>}/>
          <Route path="/unsplash" element={<Unsplash/>}/>
        </Routes>
      
      </Router>
    </div>
    </h2>
  )
}