import React from "react";

const Portfolio = () => {
  return (
    <div>
      <div className=" px-6 md:px-0 bg-gradient-to-b from-black to-gray-900 py-28">
        <h1 className="text-3xl font-bold text-center text-gray-200 md:text-4xl ">
          My Recent Works
        </h1>

        <div className="grid items-stretch grid-cols-[repeat(auto-fit,minmax(320px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] justify-center  md:px-32 text-gray-200 mt-8 md:mt-12 tablet:grid tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-12">
          <div className=" relative w-full flex flex-col justify-center items-center bg-gray-900 px-10 md:py-10 py-6 md:gap-12 gap-8 text-center rounded-3xl ">
            <h1 className="md:text-4xl text-3xl">My Blog</h1>

            <div className="group relative w-full flex flex-col justify-center items-center bg-gray-900  text-center rounded-3xl gap-12">
              <img
                src="/assets/blog.png"
                alt=""
                className="w-full h-60 rounded-2xl tablet:w-96"
              />

              <div className="w-full h-60 hidden group-hover:block bg-gray-800 absolute top-0 left-0 rounded-2xl bg-opacity-75 cursor-pointer ">
                <div className="w-full h-full flex px-10 justify-center items-center gap-10 ">
                  <a
                    href="https://github.com/nathe444/blog-app"
                    target="_blank"
                  >
                    <div className="flex flex-col justify-center items-center gap-1 bg-slate-700 hover:bg-orange-600 hover:duration-500 py-3 px-5 rounded-2xl">
                      <img src="/assets/site.png" alt="" className="w-8" />{" "}
                      <p>Visit Site</p>{" "}
                    </div>
                  </a>

                  <a
                    href="https://github.com/nathe444/blog-app"
                    target="_blank"
                  >
                    <div className="flex flex-col justify-center items-center gap-1 bg-slate-700 hover:bg-orange-600 hover:duration-500 py-3 px-5 rounded-2xl">
                      <img src="/assets/code.png" className="w-8" alt="" />{" "}
                      <p>Visit Code</p>{" "}
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <p>
              This is a fullstack blog app where users register and custimozie
              their profiles then post,edit,delete their blogs. A user can also
              filter blogs by author name , category etc
            </p>
          </div>

          <div className=" relative w-full flex flex-col justify-center items-center bg-gray-900 px-10 md:py-10 py-6 md:gap-12 gap-8 text-center rounded-3xl ">
            <h1 className="md:text-4xl text-3xl">Shemachoch</h1>

            <div className="group relative w-full flex flex-col justify-center items-center bg-gray-900  text-center rounded-3xl gap-12">
              <img
                src="/assets/shemachoch.png"
                alt=""
                className="w-full h-60 rounded-2xl tablet:w-96"
              />

              <div className="w-full h-60 hidden group-hover:block bg-gray-800 absolute top-0 left-0 rounded-2xl bg-opacity-75 cursor-pointer ">
                <div className="w-full h-full flex px-10 justify-center items-center gap-10 ">
                  <a
                    href="https://github.com/nathe444/Shemachoch"
                    target="_blank"
                  >
                    <div className="flex flex-col justify-center items-center gap-1 bg-slate-700 hover:bg-orange-600 hover:duration-500 py-3 px-5 rounded-2xl">
                      <img src="/assets/site.png" alt="" className="w-8" />{" "}
                      <p>Visit Site</p>{" "}
                    </div>
                  </a>

                  <a
                    href="https://github.com/nathe444/Shemachoch"
                    target="_blank"
                  >
                    <div className="flex flex-col justify-center items-center gap-1 bg-slate-700 hover:bg-orange-600 hover:duration-500 py-3 px-5 rounded-2xl">
                      <img src="/assets/code.png" className="w-8" alt="" />{" "}
                      <p>Visit Code</p>{" "}
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <p>
              Shemachoch is a desktop web app that aims to solve the need to
              support human limitations and improve the efficiency of managing
              the shemachoch (shop) in Ethiopia.{" "}
            </p>
          </div>

          <div className=" relative w-full flex flex-col justify-center items-center bg-gray-900 px-10 md:py-10 py-6 md:gap-12 gap-8 text-center rounded-3xl ">
            <h1 className="md:text-4xl text-3xl">Amazon</h1>

            <div className="group relative w-full flex flex-col justify-center items-center bg-gray-900  text-center rounded-3xl gap-12">
              <img
                src="/assets/amazon.png"
                alt=""
                className="w-full h-60 rounded-2xl tablet:w-96"
              />

              <div className="w-full h-60 hidden group-hover:block bg-gray-800 absolute top-0 left-0 rounded-2xl bg-opacity-75 cursor-pointer ">
                <div className="w-full h-full flex px-10 justify-center items-center gap-10 ">
                  <a href="https://github.com/nathe444/Amazon" target="_blank">
                    <div className="flex flex-col justify-center items-center gap-1 bg-slate-700 hover:bg-orange-600 hover:duration-500 py-3 px-5 rounded-2xl">
                      <img src="/assets/site.png" alt="" className="w-8" />{" "}
                      <p>Visit Site</p>{" "}
                    </div>
                  </a>

                  <a href="https://github.com/nathe444/Amazon" target="_blank">
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
            <h1 className="md:text-4xl text-3xl">FoodRecipe</h1>

            <div className="group relative w-full flex flex-col justify-center items-center bg-gray-900  text-center rounded-3xl gap-12">
              <img
                src="/assets/foodRecipe.png"
                alt=""
                className="w-full h-60 rounded-2xl tablet:w-96"
              />

              <div className="w-full h-60 hidden group-hover:block bg-gray-800 absolute top-0 left-0 rounded-2xl bg-opacity-75 cursor-pointer ">
                <div className="w-full h-full flex px-10 justify-center items-center gap-10 ">
                  <a href="https://github.com/nathe444/food-recipe">
                    <div className="flex flex-col justify-center items-center gap-1 bg-slate-700 hover:bg-orange-600 hover:duration-500 py-3 px-5 rounded-2xl">
                      <img src="/assets/site.png" alt="" className="w-8" />{" "}
                      <p>Visit Site</p>{" "}
                    </div>
                  </a>

                  <a
                    href="https://github.com/nathe444/food-recipe"
                    target="_blank"
                  >
                    <div className="flex flex-col justify-center items-center gap-1 bg-slate-700 hover:bg-orange-600 hover:duration-500 py-3 px-5 rounded-2xl">
                      <img src="/assets/code.png" className="w-8" alt="" />{" "}
                      <p>Visit Code</p>{" "}
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <p>
              platform where users can discover, share, manage, and review a
              wide array of recipes. Users will have the ability to post, edit,
              delete, and filter recipes, as well as search for specific recipes
              and give reviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
