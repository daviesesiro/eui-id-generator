import { Header } from "../components/Header";
import { BackID } from "../components/BackID";
import { FrontID } from "../components/FrontID";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { InputField } from "../components/InputField";

import { createCards } from "../createCard";
import { resizeImage } from "../util";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    faculty: "",
    department: "",
    matno: "",
    level: "100L",
    full: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    if (id === "full")
      return setForm((old) => ({
        ...old,
        [id]: value === "100%" ? true : false,
      }));

    setForm((old) => ({ ...old, [id]: value }));
  };

  const handlePassport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null || e.target.files.length < 1) return;

    const imageContainer = document.getElementById("passport-container");

    if (imageContainer.firstChild)
      imageContainer.removeChild(imageContainer.firstChild);

    const image = document.createElement("img");
    image.src = await resizeImage({ imageFile: e.target.files[0] });
    image.classList.add("object-cover", "w-full", "h-full");
    image.alt = "passport";

    imageContainer.appendChild(image);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const cards = document.querySelectorAll(
      ".card"
    ) as NodeListOf<HTMLDivElement>;

    await createCards(cards);

    setLoading(false);
  };
  return (
    <>
      <Header />
      <div className="px-5">
        <form
          onSubmit={handleFormSubmit}
          className="max-w-lg px-4 py-3 mx-auto mt-5 mb-20 border rounded-md"
        >
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

            <div>
              <label
                className="inline-block mb-1 text-gray-600"
                htmlFor="level"
              >
                Level:
              </label>
              <select className="input" onChange={handleChange} id="level">
                <option value="100L">100l</option>
                <option value="200L">200l</option>
                <option value="300L">300l</option>
                <option value="400L">400l</option>
                <option value="500L">500l</option>
                <option value="600L">600l</option>
                <option value="700L">700l</option>
              </select>
            </div>
          </div>
          <div className="gap-x-4 grid grid-cols-2 mt-5">
            <InputField
              type="file"
              id="file-input"
              label="Passport"
              accept="image/png, image/jpeg"
              onChange={handlePassport}
            />
            <div>
              <label className="inline-block mb-1 text-gray-600" htmlFor="full">
                Fees paid:
              </label>
              <select className="input" onChange={handleChange} id="full">
                <option value="60%">60%</option>
                <option value="100%">100%</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="disabled:bg-gray-700 disabled:cursor-not-allowed hover:bg-blue-700 block w-40 p-2 mx-auto mt-10 mb-4 text-center text-white duration-300 bg-blue-600 rounded-md"
          >
            {loading ? "Generating... 😴😴" : "Generate"}
          </button>
        </form>
        <h1 className="mb-8 text-2xl text-center">Preview ID Card😜 </h1>
        <div className="lg:grid-cols-2 justify-items-center gap-y-5 grid grid-cols-1 mb-10">
          <FrontID details={form} />
          <BackID />
        </div>
      </div>
      <Footer />
    </>
  );
}
