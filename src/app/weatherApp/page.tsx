"use client"
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Clear from '../../../public/weatherImages/Clear.png'
import Error from '../../../public/weatherImages/Error.png'
import Smoke from '../../../public/weatherImages/Smoke.png'
import Rain from '../../../public/weatherImages/Rain.png'
import Cloud from '@/../public/weatherImages/Cloud.png'
import { DiVim } from 'react-icons/di';

function WeatherApp() {

    const [search, setSearch] = useState("")
    const [data, setdata] = useState<any>({})
    const [error, setError] = useState("")
    const api = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
    const apiKeys = "17db3021b549f3ab58682d0dd9df299d"
    const getData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const fun = async () => {
        const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=17db3021b549f3ab58682d0dd9df299d&units=metric`)
        const jsonData = await apiData.json()
        setdata(jsonData)
        if (search == "") {
            setError("Please Enter City Name")
        }
        else if (jsonData.cod === "404") {
            setError("Please Enter  valid city name")
        }
        else {
            setError("")
        }

        setSearch("")


    }


    return (
        <>
            <Navbar />
            <div className='bg-gray-800 h-screen flex justify-center '>
                <div className=' bg-red-800  h-[71%] sm:h-[80%] md:h-[85%] p-5 sm:p-2 md:-4 mt-2 sm:mt-4 md:mt-10 text-white font-semibold md:font-bold text-sm md:text-lg rounded-lg'>
                    <h1 className='font-bold text-2xl text-center -mt-2 sm:mt-2 md:mt-4'>Weather Widget</h1>
                    <p className='text-center  md:text-xl font-light flex justify-center'>Search for the current weather condition in your city</p>
                    <div className='flex justify-center items-center mt-4'>
                        <input
                            type='text'
                            className='border  p-2 bg-black !border-gray-500  pl-2 rounded '
                            placeholder='Enter city name'
                            onChange={getData}
                            value={search}
                            

                        />
                        <button onClick={fun} className='ml-3'>
                            <div className=' p-1.5'>
                                <FaSearch className=' - font-semibold text-2xl' />
                            </div>
                        </button>
                    </div>
                    <div>

                        {data && data.weather ?

                            <div className='flex flex-col items-center'>
                                <h1 className='text-center mt-2 md:mt-4'>The Temperature of {data.name}</h1>
                                <div className='mt-4 h-48 w-48'>
                                    <img src={data.weather[0].main === "Clear" ? Clear.src : ""} />
                                    <img src={data.weather[0].main === "Smoke" ? Smoke.src : ""} />
                                    <img src={data.weather[0].main === "Haze" ? Cloud.src : ""} />
                                    <img src={data.weather[0].main === "Clouds" ? Cloud.src : ""} />
                                    <img src={data.weather[0].main === "Rain" ? Rain.src : ""} />
                                </div>
                                <p className='text-center mt-2 md:mt-4'>{Math.floor(data.main.temp)}°C</p>
                                <p className='text-center  '>{data.weather[0].description}</p>
                            </div>
                            : ""
                        }
                    </div>
                    <div>
                        {error ? <div className='flex flex-col items-center'>
                            <div className='mt-4 h-48 w-48'>
                                <img src={Error.src} alt="Error"  className='rounded-xl'/>
                            </div>
                            <h1 className='text-center mt-4 border-blue-700  border-2 p-1.5 shadow-xl rounded-md'>{error}</h1>
                            
                        </div> : ""}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WeatherApp
