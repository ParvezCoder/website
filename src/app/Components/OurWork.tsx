import React from 'react'

const OurWork = () => {
  return ( <section className="text-gray-600  body-font bg-gray-100">
    <div className="container px-5  py-24 mx-auto">
      <div className="flex flex-wrap  w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">About Our Work</h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 text-justify w-full leading-relaxed text-gray-500">Front-End Developers create visually engaging
          and user-friendly interfaces using HTML, CSS, and JavaScript, ensuring a seamless experience across devices
          and browsers. Back-End Developers handle server-side logic, database management, and API integration,
          ensuring robust and scalable web applications. </p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-300 p-6 rounded-lg">
            <img className="h-60 rounded w-full object-cover object-center mb-6" src="front.jpg" alt="content" />
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Front End Developer</h2>
            <p className="leading-relaxed text-base">Front-End Developers create visually engaging and user-friendly interfaces using HTML, CSS, and JavaScript.</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-300 p-6 rounded-lg">
            <img className="h-60 rounded w-full object-cover object-center mb-6" src="backEnd.jpg" alt="content" />

            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Back End Developer</h2>
            <p className="leading-relaxed text-base">Back-End Developers handle
              server-side logic, database management,
              and API integration. </p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-300 p-6 rounded-lg">
            <img className="h-60 rounded w-full object-cover object-center mb-6" src="mobile2.jpg" alt="content" />
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Mobile App Developer</h2>
            <p className="leading-relaxed text-base">A mobile app is a software application designed
              specifically for use on mobile devices.</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-300 p-6 rounded-lg">
            <img className="h-60 rounded w-full object-cover object-center mb-6" src="chatbot5.jpg" alt="content" />
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">AI Chatbot Developer</h2>
            <p className="leading-relaxed text-base">Chatbot developers are web developers who create,
              design, and maintain chatbots.  </p>
          </div>
        </div>
      </div>
    </div>
  </section>
 )
}

export default OurWork