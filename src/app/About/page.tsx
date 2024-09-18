import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function About() {
  return (
    <>
      <Navbar/>
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
          <img src="rexonL.jpg" className="w-full h-full object-cover shrink-0" />
        </div>
      </div>
      {/* ////////////////////////// End About section  /////////////////////////////////////// */}
      {/* ////////////////////////// Our Service section  /////////////////////////////////////// */}

      <div className="font-[sans-serif] bg-gradient-to-r  from-pink-800 to-indigo-800 py-12 px-4">
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
      {/* ////////////////////////// Our Service section  /////////////////////////////////////// */}

      {/* /////////////////////////////////////////////>>>>>>> Start about Our work <<<<<<      //////////////////////////////////////////////////////////// */}
      <section className="text-gray-600  body-font bg-gray-100">
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
      {/* /////////////////////////////////////////////>>>>>>> end  about Our work <<<<<<      //////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////>>>>>>> Start Testimonial <<<<<<  //////////////////////////////////////////////////////////// */}
      <div className="py-10 font-[sans-serif] bg-cyan-100 max-md:max-w-2xl mx-auto">
        <div className="md:mb-28 mb-12 text-center">
          <h2 className="text-gray-800 text-3xl font-extrabold">What our happy client Said</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          <div
            className="bg-gradient-to-tr from-[#caf0f8] via-[#ade8f4] to-[#90e0ef] max-w-[65%] h-[140%] w-full -top-16 left-0 right-0 mx-auto rounded-3xl absolute max-md:hidden">
          </div>

          <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
            <div>
              <img src="https://readymadeui.com/profile_2.webp" className="w-10 h-10 rounded-full" />
              <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">John Doe</h4>
              <p className="mt-0.5 text-xs text-gray-600">Founder of Rubik</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food.
                The staff was friendly and attentive, and the delivery was impressively prompt.</p>
            </div>
          </div>

          <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
            <div>
              <img src="https://readymadeui.com/profile_3.webp" className="w-10 h-10 rounded-full" />
              <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">Mark Adair</h4>
              <p className="mt-0.5 text-xs text-gray-600">Founder of Alpha</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 text-sm leading-relaxed">The service was excellent. While the food took a
                bit longer to arrive, the staff was polite and attentive, and the delivery time was surprisingly quick.</p>
            </div>
          </div>

          <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
            <div>
              <img src="https://readymadeui.com/profile_4.webp" className="w-10 h-10 rounded-full" />
              <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">Simon Konecki</h4>
              <p className="mt-0.5 text-xs text-gray-600">Founder of Labar</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 text-sm leading-relaxed">The experience was outstanding. Though there was a
                longer wait for my meal, the team was courteous and attentive, and the delivery was remarkably swift.</p>
            </div>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////////////>>>>>>> End Testimonial <<<<<< //////////////////////////////////////////////////////////// */}

      {/* /////////////////////////////////////////////>>>>>>> Start Our Team  <<<<<< //////////////////////////////////////////////////////////// */}
      <div className="font-[sans-serif] bg-black ">
        <div className="lg:max-w-6xl max-w-xl mx-auto pt-10 py-5">
          <h2 className="text-white text-3xl  font-extrabold text-center">Meet Our Leadership Team</h2>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-md:justify-center mt-6">

            <div className="flex items-center max-sm:flex-col bg-gray-100 gap-4 rounded-lg overflow-hidden hover:scale-[1.02] transition-all">
              <img src="gm.jpg" className="w-full sm:h-60 object-cover" />

              <div className="p-4">
                <h4 className="text-gray-800 text-base font-bold">Engr. Ghulam Mustfa</h4>
                <p className="text-gray-600 text-xs mt-1">Chief Executive Officer (CEO)</p>

                <div className="mt-4">
                  <p className="text-gray-600 text-sm leading-relaxed"> ReXon Solution leads strategic initiatives, driving innovation and growth while overseeing technology and business operations.</p>
                </div>

                <div className="space-x-2 mt-4">
                  <button type="button"
                    className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                      <path
                        d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                        data-original="#010002" />
                    </svg>
                  </button>
                  <button type="button"
                    className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                      <path
                        d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                        data-original="#03a9f4" />
                    </svg>
                  </button>
                  <button type="button"
                    className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                      <path
                        d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                        data-original="#0077b5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center max-sm:flex-col bg-gray-100 gap-4 rounded-lg overflow-hidden hover:scale-[1.02] transition-all">
              <img src="mushi.jpg" className="w-full sm:h-60 object-cover" />

              <div className="p-4">
                <h4 className="text-gray-800 text-base font-bold">Engr. Mushahid Ali</h4>
                <p className="text-gray-500 text-xs mt-1">Director of Software Development</p>

                <div className="mt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">Oversees and guides software engineering teams, ensuring
                    the successful delivery of high-quality software products while aligning development efforts with business
                    objectives.</p>
                </div>

                <div className="space-x-2 mt-4">
                  <button type="button"
                    className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                      <path
                        d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                        data-original="#010002" />
                    </svg>
                  </button>
                  <button type="button"
                    className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                      <path
                        d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                        data-original="#03a9f4" />
                    </svg>
                  </button>
                  <button type="button"
                    className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                      <path
                        d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                        data-original="#0077b5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center max-sm:flex-col bg-gray-100 gap-4 rounded-lg overflow-hidden hover:scale-[1.02] transition-all">
              <img src="shabeer.jpg" className="w-full sm:h-60 object-cover" />

              <div className="p-4">
                <h4 className="text-gray-800 text-base font-bold">Engr. Shabeer Ahmed</h4>
                <p className="text-gray-500 text-xs mt-1">Director of Technology</p>

                <div className="mt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">Oversees an organization's technological initiatives, ensuring
                    alignment with business goals and driving innovation through strategic IT management.</p>
                </div>

                <div className="space-x-2 mt-4">
                  <button type="button"
                    className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                      <path
                        d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                        data-original="#010002" />
                    </svg>
                  </button>
                  <button type="button"
                    className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                      <path
                        d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                        data-original="#03a9f4" />
                    </svg>
                  </button>
                  <button type="button"
                    className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                      <path
                        d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                        data-original="#0077b5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center max-sm:flex-col bg-gray-100 gap-4 rounded-lg overflow-hidden hover:scale-[1.02] transition-all">
              <img src="me.jpg" className="w-full sm:h-60 object-cover" />

              <div className="p-4">
                <h4 className="text-gray-800 text-base font-bold">Engr. Parvez AHmed</h4>
                <p className="text-gray-500 text-xs mt-1">Director of HR</p>

                <div className="mt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">Oversees the strategic planning and
                    execution of human resources functions, with company goals while managing
                    talent acquisition, employee relations.</p>
                </div>

                <div className="space-x-2 mt-4">
                  <button type="button"
                    className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                      <path
                        d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                        data-original="#010002" />
                    </svg>
                  </button>
                  <button type="button"
                    className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                      <path
                        d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                        data-original="#03a9f4" />
                    </svg>
                  </button>
                  <button type="button"
                    className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                      <path
                        d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                        data-original="#0077b5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      {/* /////////////////////////////////////////////>>>>>>> End  Our Team  <<<<<< //////////////////////////////////////////////////////////// */}


      <Footer/>
    </>

  );
}
