import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useContext } from "react";
import { Context } from "../Context/Context";


const Home = () => {

const { hamburger  } = useContext(Context);

console.log(hamburger);

  return (
    <div className="bg-black flex flex-col items-center justify-center h-screen w-full bg-gradient-to-b from-black to-gray-800 p-20 md:flex-row gap-12">
       
        <img src="./assets/person.jpg" className="rounded-2xl md:w-96 md:mt-0 h-96  mt-40"/>
      
      
      <div className="text-white flex flex-col gap-6 max-w-screen-lg w-full h-screen items-start justify-center md:w-96 ">
        <h1 className="md:text-5xl font-bold text-3xl h-32 w-60 md:w-80">I'm 
        {hamburger ?  <TypeAnimation sequence={[ " a Full Stack Web Developer", 1500 , " an Open Source Contributor", 1500 , " a professional Web Designer", 1500]} speed={30} repeat={Infinity}  className={ "text-orange-500 md:text-5xl text-4xl" } /> : null}
        </h1>
        <p className="text-gray-500 md:mt-4">I have 3 years of experience building and desinging websites.Currently I love working on webApps using technologies like React,Tailwind,Node js and Mongodb</p>

    
       
        <button className="group bg-gradient-to-r from-blue-600 to-orange-800 hover:from-blue-500 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded flex justify-center items-center gap-2 ">Know more <span className="group-hover:rotate-90 duration-300 inline-block"><FaArrowRight /></span></button> 
  
      </div>  
    </div>
  );
};

export default Home;
