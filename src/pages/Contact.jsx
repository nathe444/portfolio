import React from "react";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const result = document.getElementById("result");
    result.innerHTML = "Please wait...";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const jsonResponse = await response.json();
      result.innerHTML = jsonResponse.message;

      if (response.status === 200) {
        result.innerHTML = jsonResponse.message;
      } else {
        console.log(response);
        result.innerHTML = jsonResponse.message;
      }
    } catch (error) {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    } finally {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    }
  };

  return (
    <div className="flex items-center justify-center h-full md:px-40 bg-gradient-to-br from-black via-gray-900 to-gray-900 pt-20 md:pt-32">
      <div className="container flex flex-col md:flex-row justify-between items-center p-10 rounded-lg md:gap-20 md:mb-32">
        <div
          className="text-gray-200 max-w-lg mb-10 md:mb-0"
          data-aos="fade-right"
          data-aos-duration="1500"
          t
        >
          <div className="flex items-center mb-2">
            <i className="fas fa-map-marker-alt text-2xl mr-4"></i>
            <span>AA, Ethiopia</span>
          </div>
          <div className="flex items-center mb-2">
            <i className="fas fa-envelope text-2xl mr-4"></i>
            <span>natnaelmulugeta1116@gmail.com</span>
          </div>
          <div className="flex items-center mb-2">
            <i className="fas fa-phone text-2xl mr-4"></i>
            <span>+251 993 944 704</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-clock text-2xl mr-4"></i>
            <span>Mon - Fri 9:00 AM to 4:00 PM</span>
          </div>
        </div>
        <div
          className="max-w-lg w-full"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2 className="text-3xl font-bold  text-center mb-8 text-gray-200">
            Contact Me
          </h2>
          <form id="form" onSubmit={handleSubmit} className="space-y-6">
            <input
              type="hidden"
              name="access_key"
              value="cd6dea4e-a281-49a3-bd8e-90d75dffb07b"
            />
            <div className="flex flex-wrap -mx-10 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  type="text"
                  name="name"
                  className="block w-full bg-orange-50 text-gray-900 border border-gray-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-gray-200 placeholder:text-gray-700"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input
                  type="email"
                  name="email"
                  className="block w-full bg-orange-50 text-gray-900 border border-gray-300 rounded py-3 px-4  focus:outline-none focus:bg-gray-200 placeholder:text-gray-700"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="px-3 mb-6 -mx-10">
              <textarea
                name="message"
                rows="5"
                className="block w-full bg-orange-50 text-slate-900 border border-gray-300 rounded py-3 px-4 focus:outline-none focus:bg-gray-200 placeholder:text-gray-700"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="px-3">
              <button
                type="submit"
                className="w-40 mx-auto block bg-orange-500 text-white font-bold py-3 px-4 rounded hover:bg-orange-600 transition duration-300 mt-12"
              >
                Send
              </button>
            </div>
            <div id="result" className="px-3 text-white"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
