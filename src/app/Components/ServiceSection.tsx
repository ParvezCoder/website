import React from 'react'

const ServiceSection = () => {
  return ( <div className="font-[sans-serif] bg-gradient-to-r  from-pink-800 to-indigo-800 py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-white sm:text-4xl text-2xl font-bold text-center mb-16">Our Exclusive Services</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 max-md:max-w-lg mx-auto">
        <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
          <img src="/Ai.png" alt="Artificial Intelligence" className="w-24 mb-6 inline-block" />
          <h3 className="text-xl font-semibold mb-3">Artificial Intelligence</h3>
          <p className="text-gray-300 group-hover:text-gray-500 text-sm text-justify">Our AI service provides comprehensive
            solutions to harness the power of artificial intelligence, offering everything from strategic consulting
            and custom AI development to seamless integration, deployment, and ongoing support. We specialize in creating
            tailored machine learning models, natural language processing tools, and computer vision systems, all while
            ensuring ethical practices and regulatory compliance.</p>
        </div>

        {/* The rest of your code */}
        <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
          <img src="/chatBot.png" alt="Artificial Intelligence" className="w-24 mb-6 inline-block" />
          <h3 className="text-xl font-semibold mb-3">AI Chatbot</h3>
          <p className="text-gray-300 group-hover:text-gray-500 text-sm text-justify">Our AI chatbot service delivers advanced conversational
            solutions designed to enhance user engagement and streamline interactions. We develop intelligent chatbots capable
            of understanding natural language, providing accurate responses. With features like
            personalized interactions, automated customer support,  our chatbots
            improve efficiency and customer satisfaction. </p>
        </div>
        <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
          <img src="/mobileApp.png" alt="Artificial Intelligence" className="w-24 mb-6 inline-block" />
          <h3 className="text-xl font-semibold mb-3">Mobile App Developer</h3>
          <p className="text-gray-300 group-hover:text-gray-500 text-sm text-justify">A Mobile App Developer designs, builds, and maintains
            software applications for mobile devices, such as smartphones and tablets. They work with various programming
            languages and development frameworks to create apps that are functional, user-friendly, and optimized for performance
            across different mobile platforms (e.g., iOS, Android)</p>
        </div>
        <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
          <img src="/ecommerce2.png" alt="Artificial Intelligence" className="w-24 mb-6 inline-block" />
          <h3 className="text-xl font-semibold mb-3">E-Commerce Websites</h3>
          <p className="text-gray-300 group-hover:text-gray-500 text-sm text-justify">E-Commerce websites are online platforms that facilitate
            buying and selling of products or services over the internet. They provide a virtual storefront where businesses can
            showcase their products, manage inventory, process transactions, and handle customer interactions. Key features often
            include product catalogs, shopping carts, secure payment gateways, user accounts, and order tracking.</p>
        </div>
        <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
          <img src="/developer.png" alt="Artificial Intelligence" className="w-24 mb-6 inline-block" />
          <h3 className="text-xl font-semibold mb-3">Web Design</h3>
          <p className="text-gray-300 group-hover:text-gray-500 text-sm text-justify">Web design involves creating the visual and functional
            aspects of websites. It encompasses the layout, color schemes, typography, graphics, and overall user experience. Web
            designers use various tools and techniques to ensure that a website is aesthetically pleasing, intuitive, and easy
            to navigate. The goal is to create a user-friendly interface that effectively communicates the brand’s message and
            meets the needs of its target audience</p>
        </div>
        <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
          <img src="/consultant.png" alt="Artificial Intelligence" className="w-24 mb-6 inline-block" />
          <h3 className="text-xl font-semibold mb-3">Software Consulting</h3>
          <p className="text-gray-300 group-hover:text-gray-500 text-sm text-justify">Software consulting involves providing expert
            advice and guidance on software development and technology solutions. Consultants work with businesses to
            identify their software needs, recommend appropriate technologies, and develop strategies to achieve their
            goals. This can include assessing current systems, designing custom software solutions, overseeing
            implementation, and optimizing performance. </p>
        </div>


      </div>
    </div>
  </div>
 )
}

export default ServiceSection