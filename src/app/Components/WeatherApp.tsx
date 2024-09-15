import React from 'react'

function WeatherApp() {
    return (

        <>
            <div className='bg-black h-screen items-center flex justify-center '>
                <div className='bg-white  w-96 h-96  pt-4 justify-center border rounded-full' >
                    <div>
                        <div className=' '>
                            <h1 className='text-2xl text-center font-semibold'> weather Widget</h1>
                            <p className='text-gray-500  flex justify-center'> Search for the current weather condition in you city</p>
                        </div>
                    </div>
                    <div className='space-x-4 mt-10 flex justify-center'>
                        <input type='search' className=' p-1 rounded-xl' style={{border:"1px solid gray"}} />
                        <button className='bg-black text-white p-1 rounded-xl px-4'>Search</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default WeatherApp