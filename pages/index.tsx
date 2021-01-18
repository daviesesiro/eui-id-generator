import { Header } from "../components/Header";
import { BackID } from "../components/BackID";
import { FrontID } from "../components/FrontID";
import { Footer } from "../components/Footer";
import { createCard } from "../createCard";
import { useState } from "react";
import { InputField } from "../components/InputField";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    faculty: "",
    department: "",
    matno: "",
    level: "",
    full: false,
  });
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const cards = document.querySelectorAll(
      ".card"
    ) as NodeListOf<HTMLDivElement>;

    cards.forEach(async (card, idx) => {
      await createCard(card, `EUI ID ${idx === 0 ? "front" : "back"}`);
    });

    setLoading(false);
  };

  const handleChange = (e) => {
    const { type, id, value, checked } = e.target;
    if (type === "checkbox")
      return setForm((old) => ({ ...old, [id]: checked }));
    setForm((old) => ({ ...old, [id]: value }));
  };

  const handlePassport = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    var reader = new FileReader();

    reader.onloadend = function () {
      const imageContainer = document.getElementById("passport-container");
      if (imageContainer.firstChild)
        imageContainer.removeChild(imageContainer.firstChild);

      const image = document.createElement("img");

      image.src = reader.result as string;
      image.classList.add("object-cover", "w-full", "h-full");
      image.alt = "passport";

      imageContainer.appendChild(image);
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      <Header />
      <div className="px-5">
        <form className="max-w-lg px-4 py-3 mx-auto mt-5 mb-20 border rounded-md">
          <h1 className="text-center">Fill up to generate ID</h1>
          <InputField
            id="name"
            label="Full Name"
            onChange={handleChange}
            value={form.name}
            placeholder="John Snow"
          />
          <div className=" gap-x-4 grid grid-cols-2 mt-4">
            <InputField
              placeholder="Science"
              id="faculty"
              label="Faculty"
              onChange={handleChange}
              value={form.faculty}
            />
            <InputField
              placeholder="Micro Biologoy"
              id="department"
              label="Department"
              value={form.department}
              onChange={handleChange}
            />
          </div>
          <div className="gap-x-4 grid grid-cols-2 mt-4">
            <InputField
              id="matno"
              label="Matric Number"
              value={form.matno}
              onChange={handleChange}
              placeholder="ENG/CCS/232333"
            />
            <InputField
              id="level"
              onChange={handleChange}
              label="Level"
              value={form.level}
              placeholder="100l"
            />
          </div>
          <input
            className="mt-5"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handlePassport}
          />
          <span>
            <input
              type="checkbox"
              id="full"
              onChange={handleChange}
              className="w-5 h-5 mr-2 align-middle"
            />
            <label htmlFor="full" className="align-middle">
              Full?
            </label>
          </span>
          <button
            type="button"
            onClick={handleGenerate}
            className="w-36 hover:bg-blue-700 block p-2 mx-auto mt-10 mb-4 text-center text-white duration-300 bg-blue-600 rounded-md"
          >
            {loading ? "Generating... 😴😴" : "Generate"}
          </button>
        </form>
        <h1 className="mb-8 text-2xl text-center">Preview ID Card😜 </h1>
        <div className="md:flex-row md:justify-around flex flex-col items-center flex-shrink-0 max-w-3xl mx-auto mb-20">
          <FrontID details={form} />
          <div className="md:hidden h-8" />
          <BackID />
        </div>
      </div>
      <Footer />
    </>
  );
}
