export const FrontID = ({ details }: { details: StudentDetails }) => (
  <div
    style={{
      backgroundImage: `url(/logo-op-15.png)`,
    }}
    id="front"
    className="card relative flex m-0 bg-center bg-no-repeat"
  >
    <div
      className={`${
        details.full ? " bg-transparent" : " bg-pink-400"
      } w-8 h-full ml-1 duration-300`}
    >
      <img src="/logo.png" alt="logo" className="w-10/12 mx-auto mt-3" />
    </div>

    <div className="z-50 flex-1 text-xs font-bold">
      <h1 className="text-variant font-serif text-base text-center">
        EDO UNIVERSITY IYAMHO
      </h1>

      <p className="font-serif leading-none text-center text-blue-800">
        Edo State, Nigeria <br />
        Student Identity Card
      </p>

      <p className="text-xxxs w-24 mt-3 mb-1 ml-2 font-bold leading-none text-center text-blue-800">
        ID No: <br /> EUI-101012
      </p>
      <div className=" flex items-center">
        <div className=" ml-2 leading-none">
          <div className="w-20 h-20 bg-red-500"></div>
        </div>
        <div className="flex-1 w-full h-full ml-2">
          <Detail title="Name" value={details.name.toUpperCase()} />
          <Detail title="Faculty" value={details.faculty} />
          <Detail title="Mat No" value={details.matno} />
          <Detail title="Level" value={details.level} />
          <Detail
            title="Session"
            value={`${new Date().getFullYear()}/${
              new Date().getFullYear() + 1
            }`}
          />
          <p className="text-xxs mt-1 mr-5 text-right text-red-700">
            Valid till May 1st. {new Date().getFullYear() + 1}
          </p>
        </div>
      </div>
    </div>
  </div>
);
const Detail = ({ title, value }: { title: string; value: string }) => (
  <div className="text-xxs flex items-center mb-px font-black leading-tight text-blue-800">
    <p className="w-14 flex-shrink-0">{title}:</p>
    <p>{value}</p>
  </div>
);

export type StudentDetails = {
  name: string;
  faculty: string;
  matno: string;
  level: string;
  full: boolean;
};
