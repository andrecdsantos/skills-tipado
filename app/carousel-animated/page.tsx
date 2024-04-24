'use client'
import { useRef } from "react"
import { data } from "../data/data"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"

const CarouselAnimated = () => {
    const duplicatedData = [...data, ...data]
    const shoe = useRef<HTMLImageElement>(null)
    const carousel = useRef<HTMLDivElement>(null)
  return (
    <div className="px-4">
        <h2 className="text-center text-lg">Carrossel Animado</h2>
        <div className='relative bg-slate-100 my-4 overflow-hidden' ref={carousel}>
              <div className="z-50 h-full w-6 lg:w-12 bg-gradient-to-r from-gray-100 from-20% absolute left-0 top-0"></div>
              <div className="z-50 h-full w-6 lg:w-12 bg-gradient-to-l from-gray-100 from-20% absolute right-0 top-0"></div>   
              <div className=" flex  py-6 w-max relative -translate-x-1/2">
                <div className=" flex *:mx-4 animate-endless hover:[animation-play-state:paused]">
                            {duplicatedData.map(item=>
                              <img 
                                key={item.id} 
                                src={item.image}
                                className='shadow-xl rounded-lg cursor-pointer hover:[transform:scale(1.05)]'
                                />     
                            )}
                </div>            
              </div>
        </div>

        <div className='relative bg-slate-100 my-4 overflow-hidden'>
              <div className="z-50 h-full w-6 lg:w-12 bg-gradient-to-r from-primary from-20% absolute left-0 top-0"></div>
              <div className="z-50 h-full w-6 lg:w-12 bg-gradient-to-l from-primary from-20% absolute right-0 top-0"></div>   
              <div className="flex  py-6 w-max relative ">
                <div className=" flex *:mx-4 animate-endlessReverse hover:[animation-play-state:paused]">
                            {duplicatedData.map(item=>
                              <img 
                                key={item.id} 
                                src={item.image}
                                className='shadow-xl rounded-lg cursor-pointer hover:[transform:scale(1.05)]'
                                />     
                            )}
                </div>            
              </div>
        </div>

    </div>
  )
}

export default CarouselAnimated