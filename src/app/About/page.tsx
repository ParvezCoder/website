import React from "react"
import Team from "../Components/Team";
import Testimonial from "../Components/Testimonial";
import OurWork from "../Components/OurWork";
import ServiceSection from "../Components/ServiceSection";

export default function About() {
  return (
    <>
      {/* ////////////////////////// Heroo section  /////////////////////////////////////// */}
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 py-44 font-[sans-serif]">
        <div className="absolute inset-0">
          <img src="whyChoseUs2.jpg" alt="Background Image" className="w-full h-full object-cover  opacity-80" />
        </div>

        <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">Welcome to  ReXon Solution</h1>
          <p className="text-lg md:text-xl mb-12">Experience excellence like never before with our exclusive products and services.</p>
          <button type="button" className="bg-indigo-600 hover:bg-indigo-700 text-white text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl">Get Started</button>
        </div>
      </div>
      {/* ////////////////////////// end Heroo section  /////////////////////////////////////// */}
      {/* ////////////////////////// About section  /////////////////////////////////////// */}

      <div className="bg-gray-50 w-full py-4 px-4 md:p-10 lg:p-24 rounded font-[sans-serif] overflow-hidden">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 py-10 px-2 text-justify">
            <h1 className="text-gray-800 text-3xl font-bold">ReXon Solution </h1>
            <p className="mt-4  text-gray-800" >ReXon Solutions is a forward-thinking IT software company specializing
              in delivering cutting-edge software solutions to businesses worldwide. Our expertise spans across AI Chatbot,  web development,
              mobile app development, Blockchain and enterprise software solutions. With a strong commitment to innovation and quality, we
              empower our clients to achieve their digital transformation goals, ensuring they stay ahead in a rapidly evolving
              technology landscape.</p>


            <button type="button"
              className="px-5 py-3 mt-8 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700">
              Get the Free Guide
              {/* ///////////////////////////////////// start Linkedin icon //////////////////////////////////////////////////// */}

              <a href="https://www.linkedin.com/in/parvez-ahmed-1604b92b5/" target="_blank" className="text-xl px-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="inline w-8 h-8 rounded-full" viewBox="0 0 176 176">
                  <g data-name="Layer 2">
                    <rect width="176" height="176" fill="" data-original="#0077b5" rx="24" />
                    <path fill="#fff" d="M63.4 48a15 15 0 1 1-15-15 15 15 0 0 1 15 15zM60 73v66.27a3.71 3.71 0 0 1-3.71 3.73H40.48a3.71 3.71 0 0 1-3.72-3.72V73a3.72 3.72 0 0 1 3.72-3.72h15.81A3.72 3.72 0 0 1 60 73zm82.64 34.5v32.08a3.41 3.41 0 0 1-3.42 3.42h-17a3.41 3.41 0 0 1-3.42-3.42v-31.09c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86A3.42 3.42 0 0 1 90.3 143H73.88a3.41 3.41 0 0 1-3.41-3.42V72.71a3.41 3.41 0 0 1 3.41-3.42H90.3a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.82 9.63-10.31 21.9-10.31 27.18 0 27.02 25.38 27.02 39.32z" data-original="#ffffff" />
                  </g>
                </svg>
              </a>
              {/* ///////////////////////////////////// github icon //////////////////////////////////////////////////// */}
              <a href="https://github.com/ParvezCoder" target="_blank" className="text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="inline w-8 h-8 rounded-full" viewBox="0 0 24 24">
                  <rect width="24" height="24" fill="" rx="4" />
                  <path fill="#fff" d="M12 2C6.477 2 2 6.484 2 12.02c0 4.428 2.865 8.185 6.839 9.503.5.09.683-.217.683-.483 0-.238-.009-.868-.013-1.704-2.782.605-3.37-1.343-3.37-1.343-.454-1.157-1.109-1.466-1.109-1.466-.906-.62.069-.607.069-.607 1.002.07 1.528 1.03 1.528 1.03.89 1.526 2.34 1.086 2.91.831.09-.647.349-1.086.636-1.337-2.22-.253-4.555-1.113-4.555-4.951 0-1.092.39-1.984 1.029-2.682-.103-.253-.447-1.271.098-2.65 0 0 .84-.27 2.75 1.026A9.562 9.562 0 0112 6.845c.85.004 1.705.115 2.504.336 1.91-1.296 2.75-1.025 2.75-1.025.546 1.378.202 2.396.1 2.65.64.698 1.027 1.59 1.027 2.682 0 3.847-2.339 4.695-4.566 4.944.358.308.678.918.678 1.852 0 1.336-.012 2.417-.012 2.746 0 .268.18.577.688.48A10.024 10.024 0 0022 12.019C22 6.484 17.523 2 12 2z" />
                </svg>
              </a>
              {/* //////////////////////////////////////////// end Github icon //////////////////////////////////// */}

            </button>
          </div>
          <img src="rexonL.jpg" className="w-full h-full object-cover shrink-0 rounded-xl" />
        </div>
      </div>
      {/* ////////////////////////// End About section  /////////////////////////////////////// */}
      {/* ////////////////////////// start Our Service section  /////////////////////////////////////// */}

      <ServiceSection />
      {/* ////////////////////////// end Our Service section  /////////////////////////////////////// */}

      {/* /////////////////////////////////////////////>>>>>>> Start about Our work <<<<<<      //////////////////////////////////////////////////////////// */}
      <OurWork />
      {/* /////////////////////////////////////////////>>>>>>> end  about Our work <<<<<<      //////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////>>>>>>> Start Testimonial <<<<<<  //////////////////////////////////////////////////////////// */}
      <Testimonial />
      {/* /////////////////////////////////////////////>>>>>>> End Testimonial <<<<<< //////////////////////////////////////////////////////////// */}

      {/* /////////////////////////////////////////////>>>>>>> Start Our Team  <<<<<< //////////////////////////////////////////////////////////// */}
      <Team />
      {/* /////////////////////////////////////////////>>>>>>> End  Our Team  <<<<<< //////////////////////////////////////////////////////////// */}


    </>

  );
}
