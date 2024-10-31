
export default function Footer() {
    return (

        <>
            {/* /////////////////////////////////////////////>>>>>>> Start Footer <<<<<< //////////////////////////////////////////////////////////// */}
            <footer className="bg-black py-5 font-sans tracking-wide">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-8">
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">About Us</h4>
                        <p className="text-gray-400 text-base text-justify">A Front-End Developer creates visual and interactive elements of websites
                            using cutting-edge technology like JavaScript, React.js, Next.js and Tailwind Css ensuring responsive, user-friendly
                            interfaces across all devices.</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-base">Web Development</a></li>
                            <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-base">Mobile App Development</a>
                            </li>
                            <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-base">UI/UX Design</a></li>
                            <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-base">Digital Marketing</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
                        <p className="text-gray-400 text-base">Office 7, Sunset Boulevard</p>
                        <p className="text-gray-400 text-base">Phase 2 DHA,  Karachi</p>
                        <p className="text-gray-400 text-base">parvezCoder786@gmail.com</p>
                        <p className="text-gray-400 text-base">+92 305 288 7779</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Follow Us</h4>

                        <ul className="flex flex-wrap gap-x-5 gap-4">
                            {/* ////////////////////////////////////// facebook ///////////////////////// */}
                            <li><a href="https://www.facebook.com/profile.php?id=61567716489648&is_tour_completed" target="_blank" className="text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 h-6" viewBox="0 0 512 512">
                                    <path fill="#1877f2" d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z" data-original="#1877f2" />
                                    <path fill="#fff" d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z" data-original="#ffffff" />
                                </svg>
                            </a></li>
                            {/* //////////////////////////////////// whatsapp ///////////////////////////// */}

                            <a href="https://wa.me/923052887779" target="_blank" className="text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 h-6" viewBox="0 0 24 24">
                                    <rect width="24" height="24" fill="#0077b5" rx="4" />
                                    <path fill="#fff" d="M16.2 13.6c-.27-.14-1.58-.78-1.82-.87s-.42-.14-.61.14-.7.87-.85 1.05c-.15.17-.31.19-.58.07-.27-.14-1.12-.42-2.13-1.19-.78-.61-1.3-1.35-1.45-1.58-.15-.27-.02-.42.11-.56.12-.13.26-.34.39-.5.13-.17.17-.28.26-.47.08-.2.04-.37-.02-.52-.07-.15-.61-1.47-.83-2.05-.21-.5-.43-.43-.6-.44h-.52c-.17 0-.43.06-.66.3-.22.23-.86.85-.86 2.08s.88 2.41 1.01 2.57c.13.17 1.74 2.78 4.21 3.88.59.25 1.06.4 1.42.52.6.2 1.15.17 1.59.1.48-.07 1.48-.6 1.68-1.18.2-.57.2-1.07.14-1.17-.06-.1-.23-.17-.48-.29zM12.03 2C6.48 2 2.03 6.48 2.03 12c0 1.94.5 3.73 1.37 5.31L2 22l4.79-1.25C8.28 21.5 10.09 22 12.03 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18c-1.76 0-3.39-.5-4.77-1.36l-.34-.2-2.84.74.76-2.77-.22-.35C4.52 15.39 4 13.76 4 12 4 7.59 7.58 4 12.03 4c4.42 0 8 3.59 8 8s-3.58 8-8 8z" />
                                </svg>
                            </a>



                            {/* ///////////////////////////////// Linkedin Icon //////////////////////// */}
                            <li>
                                <a href="https://www.linkedin.com/in/parvez-ahmed-1604b92b5/" target="_blank" className="text-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 h-6" viewBox="0 0 176 176">
                                        <g data-name="Layer 2">
                                            <rect width="176" height="176" fill="#0077b5" data-original="#0077b5" rx="24" />
                                            <path fill="#fff" d="M63.4 48a15 15 0 1 1-15-15 15 15 0 0 1 15 15zM60 73v66.27a3.71 3.71 0 0 1-3.71 3.73H40.48a3.71 3.71 0 0 1-3.72-3.72V73a3.72 3.72 0 0 1 3.72-3.72h15.81A3.72 3.72 0 0 1 60 73zm82.64 34.5v32.08a3.41 3.41 0 0 1-3.42 3.42h-17a3.41 3.41 0 0 1-3.42-3.42v-31.09c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86A3.42 3.42 0 0 1 90.3 143H73.88a3.41 3.41 0 0 1-3.41-3.42V72.71a3.41 3.41 0 0 1 3.41-3.42H90.3a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.82 9.63-10.31 21.9-10.31 27.18 0 27.02 25.38 27.02 39.32z" data-original="#ffffff" />
                                        </g>
                                    </svg>
                                </a>
                            </li>

                            {/* ///////////////////////////////// Github Icon //////////////////////// */}


                            <li>
                                <a href="https://github.com/ParvezCoder" target="_blank" className="text-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 h-6" viewBox="0 0 24 24">
                                        <rect width="24" height="24" fill="#0077b5" rx="4" />
                                        <path fill="#fff" d="M12 2C6.477 2 2 6.484 2 12.02c0 4.428 2.865 8.185 6.839 9.503.5.09.683-.217.683-.483 0-.238-.009-.868-.013-1.704-2.782.605-3.37-1.343-3.37-1.343-.454-1.157-1.109-1.466-1.109-1.466-.906-.62.069-.607.069-.607 1.002.07 1.528 1.03 1.528 1.03.89 1.526 2.34 1.086 2.91.831.09-.647.349-1.086.636-1.337-2.22-.253-4.555-1.113-4.555-4.951 0-1.092.39-1.984 1.029-2.682-.103-.253-.447-1.271.098-2.65 0 0 .84-.27 2.75 1.026A9.562 9.562 0 0112 6.845c.85.004 1.705.115 2.504.336 1.91-1.296 2.75-1.025 2.75-1.025.546 1.378.202 2.396.1 2.65.64.698 1.027 1.59 1.027 2.682 0 3.847-2.339 4.695-4.566 4.944.358.308.678.918.678 1.852 0 1.336-.012 2.417-.012 2.746 0 .268.18.577.688.48A10.024 10.024 0 0022 12.019C22 6.484 17.523 2 12 2z" />
                                    </svg>
                                </a>
                            </li>


                            {/* /////////////////////////////////  end github Icon //////////////////////// */}


                            {/* /////////////////////////////////  X icon Icon //////////////////////// */}





                        </ul>

                    </div>
                </div>

                <div className="bg-gray-900 p-5 mt-2">
                    <p className='text-gray-400 text-base text-center'>© ReXon Solution. All rights reserved.</p>
                </div>
            </footer>
            {/* /////////////////////////////////////////////>>>>>>> End Footer <<<<<< //////////////////////////////////////////////////////////// */}
        </>


    );
}







