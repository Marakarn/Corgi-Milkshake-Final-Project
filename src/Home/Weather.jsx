import React from 'react'


const Weather = ({weatherData}) => {
    console.log(weatherData)
  return (
    <div>
        {weatherData.weather ? (
            <div className='w-auto h-auto bg-[#D2FE71] shadow-lg rounded-xl m-auto relative px-6 top-[10%]'>
                <div className='flex justify-between w-full'>
                    <div className='w-1/2 my-6 mx-auto flex justify-between items-center'>
                        <div className='flex flex-col items-start justify-between h-full'>
                            <div>
                                <p className='text-xl'>
                                    {weatherData.name},
                                    {weatherData.sys.country}
                                </p>
                                <p className='text-sm'>
                                    {weatherData.weather[0].description}

                                </p>
                            </div>
                            <div>
                                <h1 className='text-6xl font-semibold'>{weatherData.main.temp.toFixed()} °C
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className='w-1/2 flex flex-col pl-3 items-end'>
                        <div className='relative'>
                            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" className='w-[80px]'/>
                        </div>
                        {weatherData.name !== undefined ? (
                            <div className='flex flex-col text-xs'>
                                <div className='flex justify-between gap-x-8'>
                                    <p className='w-full'>Feels Like</p>
                                    <p className='font-bold w-20'>
                                        {weatherData.main.feels_like.toFixed()} °C
                                    </p>                                   
                                </div>
                                <div className='flex justify-between mt-3 gap-x-8'>
                                    <p className='w-full'>Humidity</p>
                                    <p className='font-bold w-20'>
                                        {weatherData.main.humidity} %
                                    </p>                                   
                                </div>
                            </div>
                        ): null}
                    </div>
                </div>
            </div>
        ): null}
    </div>
  )
}

export default Weather