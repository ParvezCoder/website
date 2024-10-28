"use client"; // Add this line at the top
import React from 'react';
import Team from './Team';
import Testimonial from './Testimonial';
import ServiceSection from './ServiceSection';
import OurWork from './OurWork';
import ContactUs from './ContactUs';

export default function NavigationBar() {
    return (
        <>
            {/* //////////////////////////////////////>>>>>>>>     start Nav Bar    <<<<<<<<<   ////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////>>>>>>>>>     end start Nav Bar    <<<<<<<<<   ////////////////////////////////////////////////////// */}

            <section className="text-gray-600 body-font  "  >
                <div className="container  flex py-8 sm:py-10 md:py-16 lg:py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2  ml-5 md:ml-6 lg:ml-10 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-xl md:text-3xl text-xl mb-4 font-medium text-gray-900">Welcome to
                            <span className="word word3 text-green-600"> Parvez</span>{" "}
                            <span className="word word4 text-red-600">Ahmed</span>{" "}
                            <span className="word word5">Developer</span>
                        </h1>
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
                            <span className="word word5">I am a</span>{" "}
                            <span className="word word5 text-blue-600">Front-End Developer</span>
                        </h2>
                        <p className="mb-8 leading-relaxed text-sm lg:text-lg text-justify mr-4" >
                            A Front-End Developer is responsible for creating the visual and interactive elements of a
                            WEBSITE or WEB Application. We use HTML, CSS, JavaScript, React.js, Next.js, Bootstrap and Tailwind.Css
                            to build responsive, user-friendly interfaces, ensuring a seamless user experience across various devices
                            and browsers. </p>
                        <div className="flex -ml-4 sm:ml-0 justify-center items-center">
                            <button className="inline-flex text-white bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm  lg:text-lg">Get the Free Guidance
                                <ul className="flex flex-wrap pl-4 gap-x-5 gap-4">
                                    {/* ///////////////////////////////// Facebook Icon //////////////////////// */}

                                    {/* ///////////////////////////////// Linkedin Icon //////////////////////// */}
                                    <li >
                                        <a href="https://www.linkedin.com/in/parvez-ahmed-1604b92b5/" target="_blank" className="text-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline w-8 h-8 rounded-full" viewBox="0 0 176 176">
                                                <g data-name="Layer 2">
                                                    <rect width="176" height="176" fill="" data-original="#0077b5" rx="24" />
                                                    <path fill="#fff" d="M63.4 48a15 15 0 1 1-15-15 15 15 0 0 1 15 15zM60 73v66.27a3.71 3.71 0 0 1-3.71 3.73H40.48a3.71 3.71 0 0 1-3.72-3.72V73a3.72 3.72 0 0 1 3.72-3.72h15.81A3.72 3.72 0 0 1 60 73zm82.64 34.5v32.08a3.41 3.41 0 0 1-3.42 3.42h-17a3.41 3.41 0 0 1-3.42-3.42v-31.09c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86A3.42 3.42 0 0 1 90.3 143H73.88a3.41 3.41 0 0 1-3.41-3.42V72.71a3.41 3.41 0 0 1 3.41-3.42H90.3a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.82 9.63-10.31 21.9-10.31 27.18 0 27.02 25.38 27.02 39.32z" data-original="#ffffff" />
                                                </g>
                                            </svg>
                                        </a>
                                    </li>

                                    {/* ///////////////////////////////// Github Icon //////////////////////// */}

                                    <li  >
                                        <a href="https://github.com/ParvezCoder" target="_blank" className="text-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline w-8 h-8 rounded-full" viewBox="0 0 24 24">
                                                <rect width="24" height="24" fill="" rx="4" />
                                                <path fill="#fff" d="M12 2C6.477 2 2 6.484 2 12.02c0 4.428 2.865 8.185 6.839 9.503.5.09.683-.217.683-.483 0-.238-.009-.868-.013-1.704-2.782.605-3.37-1.343-3.37-1.343-.454-1.157-1.109-1.466-1.109-1.466-.906-.62.069-.607.069-.607 1.002.07 1.528 1.03 1.528 1.03.89 1.526 2.34 1.086 2.91.831.09-.647.349-1.086.636-1.337-2.22-.253-4.555-1.113-4.555-4.951 0-1.092.39-1.984 1.029-2.682-.103-.253-.447-1.271.098-2.65 0 0 .84-.27 2.75 1.026A9.562 9.562 0 0112 6.845c.85.004 1.705.115 2.504.336 1.91-1.296 2.75-1.025 2.75-1.025.546 1.378.202 2.396.1 2.65.64.698 1.027 1.59 1.027 2.682 0 3.847-2.339 4.695-4.566 4.944.358.308.678.918.678 1.852 0 1.336-.012 2.417-.012 2.746 0 .268.18.577.688.48A10.024 10.024 0 0022 12.019C22 6.484 17.523 2 12 2z" />
                                            </svg>
                                        </a>
                                    </li>


                                    {/* /////////////////////////////////  end github Icon //////////////////////// */}
                                </ul>

                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded animate__animated animate__jackInTheBox animate__delay-1s p-4rounded" alt="hero" src="image2.jpg" />
                    </div>
                </div>
            </section>

            {/* //////////////////////////////////////>>>>>>>>>    Main message    <<<<<<<<<   ////////////////////////////////////////////////////// */}
            {/* ////////////////////////////////////////////////////   Start  Techmology  ////////////////////////////////////////////////////////////////////////  */}
            <div className="bg-gray-100 md:px-10 px-4 py-12  font-[sans-serif] text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-5 ">Top Technology in 2024</h2>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-20" >The world is rapidly changing and moving towards AI and robotics.</p>

                <div className="max-md:max-w-lg mx-auto text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-b from-indigo-800 to-indigo-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img src="AAi.png" alt="Blog Post 1" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">AI Robot</h3>
                                <p className="text-sm opacity-75">
                                    An AI robot is a physical or virtual entity equipped with artificial intelligence.</p>
                                <a href="javascript:void(0);" className="mt-4 inline-block text-pink-200 text-sm hover:underline">Read More</a>

                            </div>
                        </div>



                        <div className="bg-gradient-to-b from-purple-800 to-purple-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img src="AI11.jpg" alt="Blog Post 2" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Artificial intelligence </h3>
                                <p className="text-sm opacity-75">AI is a set of technologies that enable computers to perform a variety of advanced
                                    functions. </p>
                                <a href="javascript:void(0);" className="mt-4 inline-block text-pink-200 text-sm hover:underline">Read More</a>
                            </div>
                        </div>

                        <div className="bg-gradient-to-b from-teal-800 to-teal-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img src="/chatbot2.jpg" alt="Blog Post 3" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">AI ChatBot</h3>
                                <p className="text-sm opacity-75"> AI chatbot is a set of technologies that are based
                                    primarily on machine learning and deep learning.</p>
                                <a href="javascript:void(0);" className="mt-4 inline-block text-green-200 text-sm hover:underline">Read More</a>
                            </div>
                        </div>

                        <div className="bg-gradient-to-b from-indigo-800 to-indigo-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img src="chatbot4.jpg" alt="Blog Post 1" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">Blockchain</h3>
                                <p className="text-sm opacity-75">
                                    Blockchain is a decentralized and distributed digital ledger technology.</p>
                                <a href="javascript:void(0);" className="mt-4 inline-block text-pink-200 text-sm hover:underline">Read More</a>

                            </div>
                        </div>

                        <div className="bg-gradient-to-b from-purple-800 to-purple-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img src="software.jpg" alt="Blog Post 2" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">Internet of Things</h3>
                                <p className="text-sm opacity-75 text-justify">IoT refers to the network of
                                    interconnected devices  and systems that communicate and exchange the data.</p>
                                <a href="javascript:void(0);" className="mt-4 inline-block text-pink-200 text-sm hover:underline">Read More</a>
                            </div>
                        </div>


                        <div className="bg-gradient-to-b from-teal-800 to-teal-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img src="clould.jpg" alt="Blog Post 3" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">Clould Computing</h3>
                                <p className="text-sm opacity-75">Cloud computing is a technology that delivers computing resources
                                    and services over the internet.</p>
                                <a href="javascript:void(0);" className="mt-4 inline-block text-green-200 text-sm hover:underline">Read More</a>
                            </div>
                        </div>




                    </div>


                </div>
            </div>
            {/* ///////////////////////////////////////////////////>>>>> technology end <<<<<<< ////////////////////////////////////////////////////// */}


            {/* /////////////////////////////////////////////>>>>>>> Start about Our work <<<<<<      //////////////////////////////////////////////////////////// */}
          <OurWork/>
            {/* /////////////////////////////////////////////>>>>>>> end  about Our work <<<<<<      //////////////////////////////////////////////////////////// */}

            {/* /////////////////////////////////////////////>>>>>>> start Our Services <<<<<<      //////////////////////////////////////////////////////////// */}

            <ServiceSection />
            {/* /////////////////////////////////////////////>>>>>>>  End Our Services <<<<<<      //////////////////////////////////////////////////////////// */}


            {/* /////////////////////////////////////////////>>>>>>> Start Pricing <<<<<<      //////////////////////////////////////////////////////////// */}
            <div className="max-w-7xl max-sm:max-w-md mx-auto p-4 font-[sans-serif] bg-pink-100">
                <div className="text-center">
                    <h2 className="text-gray-800 text-3xl font-bold mb-4">Pricing Plans</h2>
                    <p className="text-gray-800 text-sm">Select your Service according your needs</p>
                </div>

                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8 mt-8">
                    <label className=" bg-gray-200 cursor-pointer py-8 px-4 text-center rounded-md shadow-[0_0px_8px_0px_rgba(34,46,165,0.2)] border-t-4 border-orange-500 transition-all hover:-translate-y-1 relative">
                        <div className="flex items-center absolute right-2 top-2">
                            <input id="radio" type="radio" name="value1" className="w-5 h-5 hidden peer" />
                            <div
                                className="relative flex items-center bg-gray-600 justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 border-orange-500 rounded-full overflow-hidden">
                                <span className=" bg-gray-600 rounded-full w-3 h-3"></span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold  text-black-500">AI Chatbot</h3>
                            <p className="text-gray-600 text-xs mt-1">15 Days</p>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-gray-800 text-4xl font-semibold">$200</h3>
                            <p className="text-gray-600 text-xs mt-1">3  Reviews</p>
                            <p className="text-xs mt-1 text-red-500">If Project is complex then we will discuse further</p>

                        </div>
                    </label>

                    <label className="bg-white  cursor-pointer py-8 px-4 text-center rounded-md shadow-[0_0px_8px_0px_rgba(34,46,165,0.2)] border-t-4 border-blue-500 transition-all hover:-translate-y-1 relative">
                        <div className="flex items-center absolute right-2 top-2">
                            <input id="radio2" type="radio" name="value1" className="w-5 h-5 hidden peer" checked />
                            <div
                                className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 border-blue-500 rounded-full overflow-hidden">
                                <span className="bg-blue-500 rounded-full w-3 h-3"></span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-blue-500">Mobile App</h3>
                            <p className="text-gray-600 text-xs mt-1">15 Days</p>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-gray-800 text-4xl font-semibold">$200</h3>
                            {/* <p className="text-xs mt-1 text-red-500">20% Off regular price</p> */}
                            <p className="text-gray-600 text-xs mt-1">3 Reviews</p>
                            <p className="text-xs mt-1 text-red-500">If Project is complex then we will discuse further</p>

                        </div>
                    </label>

                    <label className="bg-white cursor-pointer py-8 px-4 text-center rounded-md shadow-[0_0px_8px_0px_rgba(34,46,165,0.2)] border-t-4 border-teal-500  bg-gray-200 transition-all hover:-translate-y-1 relative">
                        <div className="flex items-center absolute right-2 top-2">
                            <input id="radio3" type="radio" name="value1" className="w-5 h-5 hidden peer" />
                            <div
                                className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 border-teal-500 rounded-full overflow-hidden">
                                <span className="bg-teal-500 rounded-full w-3 h-3"></span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-teal-500">Full Stack Website</h3>
                            <p className="text-gray-600 text-xs mt-1">15 Days</p>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-gray-800 text-4xl font-semibold">$200</h3>
                            <p className="text-gray-600 text-xs mt-1">3 Reviews</p>
                            <p className="text-xs mt-1 text-red-500">If Project is complex then we will discuse further</p>

                        </div>
                    </label>

                    <label className="bg-white cursor-pointer py-8 px-4 text-center rounded-md shadow-[0_0px_8px_0px_rgba(34,46,165,0.2)] border-t-4   bg-gray-200 border-pink-500 transition-all hover:-translate-y-1 relative">
                        <div className="flex items-center absolute right-2 top-2">
                            <input id="radio4" type="radio" name="value1" className="w-5 h-5 hidden peer" />
                            <div
                                className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer border-2 border-pink-500 rounded-full overflow-hidden">
                                <span className="bg-pink-500 rounded-full w-3 h-3"></span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-pink-500">UI/UX Design</h3>
                            <p className="text-gray-600 text-xs mt-1">10 Days</p>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-gray-800 text-4xl font-semibold">$150</h3>
                            <p className="text-gray-600 text-xs mt-1">5 Reviews</p>
                            <p className="text-xs mt-1 text-red-500">If Project is complex then we will discuse further</p>

                        </div>
                    </label>
                </div>
            </div>
            {/* /////////////////////////////////////////////>>>>>>> End Pricing <<<<<< /////////////////////////////////////////////////////////// */}

            {/* /////////////////////////////////////////////>>>>>>> Start Testimonial <<<<<<  //////////////////////////////////////////////////////////// */}
            <Testimonial />
            {/* /////////////////////////////////////////////>>>>>>> End Testimonial <<<<<< //////////////////////////////////////////////////////////// */}

            {/* /////////////////////////////////////////////>>>>>>> Start company Rating <<<<<< //////////////////////////////////////////////////////////// */}
            <div className="bg-cyan-100 px-4 py-16 font-[sans-serif] text-white">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-x-6 gap-y-12 max-w-7xl mx-auto">
                    <div className="text-center bg-gray-700 p-4 border-b-4 border-orange-600 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-orange-600 w-10 inline-block" viewBox="0 0 512 512">
                            <path d="M437 268.152h-50.118c-6.821 0-13.425.932-19.71 2.646-12.398-24.372-37.71-41.118-66.877-41.118h-88.59c-29.167 0-54.479 16.746-66.877 41.118a74.798 74.798 0 0 0-19.71-2.646H75c-41.355 0-75 33.645-75 75v80.118c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45v-80.118c0-41.355-33.645-75-75-75zm-300.295 36.53v133.589H45c-8.271 0-15-6.729-15-15v-80.118c0-24.813 20.187-45 45-45h50.118c4.072 0 8.015.553 11.769 1.572a75.372 75.372 0 0 0-.182 4.957zm208.59 133.589h-178.59v-133.59c0-24.813 20.187-45 45-45h88.59c24.813 0 45 20.187 45 45v133.59zm136.705-15c0 8.271-6.729 15-15 15h-91.705v-133.59a75.32 75.32 0 0 0-.182-4.957 44.899 44.899 0 0 1 11.769-1.572H437c24.813 0 45 20.187 45 45v80.119z" data-original="#000000" />
                            <path d="M100.06 126.504c-36.749 0-66.646 29.897-66.646 66.646-.001 36.749 29.897 66.646 66.646 66.646 36.748 0 66.646-29.897 66.646-66.646s-29.897-66.646-66.646-66.646zm-.001 103.292c-20.207 0-36.646-16.439-36.646-36.646s16.439-36.646 36.646-36.646 36.646 16.439 36.646 36.646-16.439 36.646-36.646 36.646zM256 43.729c-49.096 0-89.038 39.942-89.038 89.038s39.942 89.038 89.038 89.038 89.038-39.942 89.038-89.038c0-49.095-39.942-89.038-89.038-89.038zm0 148.076c-32.554 0-59.038-26.484-59.038-59.038 0-32.553 26.484-59.038 59.038-59.038s59.038 26.484 59.038 59.038c0 32.554-26.484 59.038-59.038 59.038zm155.94-65.301c-36.748 0-66.646 29.897-66.646 66.646.001 36.749 29.898 66.646 66.646 66.646 36.749 0 66.646-29.897 66.646-66.646s-29.897-66.646-66.646-66.646zm0 103.292c-20.206 0-36.646-16.439-36.646-36.646.001-20.207 16.44-36.646 36.646-36.646 20.207 0 36.646 16.439 36.646 36.646s-16.439 36.646-36.646 36.646z" data-original="#000000" />
                        </svg>
                        <h3 className="text-4xl font-extrabold mt-5">13+</h3>
                        <p className="text-gray-300 font-semibold mt-3">Clients</p>
                    </div>
                    <div className="text-center bg-gray-700 p-4 border-b-4 border-orange-600 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-orange-600 w-10 inline-block" viewBox="0 0 512 512">
                            <path fill-rule="evenodd" d="M64.217 333.491h41.421c5.508 0 10 4.492 10 10v97.833c0 5.508-4.492 10-10 10H64.217c-5.508 0-10-4.492-10-10v-97.833c0-5.508 4.492-10 10-10zm155.471-61.737h-41.422c-5.508 0-10 4.492-10 10v159.571c0 5.508 4.492 10 10 10h41.422c5.508 0 10-4.492 10-10V281.754c0-5.508-4.493-10-10-10zm114.049-64.466h-41.421c-5.508 0-10 4.492-10 10v224.036c0 5.508 4.492 10 10 10h41.421c5.508 0 10-4.492 10-10V217.288c-.001-5.507-4.493-10-10-10zm72.625-57.992h41.421c5.508 0 10 4.492 10 10v282.028c0 5.508-4.492 10-10 10h-41.421c-5.508 0-10-4.492-10-10V159.296c0-5.508 4.492-10 10-10zm2.707-106.018a7.98 7.98 0 0 1-.812-15.938l49.121-2.666a7.98 7.98 0 0 1 8.307 9.094l.006.001-7.088 48.68a7.986 7.986 0 0 1-15.812-2.25l3.878-26.632C385.642 108.019 321.72 152.702 257.158 189.5c-69.131 39.402-138.98 69.744-206.779 93.355a7.976 7.976 0 0 1-5.25-15.062c66.943-23.313 135.906-53.269 204.154-92.167 63.527-36.208 126.449-80.188 186.56-133.799zM45.262 481.873h421.477c5.508 0 10 4.492 10 10v3.193c0 5.508-4.492 10-10 10H45.262c-5.508 0-10-4.492-10-10v-3.193c0-5.508 4.492-10 10-10zM139.587 6.935c-48.325 0-87.5 39.175-87.5 87.5s39.175 87.5 87.5 87.5 87.5-39.175 87.5-87.5c-.001-48.325-39.176-87.5-87.5-87.5zm-8 32.13v5.279c-5.474 1.183-10.606 3.537-14.768 6.92-6.626 5.387-10.827 13.21-10.353 22.965.476 9.817 5.372 16.4 12.186 20.849 5.887 3.844 13.093 5.827 19.733 6.917 5.206.855 10.757 2.201 14.95 4.733 3.261 1.969 5.71 4.838 6.23 9.127.072.595.111 1.013.117 1.26.08 3.359-1.536 5.926-3.962 7.767-3.135 2.379-7.564 3.785-12.005 4.324a33.57 33.57 0 0 1-3.172.254c-5.25.126-10.424-1.156-14.458-3.842-3.274-2.18-5.775-5.367-6.818-9.552a7.982 7.982 0 0 0-15.5 3.812c2.094 8.399 7.044 14.749 13.505 19.052 4.252 2.831 9.164 4.736 14.315 5.711v5.165a8 8 0 1 0 16-.001v-5.01c6.309-1.038 12.699-3.388 17.758-7.226 6.302-4.782 10.494-11.632 10.275-20.829a29.17 29.17 0 0 0-.179-2.76c-1.22-10.052-6.653-16.591-13.856-20.94-6.27-3.786-13.768-5.668-20.637-6.796-4.832-.793-9.912-2.13-13.607-4.543-2.767-1.806-4.752-4.416-4.937-8.224-.202-4.157 1.615-7.512 4.478-9.84 2.281-1.854 5.196-3.144 8.362-3.781a22.978 22.978 0 0 1 10.115.244c5.278 1.338 10.083 4.817 12.614 10.845a7.997 7.997 0 0 0 10.469 4.281 7.997 7.997 0 0 0 4.281-10.469c-4.701-11.196-13.65-17.664-23.489-20.158a37.3 37.3 0 0 0-1.646-.377v-5.161a8 8 0 1 0-16.001.004z" clip-rule="evenodd" data-original="#000000" />
                        </svg>
                        <h3 className="text-4xl font-extrabold mt-5">450+</h3>
                        <p className="text-gray-300 font-semibold mt-3">Unique Visitors</p>
                    </div>
                    <div className="text-center bg-gray-700 p-4 border-b-4 border-orange-600 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-orange-600 w-10 inline-block" viewBox="0 0 28 28">
                            <path d="M18.56 16.94h-3.12l.65-2.16a2.58 2.58 0 0 0-1.66-3.21 1.41 1.41 0 0 0-1.81 1l-.1.42a8.61 8.61 0 0 1-2.26 4l-.57.56a1.56 1.56 0 0 0-1.21-.59h-.73a1.56 1.56 0 0 0-1.56 1.54v6.44a1.56 1.56 0 0 0 1.56 1.56h.73a1.55 1.55 0 0 0 1.33-.76l.14.07a6.55 6.55 0 0 0 2.91.69h3.59a3.58 3.58 0 0 0 3-1.6 6.34 6.34 0 0 0 1.07-3.53v-2.49a1.94 1.94 0 0 0-1.96-1.94zm-9.56 8a.56.56 0 0 1-.56.56h-.69a.56.56 0 0 1-.56-.56V18.5a.56.56 0 0 1 .56-.56h.73a.56.56 0 0 1 .52.56zm10.5-3.57a5.38 5.38 0 0 1-.9 3 2.59 2.59 0 0 1-2.15 1.15h-3.59a5.53 5.53 0 0 1-2.46-.58l-.4-.2V18.6l.92-.92a9.63 9.63 0 0 0 2.53-4.46l.1-.41a.43.43 0 0 1 .2-.26.4.4 0 0 1 .32 0 1.58 1.58 0 0 1 1 2l-.84 2.81a.5.5 0 0 0 .08.44.48.48 0 0 0 .4.2h3.79a.94.94 0 0 1 .94.94zM11 7.3l-.32 1.85a1.09 1.09 0 0 0 .44 1.09 1.11 1.11 0 0 0 .65.22 1.18 1.18 0 0 0 .52-.13L14 9.45l1.67.88a1.1 1.1 0 0 0 1.17-.09 1.09 1.09 0 0 0 .44-1.08L17 7.3 18.31 6a1.1 1.1 0 0 0 .29-1.14 1.12 1.12 0 0 0-.9-.76l-1.87-.27L15 2.12a1.12 1.12 0 0 0-2 0l-.83 1.69-1.87.27a1.12 1.12 0 0 0-.9.76A1.1 1.1 0 0 0 9.69 6zm-.6-2.23 2.13-.31a.49.49 0 0 0 .47-.27l1-1.93a.11.11 0 0 1 .2 0l1 1.93a.49.49 0 0 0 .38.27l2.13.31a.12.12 0 0 1 .09.08.11.11 0 0 1 0 .11l-1.54 1.5a.53.53 0 0 0-.15.45l.37 2.11a.09.09 0 0 1-.05.11.1.1 0 0 1-.12 0l-1.9-1a.47.47 0 0 0-.46 0l-1.91 1a.09.09 0 0 1-.11 0 .09.09 0 0 1-.05-.11l.37-2.11a.53.53 0 0 0-.15-.45l-1.54-1.5a.11.11 0 0 1 0-.11.12.12 0 0 1-.12-.08zm-3.06 8.18a1 1 0 0 0 1-1.19l-.27-1.52 1.12-1.09a1 1 0 0 0-.56-1.73L7.1 7.5l-.69-1.39a1.05 1.05 0 0 0-1.82 0L3.9 7.5l-1.53.22a1 1 0 0 0-.56 1.73l1.11 1.09-.27 1.52a1 1 0 0 0 .41 1 1 1 0 0 0 1.07.07l1.37-.72 1.37.72a1 1 0 0 0 .47.12zm-1.84-1.9a.46.46 0 0 0-.23.06l-1.63.82.36-1.78a.53.53 0 0 0-.2-.45L2.51 8.71l1.8-.26a.47.47 0 0 0 .37-.27l.83-1.63.81 1.63a.47.47 0 0 0 .37.27l1.8.29L7.2 10a.53.53 0 0 0-.15.45l.29 1.8-1.61-.84a.46.46 0 0 0-.23-.06zm20.95-2.94a1 1 0 0 0-.82-.69L24.1 7.5l-.69-1.39a1.05 1.05 0 0 0-1.82 0L20.9 7.5l-1.53.22a1 1 0 0 0-.56 1.73l1.11 1.09-.27 1.52a1 1 0 0 0 .41 1 1 1 0 0 0 1.07.07l1.37-.72 1.37.72a1 1 0 0 0 .47.12 1 1 0 0 0 1-1.19l-.27-1.52 1.11-1.09a1 1 0 0 0 .27-1.04zM24.2 10a.53.53 0 0 0-.15.45l.29 1.8-1.61-.84a.47.47 0 0 0-.46 0l-1.63.82.36-1.78a.53.53 0 0 0-.2-.45l-1.29-1.29 1.8-.26a.47.47 0 0 0 .37-.27l.83-1.63.81 1.63a.47.47 0 0 0 .37.27l1.8.29z" data-name="Layer 2" data-original="#000000" />
                        </svg>
                        <h3 className="text-4xl font-extrabold mt-5">10+</h3>
                        <p className="text-gray-300 font-semibold mt-3">Customer Satisfaction</p>
                    </div>
                    <div className="text-center bg-gray-700 p-4 border-b-4 border-orange-600 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-orange-600 w-10 inline-block" viewBox="0 0 512 512">
                            <path d="M477.797 290.203c0 59.244-23.071 114.942-64.963 156.834S315.244 512 256 512s-114.942-23.071-156.834-64.963-64.963-97.59-64.963-156.834c0-39.621 10.579-78.512 30.595-112.468 19.419-32.944 47.178-60.48 80.276-79.63 7.646-4.427 17.437-1.814 21.861 5.836 4.426 7.648 1.813 17.437-5.836 21.861-53.882 31.175-88.951 87.036-94.189 148.4H84.6c8.837 0 16 7.163 16 16s-7.163 16-16 16H66.884C74.594 398.12 148.083 471.609 240 479.319v-17.717c0-8.837 7.163-16 16-16s16 7.163 16 16v17.717c91.917-7.71 165.406-81.199 173.116-173.116h-17.717c-8.837 0-16-7.163-16-16s7.163-16 16-16h17.69c-5.238-61.364-40.307-117.227-94.19-148.4-7.648-4.425-10.262-14.212-5.836-21.861 4.425-7.648 14.214-10.261 21.861-5.836 33.098 19.148 60.857 46.685 80.277 79.63 20.016 33.955 30.596 72.846 30.596 112.467zm-253.173-220.2 15.259-15.259-.258 71.899c-.031 8.837 7.106 16.025 15.942 16.058h.059c8.81 0 15.967-7.126 15.999-15.942l.259-72.248 15.492 15.492c3.124 3.124 7.219 4.687 11.313 4.687s8.189-1.563 11.313-4.687c6.248-6.248 6.248-16.379 0-22.627L267.313 4.687c-6.248-6.248-16.379-6.248-22.627 0l-42.689 42.689c-6.248 6.248-6.248 16.379 0 22.627s16.379 6.248 22.627 0zM272 174.358v64.628c16.74 5.24 29.977 18.478 35.218 35.217h50.493c8.837 0 16 7.163 16 16s-7.163 16-16 16h-50.493c-6.823 21.795-27.202 37.655-51.218 37.655-29.585 0-53.654-24.069-53.654-53.655 0-24.015 15.86-44.394 37.654-51.217v-64.628c0-8.837 7.163-16 16-16s16 7.163 16 16zm5.655 115.845c0-11.94-9.715-21.654-21.655-21.654s-21.654 9.714-21.654 21.654 9.714 21.655 21.654 21.655 21.655-9.714 21.655-21.655z" data-original="#000000" />
                        </svg>
                        <h3 className="text-4xl font-extrabold mt-5">4+</h3>
                        <p className="text-gray-300 font-semibold mt-3">Running Projects</p>
                    </div>
                </div>
            </div>
            {/* /////////////////////////////////////////////>>>>>>> End Company Rating <<<<<< //////////////////////////////////////////////////////////// */}


            {/* /////////////////////////////////////////////>>>>>>> Start Why Chose Us <<<<<< //////////////////////////////////////////////////////////// */}
            <section className="  bg-cyan-800  pt-16 h-[500px]">
                <div className=" font-[sans-serif] ">
                    <div className="grid sm:grid-cols-3   items-center lg:p-12 p-6 gap-6 max-w-3xl min-h-[400px] mx-auto bg-green-100 rounded-lg">
                        <div className="sm:col-span-2  max-sm:order-1">
                            <h2 className="text-gray-800 text-3xl font-extrabold">Why Choose Us ???</h2>
                            <p className="text-gray-800 text-sm mt-4 leading-relaxed text-justify" >At ReXon Solution,
                                Our team utilizes cutting-edge technology. With a commitment to transparent communication,
                                timely delivery, Security and competitive pricing, we ensure that every project is executed with the
                                highest quality standards. Choose us for a reliable partner dedicated to helping you achieve
                                your goals with excellence.</p>

                            <div className="mt-12 flex items-end">
                                <div>
                                    <h4 className="text-gray-800 text-sm font-semibold">Engr. parvez Ahmed</h4>
                                    <p className="text-gray-800 text-xs mt-1">Managing Director, ReXson Solution</p>
                                </div>

                                <div className="space-x-5 ml-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 cursor-pointer fill-gray-400 rotate-180 inline" viewBox="0 0 512 512">
                                        <path d="M502.628 278.627 389.25 392.005c-6.249 6.249-14.438 9.373-22.628 9.373s-16.379-3.124-22.628-9.373c-12.496-12.497-12.496-32.758 0-45.255L402.745 288H32c-17.673 0-32-14.327-32-32s14.327-32 32-32h370.745l-58.751-58.75c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l113.378 113.378c12.496 12.496 12.496 32.758 0 45.254z" data-original="#000000" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 cursor-pointer inline" viewBox="0 0 512 512">
                                        <path d="M502.628 278.627 389.25 392.005c-6.249 6.249-14.438 9.373-22.628 9.373s-16.379-3.124-22.628-9.373c-12.496-12.497-12.496-32.758 0-45.255L402.745 288H32c-17.673 0-32-14.327-32-32s14.327-32 32-32h370.745l-58.751-58.75c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l113.378 113.378c12.496 12.496 12.496 32.758 0 45.254z" data-original="#000000" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="sm:ml-auto  sm:relative lg:left-24">
                            <img src='whyChoseUs4.jpeg' className="w-60 h-60 rounded-lg" />
                        </div>
                    </div>
                </div>
                {/* /////////////////////////////////>>>>> second part why chosen us <<<<<<<< ////////////////////// */}

            </section>

            <div className=" mx-auto   bg-cyan-800  font-[sans-serif]">
                {/* <h2 className="text-gray-800  mt-8 sm:text-4xl text-2xl font-extrabold text-center mb-16">These are the main reason for choosen us</h2> */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 p-4 max-md:max-w-lg mx-auto gap-12">
                    <div className="p-4 flex gap-6 bg-green-100  rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-12 h-12 bg-black  p-3 rounded-lg shrink-0" viewBox="0 0 32 32">
                            <path className="text-white" d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z" data-original="#000000" />
                            <path className="text-white" d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z" data-original="#000000" />
                        </svg>
                        <div>
                            <h3 className="text-gray-800 text-xl font-semibold mb-3">Customization</h3>
                            <p className="text-gray-600 text-sm">Tailor our product to suit your needs Expand your reach with our global network.</p>
                        </div>
                    </div>

                    <div className="p-4 flex gap-6 rounded-lg  bg-green-100 hover:shadow-md hover:scale-105 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-12 bg-black h-12  p-3 rounded-lg shrink-0" viewBox="0 0 682.667 682.667">
                            <defs >
                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                    <path d="M0 512h512V0H0Z" data-original="#000000" />
                                </clipPath>
                            </defs>
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="40" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                <path className="text-white" d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z" data-original="#000000" />
                                <path className="text-white" d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
                            </g>
                        </svg>
                        <div>
                            <h3 className="text-gray-800  text-xl font-semibold mb-3">Security</h3>
                            <p className="text-gray-600 text-sm">Your data is protected by the latest security measures.</p>
                        </div>
                    </div>

                    <div className="p-4 flex gap-6 rounded-lg hover:shadow-md bg-green-100 hover:scale-105 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-12  h-12 bg-black p-3 rounded-lg shrink-0" viewBox="0 0 512.001 512.001">
                            <path className="text-white" d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z" data-original="#000000" />
                        </svg>
                        <div>
                            <h3 className="text-gray-800 text-xl font-semibold mb-3">Support</h3>
                            <p className="text-gray-600 text-sm">Tailor our product to suit your needs 24/7 customer support for all your inquiries.</p>
                        </div>
                    </div>

                    <div className="p-4 flex gap-6 rounded-lg bg-green-100 hover:shadow-md hover:scale-105 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-12 h-12 bg-black p-3 rounded-lg shrink-0" viewBox="0 0 24 24">
                            <g fill-rule="evenodd" clip-rule="evenodd">
                                <path className="text-white" d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z" data-original="#000000" />
                                <path className="text-white" d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z" data-original="#000000" />
                                <path className="text-white" d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z" data-original="#000000" />
                            </g>
                        </svg>
                        <div>
                            <h3 className="text-gray-800 text-xl font-semibold mb-3">Performance</h3>
                            <p className="text-gray-600 text-sm">Experience blazing-fast performance with our product.</p>
                        </div>
                    </div>

                    <div className="p-4 flex bg-green-100 gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-12 h-12 bg-black p-3 rounded-lg shrink-0" viewBox="0 0 504.69 504.69">
                            <path className="text-white" d="M252.343 262.673c-49.32 0-89.447-40.127-89.447-89.447s40.127-89.447 89.447-89.447 89.447 40.127 89.447 89.447-40.121 89.447-89.447 89.447zm0-158.235c-37.926 0-68.787 30.861-68.787 68.787s30.861 68.787 68.787 68.787 68.787-30.861 68.787-68.787-30.855-68.787-68.787-68.787z" data-original="#000000" />
                            <path className="text-white" d="M391.787 405.309c-5.645 0-10.253-4.54-10.325-10.201-.883-70.306-58.819-127.503-129.15-127.503-49.264 0-93.543 27.405-115.561 71.52-8.724 17.473-13.269 36.31-13.517 55.988-.072 5.702-4.757 10.273-10.459 10.201s-10.273-4.757-10.201-10.459c.289-22.814 5.568-44.667 15.691-64.955 25.541-51.164 76.907-82.95 134.047-82.95 81.581 0 148.788 66.349 149.81 147.905.072 5.702-4.494 10.392-10.201 10.459-.046-.005-.087-.005-.134-.005z" data-original="#000000" />
                            <path className="text-white" d="M252.343 463.751c-116.569 0-211.408-94.834-211.408-211.408 0-116.569 94.839-211.408 211.408-211.408 116.574 0 211.408 94.839 211.408 211.408 0 116.574-94.834 211.408-211.408 211.408zm0-402.156c-105.18 0-190.748 85.568-190.748 190.748s85.568 190.748 190.748 190.748 190.748-85.568 190.748-190.748S357.523 61.595 252.343 61.595zM71.827 90.07 14.356 32.599c-4.034-4.034-4.034-10.573 0-14.607 4.029-4.034 10.573-4.034 14.607 0l57.466 57.471c4.034 4.034 3.951 10.49 0 14.607-3.792 3.951-11.039 3.698-14.602 0z" data-original="#000000" />
                            <path className="text-white" d="M14.717 92.254a10.332 10.332 0 0 1-10.299-9.653L.023 15.751a10.317 10.317 0 0 1 2.929-7.908 10.2 10.2 0 0 1 7.851-3.089L77.56 7.796c5.697.258 10.108 5.093 9.85 10.79s-5.041 10.154-10.79 9.85l-55.224-2.521 3.641 55.327c.377 5.692-3.936 10.614-9.628 10.986a7.745 7.745 0 0 1-.692.026zm403.541-2.184c-4.256-3.796-4.034-10.573 0-14.607l58.116-58.116c4.034-4.034 10.573-4.034 14.607 0s4.034 10.573 0 14.607L432.864 90.07c-4.085 3.951-9.338 4.7-14.606 0z" data-original="#000000" />
                            <path className="text-white" d="M489.974 92.254a9.85 9.85 0 0 1-.687-.021c-5.697-.372-10.01-5.294-9.633-10.986l3.641-55.327-55.224 2.515c-5.511.238-10.526-4.147-10.79-9.85-.258-5.702 4.153-10.531 9.85-10.79l66.757-3.042c2.934-.134 5.79.992 7.851 3.089s3.12 4.974 2.929 7.908l-4.401 66.85c-.361 5.465-4.896 9.654-10.293 9.654zM11.711 489.339c-3.791-4.266-4.034-10.573 0-14.607l60.115-60.11c4.029-4.034 10.578-4.034 14.607 0 4.034 4.034 4.034 10.573 0 14.607l-60.115 60.11c-3.827 3.884-11.156 3.884-14.607 0z" data-original="#000000" />
                            <path className="text-white" d="M10.327 499.947a10.33 10.33 0 0 1-7.376-3.104 10.312 10.312 0 0 1-2.929-7.902l4.401-66.85c.372-5.697 5.191-10.036 10.986-9.633 5.692.377 10.005 5.294 9.628 10.986l-3.641 55.332 55.224-2.515c5.645-.191 10.531 4.153 10.79 9.85.258 5.697-4.153 10.526-9.85 10.79l-66.763 3.037c-.155.004-.31.009-.47.009zm465.639-13.01-57.708-57.708c-4.034-4.034-4.034-10.573 0-14.607s10.573-4.034 14.607 0l57.708 57.708c4.034 4.034 3.962 10.5 0 14.607-3.817 3.951-10.062 3.951-14.607 0z" data-original="#000000" />
                            <path className="text-white" d="M494.359 499.947c-.155 0-.315-.005-.47-.01l-66.757-3.042c-5.702-.263-10.108-5.088-9.85-10.79.263-5.702 5.113-9.984 10.79-9.85l55.219 2.515-3.641-55.332c-.372-5.692 3.941-10.609 9.633-10.986 5.625-.398 10.609 3.946 10.986 9.633l4.401 66.85a10.33 10.33 0 0 1-2.929 7.902 10.323 10.323 0 0 1-7.382 3.11z" data-original="#000000" />
                        </svg>
                        <div>
                            <h3 className="text-gray-800 text-xl font-semibold mb-3">Global Reach</h3>
                            <p className="text-gray-600 text-sm">Tailor our product to suit your needs Expand your reach with our global network.</p>
                        </div>
                    </div>

                    <div className="p-4 flex gap-6 rounded-lg bg-green-100 hover:shadow-md hover:scale-105 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-12 h-12 bg-black p-3 rounded-lg shrink-0" viewBox="0 0 682.667 682.667">
                            <defs>
                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                    <path className="text-white" d="M0 512h512V0H0Z" data-original="#000000" />
                                </clipPath>
                            </defs>
                            <g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="30" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                <path className="text-white" d="M226 15v60c0 16.568-13.432 30-30 30H76c-16.568 0-30-13.432-30-30V15Zm-45 165c0-24.853-20.147-45-45-45s-45 20.147-45 45 20.147 45 45 45 45-20.147 45-45ZM466 15v60c0 16.568-13.432 30-30 30H316c-16.568 0-30-13.432-30-30V15Zm-45 165c0-24.853-20.147-45-45-45s-45 20.147-45 45 20.147 45 45 45 45-20.147 45-45Zm-75 167v-50.294L286 347h-60.002L166 296.706V347h-15c-41.421 0-75 33.579-75 75s33.579 75 75 75h210c41.421 0 75-33.579 75-75s-33.579-75-75-75Zm-105 75h30m-90 0h30m90 0h30" data-original="#000000" />
                            </g>
                        </svg>
                        <div>
                            <h3 className="text-gray-800 text-xl font-semibold mb-3">Communication</h3>
                            <p className="text-gray-600 text-sm">Tailor our product to suit your needs Seamless communication for your team.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* /////////////////////////////////////////////>>>>>>> Start Our Team  <<<<<< //////////////////////////////////////////////////////////// */}
            <Team />
            {/* /////////////////////////////////////////////>>>>>>> End  Our Team  <<<<<< //////////////////////////////////////////////////////////// */}

            {/* /////////////////////////////////////////////>>>>>>> Start Contact Us <<<<<< //////////////////////////////////////////////////////////// */}
           <ContactUs/>
            {/* /////////////////////////////////////////////>>>>>>> End Contact Us <<<<<< //////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////>>>>>>> Start Footer <<<<<< //////////////////////////////////////////////////////////// */}

            {/* /////////////////////////////////////////////>>>>>>> End Footer <<<<<< //////////////////////////////////////////////////////////// */}






            <style jsx>{`
  .word {
    opacity: 0;
    animation: fadeIn 1s forwards;
  }
  .word1 {
    animation-delay: 0s;
  }
  .word2 {
    animation-delay: 1s;
  }
  .word3 {
    animation-delay: 2s;
  }
  .word4 {
    animation-delay: 3s;
  }
  .word5 {
    animation-delay: 4s;
  }
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`}</style>

        </>
    );
}

