import React from 'react';
import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar";
import Link from "next/link"

export default function Portfolio() {
  return (

    <>
      <NavBar />
      <div className="bg-gray-800">

        <div className="relative   py-16 font-[sans-serif]  " >
          <div className="absolute inset-0">
            <img src="bg.png" alt="Background Image" className="w-full h-full object-cover " />
          </div>
          <div className="relative max-w-screen-xl mx-auto px-8 z-10  text-center text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold  leading-tight mb-6">Welcome to My Projects and Portfolio Website </h1>
            <p className="text-lg md:text-xl mb-12">All projects are built using cutting-edge technologies like Next.js, React.js, Tailwind CSS,JavaScript, Bootstrap, HTML and Css3</p>
          </div>
        </div>

        <div className="font-[sans-serif]  py-2 mt-6 mx-auto lg:max-w-7xl max-w-2xl md:max-w-full">
          {/* <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Coffee store</h2> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
            <Link href="https://restaurantwebsite786.vercel.app/" target="_blank">
              <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

                <div className="p-6">
                  <div
                    className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"></path>
                    </svg>
                  </div>

                  <div className="w-3/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-3xl">
                    <img src="/rest.png" alt="Restaurant" className="h-full w-full object-contain " />
                  </div>
                </div>

                <div className="text-center bg-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-800">Delicious Restaurant</h3>
                  <button type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl">
                    Click here to check it yourself</button>
                </div>
              </div>
            </Link>
           
            <Link href="https://panaverse-dao-swart-eight.vercel.app/" target="_blank">
              <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

                <div className="p-6">
                  <div
                    className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"></path>
                    </svg>
                  </div>

                  <div className="w-3/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-3xl">
                    <img src="/dao.png" alt="Panaverse Dao" className="h-full w-full object-contain " />
                  </div>
                </div>

                <div className="text-center bg-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-800">Panaverse Dao</h3>
                  <button type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl">
                    Click here to check it yourself</button>
                </div>
              </div>
            </Link>
           
            <Link href="/weatherApp" target="_blank">
              <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

                <div className="p-6">
                  <div
                    className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"></path>
                    </svg>
                  </div>

                  <div className="w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-3xl">
                    <img src="/weatherApp.png" alt="Product 1" className="h-full w-full object-contain " />
                  </div>
                </div>

                <div className="text-center bg-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-800">Weather App</h3>
                  <button type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl">
                    Click here to check it yourself</button>
                </div>
              </div>
            </Link>
         
            <Link href="counterTimer" target="_blank">
              <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

                <div className="p-6">
                  <div
                    className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"></path>
                    </svg>
                  </div>

                  <div className="w-3/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-3xl">
                    <img src="/counterTimer.png" alt="Product 1" className="h-full w-full object-contain " />
                  </div>
                </div>

                <div className="text-center bg-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-800">Countdown timer</h3>
                  <button type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl">
                    Click here to check it yourself</button>
                </div>
              </div>
            </Link>
            
            <Link href="/Increament&Decreament" target="_blank">
              <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

                <div className="p-6">
                  <div
                    className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"></path>
                    </svg>
                  </div>

                  <div className="w-3/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-3xl">
                    <img src="/pro.png" alt="Product 1" className="h-full w-full object-contain " />
                  </div>
                </div>

                <div className="text-center bg-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-800">Increament And Decreament Operation</h3>
                  <button type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl">
                    Click here to check it yourself</button>
                </div>
              </div>
            </Link>

            <Link href="https://my-personal-va.vercel.app/" target="_blank">
              <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

                <div className="p-6">
                  <div
                    className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"></path>
                    </svg>
                  </div>

                  <div className="w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-3xl">
                    <img src="/va.png" alt="Product 1" className="h-full w-full object-contain " />
                  </div>
                </div>

                <div className="text-center bg-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-800">Virtual Assistant</h3>
                  <button type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl">
                    Click here to check it yourself</button>
                </div>
              </div>
            </Link>
            
            <Link href="/amazonClone" target="_blank">
              <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

                <div className="p-6">
                  <div
                    className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"></path>
                    </svg>
                  </div>

                  <div className="w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-3xl">
                    <img src="/Amazon.png" alt="Product 1" className="h-full w-full object-contain " />
                  </div>
                </div>

                <div className="text-center bg-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-800">Amazon Clone</h3>
                  <button type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl">
                    Click here to check it yourself</button>
                </div>
              </div>
            </Link>
            <Link href="/tictactoe" target="_blank">
              <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">

                <div className="p-6">
                  <div
                    className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"></path>
                    </svg>
                  </div>

                  <div className="w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-3xl">
                    <img src="/tictac.png" alt="Product 1" className="h-full w-full object-contain " />
                  </div>
                </div>

                <div className="text-center bg-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-800">Tic Tac Toe</h3>
                  <button type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl">
                    Click here to check it yourself</button>
                </div>
              </div>
            </Link>



          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
