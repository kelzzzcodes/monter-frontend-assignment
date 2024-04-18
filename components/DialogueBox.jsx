import React from 'react'
import { SquareX } from 'lucide-react'

const DialogueBox = () => {
  return (
    <div className="bg-stone-300 min-h-[90%] min-w-[64rem] absolute top-0 mt-10 rounded-xl">
      <div className="w-full">
        <div className=" p-4 flex items-center">
          <h2 className=" mx-auto font-bold text-black text-lg">
            Recently Generated Reports
          </h2>
          <SquareX width={30} height={30} className="ml-auto text-gray-600" />
        </div>

        <div className="flex flex-col">
          <div className="bg-slate-400 px-8 py-2">
            <ul className="flex justify-between">
              {dialogueHeading.map((item, index) => (
                <li
                  key={index}
                  className={`${index === 1 ? 'w-[70%]' : 'w-[15%]'} text-left`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default DialogueBox

const dialogueHeading = ['Date', 'Report Name', 'Download']
