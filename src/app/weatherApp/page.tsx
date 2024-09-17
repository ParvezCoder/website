"use client"
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

function WeatherApp() {
    const [showData, setshowData] = useState("")
    const [showData2, setshowData2] = useState("abi ruko")


    const getData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setshowData(e.target.value)
    }
    return (
        <>
            <div className='bg-gray-800 h-screen flex justify-center items-center'>
                <div className='text-black bg-white  p-4 rounded-lg'>
                    <h1 className='font-bold text-2xl text-center'>Weather Widget</h1>
                    <p className='text-xl'>Search for the current weather condition in your city</p>
                    <div className='flex justify-center items-center mt-4'>
                        <input
                            type='text'
                            className='border  !border-gray-500  pl-2 rounded '
                            placeholder='search city name'
                            onChange={getData}
                        />
                        <button onClick={() => setshowData2(showData)} className='ml-3'>
                            <div className=' p-0.5'>
                                <FaSearch className='  font-semibold text-xl' />
                            </div>
                        </button>
                    </div>
                    <p className='text-center mt-4'>The Tempreture of {showData2} is 37C</p>
                </div>
            </div>
        </>
    )
}

export default WeatherApp
