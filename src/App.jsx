import './App.css'
import Parent from './components/Parent.jsx'
import { FcGoogle } from "react-icons/fc";
import {useEffect} from "react";
function App() {

  useEffect(()=>{
   console.log("I am running");
  },[])
  return(
    <div>
      <Parent/>
      <FcGoogle />
    </div>
    
  )
}

export default App;
