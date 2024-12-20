import Image from "next/image"
import Swiper_img from "./swiper"

export default function Our_Product() {
    return (
        <main className="bg-[#f0f0f0]">

            {/* Section Browse The Range */}
            <div className="pt-40 text-[#1d1d1d]">
                <h2 className="text-4xl font-bold py-3 px-2 text-center">Browse The Range</h2>
                <p className="text-center text-xl font-semibold text-[#3d3b3b]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                <div className="flex justify-center ">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-20 mt-16 px-10 text-center font-medium">
                        <ul className="">
                            <Image
                                src={"/dining.png"}
                                height={350}
                                width={350}
                                alt="Dining Room"
                                className="rounded-md"

                            />
                            <p className="text-xl pt-2">Dining</p>
                        </ul>

                        <ul>
                            <Image
                                src={"/living room.png"}
                                height={350}
                                width={350}
                                alt="Living Room"
                                className="rounded-md"

                            />
                            <p className="text-xl pt-2">Living</p>
                        </ul>

                        <ul>
                            <Image
                                src={"/badroom.png"}
                                height={350}
                                width={350}
                                alt="Bed Room"
                                className="rounded-md"

                            />
                            <p className="text-xl pt-2">Bedroom</p>
                        </ul>
                    </div>
                </div>


                {/* Section Our Products  */}
                <div className="">
                    <h1 className="text-5xl text-center font-bold mt-32">Our Product</h1>


                    <div className="flex justify-center mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* 01 */}
                            <div className="text-sm bg-[#e9e8e8] w-[230px] h-[340px]">
                                <ul>
                                    <Image
                                        src={"/syltherine-img.png"}
                                        height={250}
                                        width={250}
                                        alt="Syltherine"
                                        className="w-[230px] h-[230px]"

                                    />
                                </ul>
                                <div className="p-2 px-5">
                                    <h2 className="font-medium py-1 text-xl">Syltherine</h2>
                                    <p>Stylish cafe chair</p>
                                    <div className="flex py-2">
                                        <h3 className="font-bold">Rp 2.500.000</h3>
                                        <p className="text-gray-500 px-3 line-through">Rp 3.500.000</p>
                                    </div>
                                </div>
                            </div>


                            {/* 02 */}
                            <div className="text-sm bg-[#e9e8e8] w-[230px] h-[340px]">
                                <ul>
                                    <Image
                                        src={"/leviosa-img.png"}
                                        height={250}
                                        width={250}
                                        alt="leviosa"
                                        className="w-[230px] h-[230px]"

                                    />
                                </ul>
                                <div className="p-2 px-5">
                                    <h2 className="font-medium py-1 text-xl">leviosa</h2>
                                    <p>Stylish cafe chair</p>
                                    <h3 className="font-bold py-2">Rp 2.500.000</h3>

                                </div>
                            </div>


                            {/* 03 */}
                            <div className="text-sm bg-[#e9e8e8] w-[230px] h-[340px]">
                                <ul>
                                    <Image
                                        src={"/luxury-sofa-img.png"}
                                        height={250}
                                        width={250}
                                        alt="luxury-sofa"
                                        className="w-[230px] h-[230px]"

                                    />
                                </ul>
                                <div className="p-2 px-5">
                                    <h2 className="font-medium py-1 text-xl">Lolito</h2>
                                    <p>Luxury big sofa</p>
                                    <div className="flex py-2">
                                        <h3 className="font-bold">Rp 7.000.000</h3>
                                        <p className="text-gray-500 px-2 line-through">Rp 14.000.000</p>
                                    </div>
                                </div>
                            </div>


                            {/* 04 */}
                            <div className="text-sm bg-[#e9e8e8] w-[230px] h-[340px]">
                                <ul>
                                    <Image
                                        src={"/outdoor-tables-img.png"}
                                        height={250}
                                        width={250}
                                        alt="outdoor-table"
                                        className="w-[230px] h-[230px]"

                                    />
                                </ul>
                                <div className="p-2 px-5">
                                    <h2 className="font-medium py-1 text-xl">Respira</h2>
                                    <p>Outdoor bar table and stool</p>
                                    <h3 className="font-bold py-2">Rp 500.000</h3>
                                </div>
                            </div>

                            {/* 05 */}
                            <div className="text-sm bg-[#e9e8e8] w-[230px] h-[340px]">
                                <ul>
                                    <Image
                                        src={"/night-lamp-img.png"}
                                        height={250}
                                        width={250}
                                        alt="night-lamp"
                                        className="w-[230px] h-[230px]"

                                    />
                                </ul>
                                <div className="p-2 px-5">
                                    <h2 className="font-medium py-1 text-xl">Grifo</h2>
                                    <p>Night lamp</p>
                                    <h3 className="font-bold py-2">Rp 1.500.000</h3>
                                </div>
                            </div>


                            {/* 06 */}
                            <div className="text-sm bg-[#e9e8e8] w-[230px] h-[340px]">
                                <ul>
                                    <Image
                                        src={"/muggo-img.png"}
                                        height={250}
                                        width={250}
                                        alt="muggo"
                                        className="w-[230px] h-[230px]"

                                    />
                                </ul>
                                <div className="p-2 px-5">
                                    <h2 className="font-medium py-1 text-xl">Muggo</h2>
                                    <p>Small mug</p>
                                    <h3 className="font-bold py-2">Rp 150.000</h3>
                                </div>
                            </div>


                            {/* 07 */}
                            <div className="text-sm bg-[#e9e8e8] w-[230px] h-[340px]">
                                <ul>
                                    <Image
                                        src={"/cute-bedset-img.png"}
                                        height={250}
                                        width={250}
                                        alt="cute-bedset"
                                        className="w-[230px] h-[230px]"

                                    />
                                </ul>
                                <div className="p-2 px-5">
                                    <h2 className="font-medium py-1 text-xl">Pingky</h2>
                                    <p>Cute bed set</p>
                                    <div className="flex py-2">
                                        <h3 className="font-bold">Rp 7.000.000</h3>
                                        <p className="text-gray-500 px-2 line-through">Rp 14.000.000</p>
                                    </div>
                                </div>
                            </div>


                            {/* 08 */}
                            <div className="text-sm bg-[#e9e8e8] w-[230px] h-[340px]">
                                <ul>
                                    <Image
                                        src={"/minimalist-img.png"}
                                        height={250}
                                        width={250}
                                        alt="minimalist"
                                        className="w-[230px] h-[230px]"

                                    />
                                </ul>
                                <div className="p-2 px-5">
                                    <h2 className="font-medium py-1 text-xl">Potty</h2>
                                    <p>Minimalist flower pot</p>
                                    <h3 className="font-bold py-2">Rp 500.000</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                      <div className="flex justify-center">
                    <button className=" bg-[#ffff] my-10 text-[#B88E2F] text-sm font-bold py-3 md:py-4 lg:py-5 px-10 md:px-12 lg:px-24 duration-1000 border border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white">SHOW MORE</button>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-[#fff8f8]">
                    <div className="text-center md:text-start lg:text-start lg:w-[450px] px-2 md:px-6 lg:px-6 my-[150px] md:my-[250px] lg:my-[250px]">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4e4c4c] py-3">50+ Beautiful rooms inspiration</h3>
                        <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you.</p>

                        <button className="bg-[#B88E2F] mt-3 text-sm font-bold py-3 md:py-4 lg:py-5 px-10 md:px-12 lg:px-20 duration-1000 border hover:border-[#B88E2F] hover:bg-white hover:text-[#B88E2F]">EXPLORE MORE</button>

                    </div>

                    <div className='pt-8'>
                    <Swiper_img/>
                    </div>
                    
                </div>









             
            </div>
        </main>
    )
}
