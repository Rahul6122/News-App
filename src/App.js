import './App.css';

import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';



const App=()=>  {
   const apikey="ec564bcfff73459bb9434f89c71d34f4" 

   const[progress,setProgress] = useState(0);

    return ( 
      <div>
        {/* <Router> */}
        <Navbar  title="NewsMonkey"/>
        <LoadingBar
        height={3}
        color='#f11946'  
        progress={progress}
      />
      <News setProgress ={setProgress} apikey={apikey}  key='General' pagesize={10} category='General'/>
      <News setProgress ={setProgress} apikey={apikey} key='Technology' pagesize={10} category='Technology'/>
      <News setProgress ={setProgress} apikey={apikey} key='Sports' pagesize={10} category='Sports'/>
      <News setProgress ={setProgress} apikey={apikey} key='Business' pagesize={10} category='Business'/>
      <News setProgress ={setProgress} apikey={apikey} key='Science' pagesize={10} category='Science'/>
        {/* <Routes>
          <Route exact path='/General' element={<News setProgress ={setProgress} apikey={apikey}  key='General' pagesize={10} category='General'/>}></Route> */}
          {/* <Route exact path='/Business' element={<News setProgress ={setProgress} apikey={apikey} key='Business' pagesize={10} category='Business'/>}></Route>
          <Route exact path='/Sports' element={<News setProgress ={setProgress} apikey={apikey} key='Sports' pagesize={10} category='Sports'/>}></Route>
          <Route exact path='/Science' element={<News setProgress ={setProgress} apikey={apikey} key='Science' pagesize={10} category='Science'/>}></Route>
          <Route exact path='/Technology' element={<News setProgress ={setProgress} apikey={apikey} key='Technology' pagesize={10} category='Technology'/>}></Route>
        </Routes>
        </Router> */}
      </div>
    )
}

export default App;

