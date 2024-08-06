import React from "react";

const About = () => {
  const timelineItems = [
    {
      role: "CS Student",
      company: "@Addis Ababa University",
      duration: "expected - 2025",
    },
    {
      role: "Freelancer",
      company: "@Upwork",
      duration: "2024 – Present",
    },
    {
      role: "Back-End Developer",
      company: "@Perago Systems",
      duration: "July 2024 – September 2024",
    },
  ];

  return (
    <div className=" bg-gradient-to-b from-black to-gray-900 md:pt-52 pt-32 px-6">
      <div className="  flex flex-col items-center justify-center w-full lg:flex-row gap-12">
        <img
          src="./assets/person.jpg"
          className="rounded-2xl md:w-3/4 h-80 md:mt-0  md:inline-block"
        />

        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-3xl font-bold text-center w-3/4 text-orange-500">
              I'm Natnael,{" "}
              <span className="text-2xl text-gray-200">
                a professional fullstack Web Developer.
              </span>
            </h1>
            <p className="text-gray-200 my-10 w-3/4 text-center">
              {" "}
              I create stunning, interactive, and responsive websites and web
              apps that captivate users. Using the latest web technologies, I
              turn ideas into dynamic digital experiences. From sleek
              single-page apps to robust e-commerce platforms, I handle it all
              with flair. Stay ahead with innovative solutions designed to make
              your digital presence unforgettable.
            </p>
          </div>

          <div className="hidden  md:flex justify-between items-center gap-32 mb-20">
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
          </div>

          <div className="flex flex-col gap-4 w-full  text-gray-300 md:hidden mb-12 ">
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
        </div>
      </div>

      <div className="grid items-stretch grid-cols-[repeat(auto-fit,minmax(320px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] justify-center  md:px-32 text-gray-200 gap-8 mt-8 md:mt-32 tablet:grid tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
        <div className="w-full flex flex-col justify-baseline items-center rounded-3xl bg-gray-800 px-6 py-10 gap-5 text-center">
          <img src="/assets/frontend.png" alt="" />
          <h1 className="text-3xl text-white">Frontend</h1>
          <p className="text-sm">
            As a front-end developer, I specialize in crafting visually
            appealing, user-friendly interfaces that provide seamless user
            experiences. With expertise in HTML, CSS, JavaScript, and frameworks
            like React, I bring designs to life with precision and creativity.
          </p>
          <div className="flex w-full items-center justify-around">
            <img src="/assets/html.png" alt="" />
            <img src="/assets/css.png" alt="" />
            <img src="/assets/javascript.png" alt="" />
            <img src="/assets/react.png" alt="" className="" />
            <img src="/assets/tailwind.png" alt="" />
          </div>
        </div>

        <div className="w-full flex flex-col justify-baseline items-center rounded-3xl bg-gray-800 px-6 py-10 gap-5 text-center ">
          <img src="/assets/backend.png" alt="" />
          <h1 className="text-3xl text-white ">Backend</h1>
          <p className="text-sm">
            As a back-end developer, I engineer robust, scalable, and secure
            server-side solutions that power seamless digital experiences. With
            expertise in Node.js, PHP, and frameworks like Laravel, I ensure
            your applications run smoothly and efficiently.
          </p>
          <div className="flex w-full items-center justify-around">
            <img src="/assets/node.png" alt="" />
            <img src="/assets/express.png" alt="" />
            <img src="/assets/php.png" alt="" />
          </div>
        </div>

        <div className="w-full flex flex-col justify-baseline items-center rounded-3xl bg-gray-800 px-6 py-10 gap-5 text-center">
          <img src="/assets/database.png" alt="" />
          <h1 className="text-3xl text-white">Database</h1>
          <p className="text-sm">
            As a database specialist, I design and manage efficient, scalable,
            and secure databases that keep your data organized and accessible.
            With expertise in SQL, NoSQL, and platforms like MySQL, PostgreSQL,
            and MongoDB, I ensure your data is stored and retrieved seamlessly.
          </p>
          <div className="flex w-full items-center justify-around">
            <img src="/assets/mongo.png" alt="" />
            <img src="/assets/mysql.png" alt="" />
            <img src="/assets/postgres.png" alt="" />
            <img src="/assets/firebase.png" alt="" />
          </div>
        </div>

        <div className="w-full flex flex-col justify-baseline items-center rounded-3xl bg-gray-800 px-6 py-10 gap-5 text-center ">
          <img src="/assets/tools.png" alt="" />
          <h1 className="text-3xl text-white">Tools</h1>
          <p className="text-sm">
            As a tech enthusiast, I leverage a wide array of tools to streamline
            development and boost productivity. Proficient in Git for version
            control, Docker for containerization ,Postman for API testing I
            ensure efficient and reliable development processes. My familiarity
            with modern IDEs, task runners, and build tools keeps projects on
            track and ahead of the curve.
          </p>
          <div className="flex w-full items-center justify-around">
            <img src="/assets/git.png" alt="" />
            <img src="/assets/postman.png" alt="" />
            <img src="/assets/docker.png" alt="" />
            <img src="/assets/vscode.png" alt="" />
          </div>
        </div>
      </div>

      <div className=" text-white h-full flex flex-col items-center py-32 md:px-20">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Milestones of my career
        </h1>
        <p className="text-xl mb-12 text-center">
          Explore the key roles that have shaped my journey as a web developer
        </p>
        <div className="relative w-full ">
          <div className="absolute md:left-1/2  transform -translate-x-1/2 w-1 bg-orange-100 h-full "></div>
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`mb-2 md:w-1/2 px-12 py-2 w-full ${
                index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
              }`}
            >
              <div className=" p-4 bg-gray-800 rounded shadow-lg">
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <a href="#" className="text-blue-400">
                  {item.company}
                </a>
                <p className="text-orange-500">{item.duration}</p>
                <div
                  className={`absolute md:left-1/2  transform left-0 -translate-x-1/2 -translate-y-16
                 h-8 w-8 bg-orange-600 rounded-full border-4 border-gray-900`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
