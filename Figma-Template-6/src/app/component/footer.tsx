import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function Footer() {
    return (<footer>
  <main className="border-t relative border-black">
    <div className="text-5xl px-10 pt-10 font-bold">
      <h2>Furniro.</h2>
    </div>

    {/* Navbar div */}
    <div className="px-96">
      <nav className="hidden md:block lg:block">
        <ul className="grid grid-rows-5 grid-flow-col text-center gap-9 text-sm md:text-md lg:text-lg font-semibold">
          <li className="underline">Links</li>
          <li>
            <Link href={"/"} className="hover:underline">Home</Link>
          </li>
          <li>
            <Link href={"/"} className="hover:underline">Shop</Link>
          </li>
          <li>
            <Link href={"/"} className="hover:underline">Cart</Link>
          </li>
          <li>
            <Link href={"/"} className="hover:underline">Blog</Link>
          </li>
          <li className="underline">Help</li>
          <li>
            <Link href={"/"} className="hover:underline">Payment Options</Link>
          </li>
          <li>
            <Link href={"/"} className="hover:underline">Return</Link>
          </li>
          <li>
            <Link href={"/"} className="hover:underline">Privacy Policies</Link>
          </li>
        </ul>
      </nav>
    </div>


    {/* Footer Content */}
    <div className="px-14">
      <h2 className="text-lg font-serif pl-4 flex items-center py-4">Follow Me</h2>
      <ul className="flex flex-row pb-[2px] items-center">
        <li className="pl-[15px]">
          <Link
            href="https://www.linkedin.com/in/hammad-abbasi-95388628b/"
            target="_blank"
            rel="noopener noreferrer"
          > <FaLinkedinIn size={17} />
          </Link>
        </li>
        <p className="px-[10px] text-[17px]">I</p>
        <li>
          <Link
            href="https://www.facebook.com/profile.php?id=100068906216007"
            target="_blank"
            rel="noopener noreferrer"
          > <FaFacebookF size={17} />
          </Link>
        </li>
        <p className="px-[10px] text-[17px]">I</p>
        <li>
          <Link
            href="https://www.instagram.com/mr_hammad.abbasi/"
            target="_blank"
            rel="noopener noreferrer"
          > <FaInstagram size={17} />
          </Link>
        </li>
      </ul>
    </div>
  </main>

  <div className="relative">
    
    <div className="w-full max-w-[700px] border-b border-black mx-auto"></div>
  </div>

  <div className="flex justify-center items-center container pt-2">
    <p className="text-sm">&copy; 2024 Hammad Abbasi. All rights reserved.</p>
  </div>
</footer>

    )
}
