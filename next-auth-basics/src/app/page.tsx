import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-[40%]  py-[40px] shadow-md rounded-sm shadow-gray-400 flex items-center justify-center">
        <Link href={'/login'} className="bg-gray-500 text-white text-[0.9rem] font-bold rounded-[5px] py-[10px] px-[20px] cursor-pointer hover:bg-gray-600 transition-all duration-300 " >Login</Link>
      </div>
    </div>
  );
}
