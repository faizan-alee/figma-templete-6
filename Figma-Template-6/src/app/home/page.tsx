
export default function Home() {
  return (
    <main className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/banner.png')" }}>
      <div className="flex justify-center md:justify-end lg:justify-end pt-16 md:pt-20 md:pr-20 lg:pt-28 lg:pr-28 text-xl">
      <div className="bg-[#FFF3E3] w-[280px] h-[400px] md:w-[500px] md:h-[310px] lg:w-[600px] lg:h-[360px] p-6 md:p-8 lg:p-10 pt-16 font-semibold rounded-2xl ">
            
            <h1 className="text-md md:text-md lg:text-lg font-semibold ">
              New Arrival
            </h1>

            <div className="">
            <h2 className="text-3xl md:text:3xl  lg:text-5xl text-[#B88E2F] font-bold py-2">Discover Our</h2>
            <h2 className="text-3xl md:text:3xl lg:text-5xl text-[#B88E2F] font-bold pb-3">New Collection</h2>
            <p className="text-lg font-semibold text-center md:text-left lg:text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit unde ab veniam ipsam odio aliquid culpa.</p>

            <button className="bg-[#B88E2F] mt-3 text-sm font-bold py-5 md:py-6 lg:py-7 px-10 md:px-12 lg:px-20 duration-1000 border hover:border-[#B88E2F] hover:bg-white hover:text-[#B88E2F]">BUY NOW</button>
            </div>

      </div>
      </div>
    </main>
  )
}
