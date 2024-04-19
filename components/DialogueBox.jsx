import React, { useEffect, useState } from 'react'
import { SquareX, ChevronFirst, ChevronLast } from 'lucide-react'

import { dialogueData, dialogueHeading } from '@/constant'

const DialogueBox = ({ onClick }) => {
  const [page, setPage] = useState(1)

  const selectPage = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= dialogueData.length / 10 &&
      selectedPage !== page
    );
    setPage(selectedPage)
  }

  return (
    <div className="bg-white min-h-[90%] min-w-[64rem] absolute top-0 mt-10 rounded-xl overflow-hidden ">
      <div className="flex flex-col items-start w-full h-full">
        <div className="w-full flex flex-col   ">
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

          <table className="flex flex-col">
            <div className="bg-[#f5f5f5] text-[#919191] px-4 py-2">
              <tr className="flex justify-between">
                {dialogueHeading.map((item, index) => (
                  <th
                    key={index}
                    className={`${
                      index === 1 ? 'w-[70%]' : 'w-[15%]'
                    } text-left font-bold`}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </div>
            <tbody className="px-4 py-2">
              {dialogueData.length > 0 && (
                <ul className=" text-[#929292]">
                  {dialogueData
                    .slice(page * 10 - 10, page * 10)
                    .map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between text-left py-1"
                      >
                        <div className="w-[15%]">
                          <p>{item.date.year}</p>
                          <span>{item.date.time}</span>
                        </div>
                        <div className="w-[70%]">
                          <p>{item.reportName}</p>
                        </div>
                        <div className="w-[15%]">
                          <p>{item.download}</p>
                        </div>
                      </li>
                    ))}
                </ul>
              )}
            </tbody>
          </table>
        </div>
        <div className=" w-full absolute bottom-0 border-t-2 border-[#f8f8f8] pt-2">
          {dialogueData.length > 0 && (
            <div className="w-full grid grid-cols-2 gap-2 h-14 mx-auto items-center justify-center">
              <div className=" text-black flex items-center justify-center ">
                <button
                  onClick={() => selectPage(page - 1)}
                  className={`${page > 1 ? 'flex items-center' : 'hidden'} `}
                >
                  <ChevronFirst />
                  <span>prev</span>
                </button>
                {[...Array(Math.ceil(dialogueData.length / 10))].map(
                  (_, index) => (
                    <span
                      onClick={() => selectPage(index + 1)}
                      key={index}
                      className={`${
                        page === index + 1 ? 'bg-[#f3511f] text-white' : ''
                      } cursor-pointer border-2 border-gray-400 px-2 ml-1  mr-1  rounded-lg`}
                    >
                      {index + 1}
                    </span>
                  ),
                )}
                <button
                  onClick={() => selectPage(page + 1)}
                  className={`${
                    page < dialogueData.length / 10
                      ? 'flex items-center'
                      : 'hidden'
                  } `}
                >
                  <span>Next</span>
                  <ChevronLast />
                </button>
              </div>
              <div className="text-black flex items-center ">
                <span>Rows per page</span>
                <select className="p-2 ml-1 rounded-lg bg-transparent border-2">
                  <option>10</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DialogueBox
