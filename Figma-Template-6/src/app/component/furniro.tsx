import Image from "next/image";

export default function Furniro() {
  return (
    <main className="hidden md:hidden lg:block">


      <div className="text-center py-20">
        <p className="font-semibold py-1">Share your setup with</p>
        <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold">#FurniroFurniture</h3>
      </div>


      <span className="flex justify-center px-3">

        {/* First section with 4 images */}
        <div className="grid grid-cols-3 lg:grid-cols-1 lg:grid-rows-2 grid-flow-col gap-4  mix-w-[400px]">
          
          <div className="row-span-1">
            <Image
              src="/furniro-img1.png"
              height={350}
              width={150}
              alt="Image 1"
              className="w-[150px] h-[350px]"
            />
          </div>
          <div className="row-span-1">
            <Image
              src="/furniro-img2.png"
              height={300}
              width={400}
              alt="Image 2"
              className="w-[400px] h-[300px]"
            />
          </div>
          <div className="flex justify-start items-end row-span-1">
            <Image
              src="/furniro-img3.png"
              height={280}
              width={400}
              alt="Image 3"
              className="w-[400px] h-[280px]"
            />
          </div>
          <div className="flex justify-start row-span-1">
            <Image
              src="/furniro-img4.png"
              height={250}
              width={300}
              alt="Image 4"
              className="w-[300px] h-[250px]"
            />
          </div>
        </div>

        {/* Middle section with 1 image */}
        <div className="flex justify-center items-center mix-w-[200px]">
          <Image
            src="/furnirofurniturebg-img.png"
            height={380}
            width={400}
            alt="Center Image"
            className="w-[400px] h-[380px] px-4"
          />
        </div>

        {/* Third section with 4 images */}
        
        <div className="grid grid-cols-3 lg:grid-cols-1 lg:grid-rows-2 grid-flow-col gap-4  mix-w-[400px]">
          <div className="flex items-end row-span-1">
            <Image
              src="/furniro-img5.png"
              height={300}
              width={500}
              alt="Image 5"
              className="w-[500px] h-[300px]"
            />
          </div>
          <div className="flex justify-end row-span-1">
            <Image
              src="/furniro-img6.png"
              height={250}
              width={150}
              alt="Image 6"
              className="w-[150px] h-[250px]"
            />
          </div>
          <div className="row-span-1">
            <Image
              src="/furniro-img7.png"
              height={350}
              width={300}
              alt="Image 7"
              className="w-[300px] h-[350px]"
            />
          </div>
          <div className="row-span-1">
            <Image
              src="/furniro-img.png"
              height={200}
              width={250}
              alt="Image 8"
              className="w-[250px] h-[200px]"
            />
          </div>
          </div>
      

      </span>

    </main>
  )
}
