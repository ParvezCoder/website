import React from "react"
import Team from "../Components/Team";
import Testimonial from "../Components/Testimonial";
import OurWork from "../Components/OurWork";
import ServiceSection from "../Components/ServiceSection";
import IconGroup from "../Components/IconGroup";

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


            <div className="flex -ml-4 sm:ml-0 justify-center sm:justify-start sm:mt-4 md:mt-6 lg:mt-12 items-center">
              <IconGroup />
            </div>

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
