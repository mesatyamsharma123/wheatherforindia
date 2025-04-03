import React, { useDebugValue, useEffect, useState } from "react";
import sun from "../../../public/cloudy.png";
import temp from "../../../public/humid.png";
import wind from '../../../public/windy.png'
import daa from '../data/Data'
import b from '../../../public/back.avif'
function Home() {

    // all State
const [check,setCheck]=useState("choose the District")
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState([]);
  const [set2, setSet2] = useState(true);
  const [stateData,setStateData]=useState(false);
  const [district,setDistrict]=useState([])

// All function

  const handleSearch=()=>{
 
        setSet2((prve)=>(!prve))


        const dist=daa.find((i)=>(i.name==state))
    if(dist){
    setDistrict(dist.districts)
    }
    else{
        setDistrict([]);
    }
    
    search(state)
  
    

  



  }





// All fetch data function

const search=async(city)=>{
    try{
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
        const dataValue=await fetch(url);
        const data=await dataValue.json();
        console.log(data);

setStateData({
    humidity:data.main.humidity,
    windSpeed:data.wind.speed,
    temperature:Math.floor(data.main.temp),
    location:data.name,

})
    }
    catch(error){
        console.log(error)
    };
   
}
useEffect(()=>{
    search("London")
    

},[])

console.log(stateData)
console.log(state)
console.log(district[0])
console.log(counter)

  return (
    <div className="flex flex-col md:flex-row gap-3 bg-cover " >
    {/* first one */}
    

    {/* second one */}
    <div className="flex flex-col w-xs bg-slate-600 my-4 md:my-0 rounded-2xl space-y-0 md:space-y-0 space-x-4  ">
      <div className="p-6 flex flex-col  mt-2 mx-2 bg-slate-800 rounded-t-2xl text-white">
        <select onChange={(e)=>(setState(e.target.value))}
          style={{ display: set2 ? "flex" : "none" }}
          className="text-center bg-violet-500 text-lg rounded-t-lg px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-700"
        >
        
{
    daa.map((i,index)=>(
        <option className="" key={index}>{i.name}</option>
    ))
}
        </select>
        <select onChange={(e)=>(setState(e.target.value))}
          style={{ display: set2 ? "none" : "flex" }}
          className="text-center bg-violet-500 text-lg rounded-t-lg px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-700"
        >
<option>Choose the District</option>
{
    district.map((i,index)=>(
        <option key={index}>{i}</option>
    ))
}

        </select>
        {/* search bar */}
        <p onClick={handleSearch}  className="text-center border px-10 py-1  hover:scale-80 duration-800 transform">{counter==2 ? "Back" :"Search"}</p>
      </div>
      {/* div for image */}
      <div className="p-6 flex flex-col  items-center text-center mx-2 bg-slate-800  text-white">
        <div className="">
          <img
            className="object-fit h-15 ml-12 mr-12  hover:scale-150 duration-800 transform"
            src={sun}
          ></img>
          <p className="mt-2 text-3xl  hover:scale-150 duration-800 transform">
            {stateData.temperature}°C
          </p>
          <p className="mt-2 text-xl text-center hover:scale-150 duration-800 transform">
            {stateData.location}
          </p>
        </div>
      </div>
      {/* wind speed and temprature */}
      <div className="flex gap-4 mx-2 p-5 bg-slate-800 rounded-b-2xl mb-3 text-white  ">
        <div className="flex  ">
          <div>
            <img className="  hover:scale-120 duration-800 transform object-fit h-9" src={temp}></img>
            <div className="tex-center">Wind Speed</div>
          </div>
          <span>{stateData.humidity} </span>
          <div className="flex flex-col"></div>
        </div>
        {/* wind d */}
        <div className="flex  ">
          <div className="flex flex-row">
            <div className="">
              <img className="  hover:scale-120 duration-800 transform object-fit h-9 " src={wind}></img>
              <div className="">Humidity</div>
            </div>

            <div className="">{stateData.windSpeed} km/hr </div>
          </div>

          <div className="flex flex-col"></div>
        </div>
      </div>
      
    </div>

    {/* third one */}
    {/* <div className="flex flex-col  bg-slate-600 my-4 md:my-0 rounded-2xl space-y-0 md:space-y-0 space-x-4 ">
      <div className="p-6 flex flex-col  mt-2 mx-2 bg-slate-800 rounded-t-2xl text-white">
  
        <input className="text-center bg-violet-500 text-lg rounded-t-lg px-5 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-700 placeholder:text-white" placeholder="Search by City"></input>
 
        <p onClick={handleSearch3} className="text-center border px-10 py-1  hover:scale-80 duration-800 transform">Search</p>
      </div>
     
      <div className="p-6 flex flex-col  items-center text-center mx-2 bg-slate-800  text-white">
        <div className="">
          <img
            className="object-fit h-15  hover:scale-150 duration-800 transform"
            src={sun}
          ></img>
          <p className="mt-2 text-3xl  hover:scale-150 duration-800 transform">
            12°C
          </p>
          <p className="mt-2 text-xl hover:scale-150 duration-800 transform">
            London
          </p>
        </div>
      </div>
   
      <div className="flex gap-4 mx-2 p-6 bg-slate-800 rounded-b-2xl mb-3 text-white  ">
        <div className="flex  ">
          <div>
            <img className=" hover:scale-120 duration-800 transform object-fit h-9" src={temp}></img>
            <div className="tex-center">Wind Speed</div>
          </div>
          <span>24 </span>
          <div className="flex flex-col"></div>
        </div>
        <div className="flex  ">
          <div className="flex flex-row">
          
              <img className=" hover:scale-120 duration-800 transform  object-fit h-9 " src={wind}></img>
              <div className="">Humidity</div>
            </div>

            <div className="">24</div>
          </div>

          <div className="flex flex-col"></div>
        </div>
      </div>
      
    </div> */}
    </div>
  );
}

export default Home;
