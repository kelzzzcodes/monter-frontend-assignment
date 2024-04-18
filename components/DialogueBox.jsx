import React from 'react'
import { SquareX } from 'lucide-react'
import { dialogueData, dialogueHeading } from '@/constant'

const DialogueBox = ({ onClick }) => {
  return (
    <div className="bg-white min-h-[90%] min-w-[64rem] absolute top-0 mt-10 rounded-xl">
      <div className="w-full">
        <div className=" p-4 flex items-center">
          <h2 className=" mx-auto font-bold text-black text-lg">
            Recently Generated Reports
          </h2>
          <SquareX
            onClick={onClick}
            width={30}
            height={30}
            className="ml-auto text-gray-600 cursor-pointer"
          />
        </div>

        <div className="flex flex-col">
          <div className="bg-[#f5f5f5] text-[#919191] px-4 py-2">
            <ul className="flex justify-between">
              {dialogueHeading.map((item, index) => (
                <li
                  key={index}
                  className={`${index === 1 ? 'w-[70%]' : 'w-[15%]'} text-left font-bold`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-4 py-2">
            <ul className=" text-[#929292]">
              {dialogueData.map((item, index) => (
                <li key={index} className="flex justify-between text-left py-2">
                  <div  className='w-[15%]' >
                    <p>{item.date.year}</p>
                    <span>{item.date.time}</span>
                  </div>
                  <div className="w-[70%]">
                    <p>{item.reportName}</p>
                  </div>
                  <div className='w-[15%]'>
                    <p>{item.download}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DialogueBox
