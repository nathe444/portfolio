import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useContext } from "react";
import { Context } from "../Context/Context";

const Home = () => {
  const { hamburger } = useContext(Context);

  console.log(hamburger);

  return (
    <div className="flex flex-col  items-center justify-center bg-gradient-to-b from-black to-gray-900 h-full w-full px-6 ">
      <div className=" flex flex-col items-center justify-center w-full md:flex-row gap-12 mt-20 md:mt-36">
        <img
          src="./assets/person.jpg"
          className="rounded-2xl md:w-96 h-80 md:mt-0 hidden md:inline-block"
        />

        <div className="text-white flex flex-col gap-8 max-w-screen-lg w-full justify-center items-start md:w-96 ">
          <h1 className="md:text-5xl font-bold text-3xl h-16 md:h-32 w-full md:w-96  md:mt-0 mt-8">
            Nathe here👋,
            {hamburger ? (
              <TypeAnimation
                sequence={[
                  "  Full Stack Web Developer",
                  1500,
                  "  Open Source Contributor",
                  1500,
                  "  professional Web Designer",
                  1500,
                ]}
                speed={30}
                repeat={Infinity}
                className={"text-orange-500 md:text-5xl text-3xl "}
              />
            ) : null}
          </h1>
          <p className="text-gray-500 md:mt-6 text-base mt-8">
            I have 2 years of experience building and desinging websites.
            Currently I love working on webApps using technologies like React ,
            Tailwind, Node js, PHP, PostgreSQL, My Sql, Firebase and MongoDb.
          </p>
        </div>
      </div>

      <div className="hidden  md:flex justify-between items-center gap-32 mt-32">
        <div className="grid grid-cols-3 gap-x-4 gap-y-2 bg-gray-800 px-8 py-4 rounded-2xl text-gray-300 ">
          <h1 className="text-3xl">
            500<span className="text-orange-500 font-bold">+</span>
          </h1>
          <h1 className="text-3xl">
            10<span className="text-orange-500 font-bold">+</span>
          </h1>
          <h1 className="text-3xl">
            2<span className="text-orange-500 font-bold">+</span>
          </h1>
          <p className=" font-bold">Linkedin followers</p>
          <p className=" font-bold">Projects Completed</p>
          <p className=" font-bold">Years of experience</p>
        </div>

        <button className="group bg-gradient-to-r from-blue-600 to-orange-800 hover:from-blue-500 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded flex justify-center items-center gap-2 ">
          View Portfolio
          <span className="group-hover:transform group-hover:rotate-[360deg] duration-1000  inline-block">
            <FaArrowRight />
          </span>
        </button>
      </div>

      <div className="flex flex-col gap-4 w-full  text-gray-300 md:hidden mt-12 ">
        <div className="flex justify-center mb-10">
          <button className="group bg-gradient-to-r from-blue-600 to-orange-800 hover:from-blue-500 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded flex justify-center items-center gap-2 ">
            View Portfolio
            <span className="group-hover:transform group-hover:rotate-[360deg] duration-1000  inline-block">
              <FaArrowRight />
            </span>
          </button>
        </div>

        <div className="flex flex-col justify-center items-center bg-gray-800 w-full rounded-2xl py-6">
          <h1 className="text-3xl">
            500<span className="text-orange-500 font-bold">+</span>
          </h1>
          <p className=" font-bold">Linkedin followers</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-gray-800 rounded-2xl py-6">
          <h1 className="text-3xl">
            10<span className="text-orange-500 font-bold">+</span>
          </h1>
          <p className=" font-bold">Projects Completed</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-gray-800 rounded-2xl py-6">
          <h1 className="text-3xl">
            2<span className="text-orange-500 font-bold">+</span>
          </h1>
          <p className=" font-bold">Years of experience</p>
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-bold text-center text-gray-200 mt-24 md:mt-48 hidden md:block">
          Collaborate with Me to Create Imapctful Results
        </h1>
        <h1 className="md:text-4xl text-2xl font-bold text-center text-gray-200 mt-24 md:mt-32 md:hidden">
          Benefis
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:px-14 text-gray-400 gap-8 mt-8 md:mt-32 tablet:grid tablet:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
          <div className="w-full flex flex-col justify-center items-center rounded-3xl bg-gray-900 px-6 py-10 gap-5 text-center  md:h-80">
            <img src="/assets/user.png" alt="" />
            <h1>User Centeric development</h1>
            <p>
              Bringing your vision to life with the latest technology and design
              trends
            </p>
          </div>

          <div className="w-full flex flex-col justify-center items-center bg-gray-900 px-10 py-6 gap-5 text-center rounded-3xl md:h-80">
            <img src="/assets/mobile.png" alt="" />
            <h1>Responsive Website</h1>
            <p>
              Ensuring your website is responsive and optimized for mobile
              devices , making it accessible to wider audience
            </p>
          </div>

          <div className="w-full flex flex-col justify-center items-center bg-gray-900 px-10 py-6 gap-5 text-center rounded-3xl md:h-80">
            <img src="/assets/optimize.png" alt="" />
            <h1>Performance Optimization</h1>
            <p>
              Prioritizing website performance, ensuring fast load times and
              smooth interactions for an optimal user experience.
            </p>
          </div>
        </div>
      </div>

      <div className="md:px-14 mt-14 md:mt-44 ">
        <h1 className="text-3xl font-bold text-center text-gray-200 md:text-4xl">
          My Recent Works
        </h1>

        <div className="flex flex-col md:flex-row gap-8  text-gray-200 mt-16 md:mt-28 tablet:grid tablet:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
          <div className=" relative w-full flex flex-col justify-center items-center bg-gray-900 px-10 md:py-10 py-6 md:gap-12 gap-8 text-center rounded-3xl ">
            <h1 className="md:text-4xl text-3xl">My Blog</h1>

            <div className="group relative w-full flex flex-col justify-center items-center bg-gray-900  text-center rounded-3xl gap-12">
              <img
                src="/assets/person.jpg"
                alt=""
                className="w-full h-60 rounded-2xl tablet:w-96"
              />

              <div className="w-full h-60 hidden group-hover:block bg-gray-800 absolute top-0 left-0 rounded-2xl bg-opacity-75 cursor-pointer ">
                <div className="w-full h-full flex px-10 justify-center items-center gap-10 ">
                  <a href="">
                    <div className="flex flex-col justify-center items-center gap-1 bg-slate-700 hover:bg-orange-600 hover:duration-500 py-3 px-5 rounded-2xl">
                      <img src="/assets/site.png" alt="" className="w-8" />{" "}
                      <p>Visit Site</p>{" "}
                    </div>
                  </a>

                  <a href="">
                    <div className="flex flex-col justify-center items-center gap-1 bg-slate-700 hover:bg-orange-600 hover:duration-500 py-3 px-5 rounded-2xl">
                      <img src="/assets/code.png" className="w-8" alt="" />{" "}
                      <p>Visit Code</p>{" "}
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ea
              repudiandae quisquam facere blanditiis eius. Numquam, expedita?
              Enim,{" "}
            </p>
          </div>

          <div className=" relative w-full flex flex-col justify-center items-center bg-gray-900 px-10 md:py-10 py-6 md:gap-12 gap-8 text-center rounded-3xl ">
            <h1 className="md:text-4xl text-3xl">Shemachoch</h1>

            <div className="group relative w-full flex flex-col justify-center items-center bg-gray-900  text-center rounded-3xl gap-12">
              <img
                src="/assets/person.jpg"
                alt=""
                className="w-full h-60 rounded-2xl tablet:w-96"
              />

              <div className="w-full h-60 hidden group-hover:block bg-gray-800 absolute top-0 left-0 rounded-2xl bg-opacity-75 cursor-pointer ">
                <div className="w-full h-full flex px-10 justify-center items-center gap-10 ">
                  <a href="">
                    <div className="flex flex-col justify-center items-center gap-1 bg-slate-700 hover:bg-orange-600 hover:duration-500 py-3 px-5 rounded-2xl">
                      <img src="/assets/site.png" alt="" className="w-8" />{" "}
                      <p>Visit Site</p>{" "}
                    </div>
                  </a>

                  <a href="">
                    <div className="flex flex-col justify-center items-center gap-1 bg-slate-700 hover:bg-orange-600 hover:duration-500 py-3 px-5 rounded-2xl">
                      <img src="/assets/code.png" className="w-8" alt="" />{" "}
                      <p>Visit Code</p>{" "}
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ea
              repudiandae quisquam facere blanditiis eius. Numquam, expedita?
              Enim,{" "}
            </p>
          </div>

          <div className=" relative w-full flex flex-col justify-center items-center bg-gray-900 px-10 md:py-10 py-6 md:gap-12 gap-8 text-center rounded-3xl ">
            <h1 className="md:text-4xl text-3xl">Amazon</h1>

            <div className="group relative w-full flex flex-col justify-center items-center bg-gray-900  text-center rounded-3xl gap-12">
              <img
                src="/assets/person.jpg"
                alt=""
                className="w-full h-60 rounded-2xl tablet:w-96"
              />

              <div className="w-full h-60 hidden group-hover:block bg-gray-800 absolute top-0 left-0 rounded-2xl bg-opacity-75 cursor-pointer ">
                <div className="w-full h-full flex px-10 justify-center items-center gap-10 ">
                  <a href="">
                    <div className="flex flex-col justify-center items-center gap-1 bg-slate-700 hover:bg-orange-600 hover:duration-500 py-3 px-5 rounded-2xl">
                      <img src="/assets/site.png" alt="" className="w-8" />{" "}
                      <p>Visit Site</p>{" "}
                    </div>
                  </a>

                  <a href="">
                    <div className="flex flex-col justify-center items-center gap-1 bg-slate-700 hover:bg-orange-600 hover:duration-500 py-3 px-5 rounded-2xl">
                      <img src="/assets/code.png" className="w-8" alt="" />{" "}
                      <p>Visit Code</p>{" "}
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ea
              repudiandae quisquam facere blanditiis eius. Numquam, expedita?
              Enim,{" "}
            </p>
          </div>
        </div>

        <button className="group bg-gradient-to-r from-blue-600 to-orange-800 hover:from-blue-500 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded flex justify-center items-center gap-2 mx-auto md:mt-6 mt-4 mb-20">
          View All Projects
          <span className="group-hover:rotate-[360deg] duration-1000 inline-block">
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
