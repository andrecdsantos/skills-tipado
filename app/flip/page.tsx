import { data } from "../data/data"

const Flip = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-xl">Card Flip</h1>
        <div className="w-[300px] h-[420px] [perspective:1000px] bg-transparent cursor-pointer group">
            <div className="relative [transformStyle:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000 w-full h-full">
                <div className="absolute [backfaceVisibility:hidden] border-2 w-full h-full rounded-md">
                    <img className="w-full h-full" src={data[4].image}/>
                </div>
                <div className="absolute [transform:rotateY(180deg)] [backfaceVisibility:hidden] h-full w-full bg-secondary p-2 rounded-md">
                    <div className="text-center flex flex-col items-center justify-center h-full pb-24">
                        <h2 className="text-lg font-bold mb-3">Título</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A iusto vero reprehenderit rem nobis ex veniam soluta maiores alias quam odio, nisi dolores pariatur? Veritatis distinctio quos vel esse deleniti cumque eos? 
                        </p>
                        <button
                            className="my-6 bg-teal-500 rounded-full px-6 py-2 absolute duration-1000 delay-300 -bottom-20 group-hover:bottom-20 scale-0 group-hover:scale-125 overflow-hidden"
                        >
                            Clique aqui
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="h-[250px] w-[250px] group">
            <div className="group-hover:[transform:rotateY(180deg)] duration-2000 [transformStyle:preserve-3d]">
                <div className="">
                    <img className="h-full w-full" src={data[6].image} />
                </div>
            </div>
        </div>

        <div className="h-[250px] w-[250px] hover:[transform:rotateY(180deg)] duration-2000 [transformStyle:preserve-3d] my-8">
            <img className="h-full w-full" src={data[11].image} />
        </div>
    </div>
  )
}

export default Flip