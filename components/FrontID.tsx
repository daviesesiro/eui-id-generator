import { useEffect, useState } from "react";
import { isServer } from "../util";

export const FrontID = ({ details }: { details: StudentDetails }) => {
  const [id, setId] = useState(0);
  useEffect(() => {
    if (!isServer()) {
      setId(Math.floor(Math.random() * 9999));
    }
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(/logo-op-15.png)`,
      }}
      id="front"
      className="card flex bg-center bg-no-repeat"
    >
      <div
        className={`${
          details.full ? "bg-transparent" : " bg-pink-400"
        } w-8 sm:w-12 h-full ml-1 duration-300`}
      >
        <img src="./logo.png" alt="logo" className="w-10/12 mx-auto mt-3" />
      </div>

      <div className="sm:text-base z-50 flex-1 text-xs font-bold">
        <h1 className="sm:text-2xl font-serif text-base text-center text-green-700">
          EDO UNIVERSITY IYAMHO
        </h1>

        <p className="sm:text-lg sm:leading-tight font-serif leading-none text-center text-blue-800">
          Edo State, Nigeria <br />
          Student Identity Card
        </p>

        <div className="sm:ml-4 sm:mt-5 ml-2">
          <p className="text-xxxs sm:w-28 sm:text-xxs w-20 mt-3 mb-1 font-black leading-none text-center text-blue-800">
            ID No: <br /> EUI-STUD{id}
          </p>
          <div className="flex items-center">
            <div className="leading-none">
              <div
                id="passport-container"
                onClick={() => document.getElementById("file-input").click()}
                className="sm:h-36 hover:opacity-80 sm:w-32 w-20 h-24 overflow-hidden duration-200 bg-gray-500 bg-center bg-cover rounded-sm cursor-pointer"
              >
                <div className="flex items-center justify-center h-full font-normal text-center text-gray-200">
                  Click to add passport
                </div>
              </div>
            </div>
            <div className="sm:ml-4 flex-1 w-full h-full ml-2">
              <Detail title="Name" value={details.name.toUpperCase()} />
              <Detail title="Faculty" value={details.faculty} />
              <Detail title="Dept" value={details.department} />
              <Detail title="Mat No" value={details.matno} />
              <Detail title="Level" value={details.level} />
              <Detail
                title="Session"
                value={`${new Date().getFullYear()}/${
                  new Date().getFullYear() + 1
                }`}
              />
              <p className="text-xxxs sm:text-xs sm:ml-20 mt-1 ml-12 mr-3 text-left text-red-600">
                Valid till May 1<sup>st</sup>. {new Date().getFullYear() + 1}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Detail = ({ title, value }: { title: string; value: string }) => (
  <div className="text-xxxs sm:text-xs flex items-center mb-px font-black leading-tight text-blue-800">
    <p className="sm:w-18 w-11 flex-shrink-0">{title}:</p>
    <p className="text-xxxs sm:text-xs sm:w-36">{value}</p>
  </div>
);

export type StudentDetails = {
  name: string;
  faculty: string;
  department: string;
  matno: string;
  level: string;

  full: boolean;
};
