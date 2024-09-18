"use client"
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function WeatherApp() {
    const [search, setSearch] = useState("")
    const [dataFromApi, setdataFromApi] = useState<any>({})
    const api = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
    const apiKeys = "17db3021b549f3ab58682d0dd9df299d"
    const getData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const fun = async () => {
        if (search == "") {
            alert("enter city name")
        }
        const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=17db3021b549f3ab58682d0dd9df299d`)
        const jsonData = await apiData.json()
        setdataFromApi(jsonData)
        console.log(dataFromApi)
    }
    
    return (
        <>
            <Navbar />
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
                        <button onClick={fun} className='ml-3'>
                            <div className=' p-0.5'>
                                <FaSearch className='  font-semibold text-xl' />
                            </div>
                        </button>
                    </div>
                    <p className='text-center mt-4'>The Tempreture of {dataFromApi.name}  is 37C</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WeatherApp
