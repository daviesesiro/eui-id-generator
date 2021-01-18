export const BackID = () => (
  <div id="back" className="card px-2 py-2 m-0 text-xs font-bold leading-3">
    <p>
      This is to certify that the bearer whose photograph appears on this card
      is a Student of <br />
      <b className="text-sm font-extrabold leading-none">
        EDO UNIVERSITY IYMAHO{" "}
      </b>
    </p>
    <p>
      No person(s) unless authorized by the above institution may hold or may
      posses this card.
    </p>
    <p>If found, please return to:</p>
    <p>
      Office of the Registrar, Edo University Iyamho KM7, Auchi-Abuja Road,
      Iyamho Edo State.
    </p>
    <div className="text-xxxs mt-7 leading-none text-center">
      <p>Dr. (Mrs.) I. Ogboro FNIM</p>
      <p>Registrar</p>
    </div>
    <Barcode />
  </div>
);
const Barcode = () => (
  <div className="h-11 flex justify-center">
    <img src="./barcode.svg" alt="barcode" className="h-11" />
    <img src="./barcode.svg" alt="barcode" className="h-11" />
    <img src="./barcode.svg" alt="barcode" className="h-11" />
    <img src="./barcode.svg" alt="barcode" className="h-11" />
    <img src="./barcode.svg" alt="barcode" className="h-11" />
    <img src="./barcode.svg" alt="barcode" className="h-11" />
  </div>
);
