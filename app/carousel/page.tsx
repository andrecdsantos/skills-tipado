'use client'
import Link from "next/link"
import { data } from "../data/data"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import { useRef } from "react"

const Carousel = () => {
  const carousel = useRef<HTMLDivElement>(null) 
  const shoe = useRef<HTMLImageElement>(null) 

  const handleCarouselClick = (e: React.MouseEvent, direction: string) => {
    e.preventDefault()
    if(carousel.current && shoe.current) {
        direction === 'left' ? 
        (carousel.current.scrollLeft -= shoe.current.offsetWidth + 24)/* offsetWidth + o gap-x-6 =24px */
        :
        (carousel.current.scrollLeft += shoe.current.offsetWidth + 24)
    }
  }
  return (
    <div className="px-4">
        <h1 className="text-center text-lg">Carrosel</h1>
        <div className="relative">
            <div className="h-80 w-full flex items-center overflow-hidden bg-gray-100" ref={carousel}>
                <div className="flex items-center gap-x-6">
                    {data.map(item=>
                        /* <Link key={item.id} className="w-max h-max" href={'/'}>
                            <img src={item.image} className="object-cover shadow-2xl rounded-xl" ref={shoe}/>
                        </Link>   */ 
                        <Link key={item.id} className="w-[250px] h-[250px] [perspective:1000px] group" href={'/'}>
                            <div className="relative [transformStyle:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000 w-full h-full">
                                <div className="absolute [backfaceVisibility:hidden] w-full h-full rounded-xl">
                                    <img src={item.image} className="object-cover shadow-2xl" ref={shoe}/>
                                </div>
                                <div className="absolute bg-secondary [transform:rotateY(180deg)] [backfaceVisibility:hidden] w-full h-full rounded-md p-2">
                                    <div className=" text-white text-center flex flex-col gap-y-1 items-center justify-center h-full ">
                                        <h3 className="text-xl">{item.name}</h3>
                                        <p>De: R${item.oldPrice}</p>
                                        <p>Por: R${item.price}</p>
                                        <Link href={'/'} className="bg-primary mt-2 p-2 hover:px-4 rounded-lg hover:text-tertiary duration-500">Compre</Link>
                                    </div>
                                </div>
                            </div>
                        </Link>   
                    )}
                </div>
            <button 
                className="text-3xl text-tertiary bg-primary rounded-full self-center static sm:absolute -left-3 top-1/2 z-30"
                onClick={e=> handleCarouselClick(e, 'left')}
                >
                <FaArrowAltCircleLeft/>
            </button>
            <button 
                className="text-3xl text-tertiary bg-primary rounded-full self-center static sm:absolute -right-3 top-1/2 z-30"
                onClick={e => handleCarouselClick(e, 'right')}
            >
                <FaArrowAltCircleRight/>
            </button>
            <div className="absolute right-0 top-0 bg-gradient-to-l from-gray-100 h-full w-16 hidden sm:block"></div>
            <div className="absolute left-0 top-0 bg-gradient-to-r from-gray-100 h-full w-16 hidden sm:block"></div>
            </div>
        </div>
    </div>
  )
}

export default Carousel