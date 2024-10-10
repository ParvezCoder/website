"use client"
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function IncreamentDecreament() {
    const [increament, setIncreament] = useState(0)
    const handleValue = () => {
        setIncreament(increament + 1)
    }
    const handleValueDecreament = () => {
        setIncreament(increament - 1)
    }
    const resetValue = () => {
        setIncreament(0)
    }
    return (
        <>
            <Navbar />
            <div className="bg-gray-500 h-screen flex justify-center items-center ">
                <div className="bg-black flex justify-center items-center py-10  rounded-lg">

                    <div className="relative max-w-screen-xl mx-auto px-8 z-10  text-center text-white space-x-2" >
                        <h1 className=" md:text-xl font-bold  leading-tight mb-10">Increament & Decreament Operation </h1>
                        <p className="   mb-4"><span className="border-black  border-2 p-2 rounded-full">Your Total Count is [<span className="text-red-600"> {increament}</span> ]</span></p>
                        <button type="button" className="bg-indigo-600 mt-4 hover:bg-indigo-700 text-white text-base tracking-wide px-2 py-1 rounded-full 
                    transition duration-300 ease-in-out shadow-lg hover:shadow-xl" onClick={handleValue}>Increament + 1</button>
                        <button type="button" className="bg-red-600 hover:bg-indigo-700 text-white text-base tracking-wide p-1 px-2 rounded-full 
                    transition duration-300 ease-in-out shadow-lg hover:shadow-xl" onClick={resetValue}>Reset 0</button>
                        <button type="button" className="bg-black hover:bg-indigo-700 text-white text-base tracking-wide p-0.5 px-2 rounded-full 
                    transition duration-300 ease-in-out shadow-lg hover:shadow-xl border-2 border-blue-600" onClick={handleValueDecreament} >Decreament -1</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default IncreamentDecreament;