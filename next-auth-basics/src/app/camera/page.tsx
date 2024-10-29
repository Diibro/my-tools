'use client'

import { useState } from "react"
import CamScreen from "./components/Camscanner"

const Page = () => {
     const [captureImages, setCapturedImages] = useState<Array<string>>([]);
     return (
          <div className="w-screen h-screen bg-gray-100 flex flex-col items-center justify-center">
               <div className="w-[80%] lg:w-[80%] h-auto border-[1.5px] border-gray-400 rounded-[10px] " >
                    <CamScreen />
               </div>
          </div>
     )
}

export default Page