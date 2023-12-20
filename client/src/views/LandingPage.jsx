import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

//   const handleOnChange = (event) => {
//     setName((prevValue) => ({
//       ...prevValue,
//       [event.target.name]: event.target.value,
//     }));
//   };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("name", name);
    navigate("/home-page");
  };

  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg?w=2000&t=st=1703054323~exp=1703054923~hmac=364f11cd1c30e4831991a12cc1b91467ca376d173b2c1371ebe5736f06ceb0e1")',
      }}
    >
      <div className="mx-auto">
        <div
          className="relative isolate overflow-hidden backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
	 px-6 py-24 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32"
        >
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Input your username
          </h2>
          <form
            className="mx-auto mt-10 flex max-w-md gap-x-4
          "
            onSubmit={handleOnSubmit}
          >
            <label htmlFor="email-address" className="sr-only">
              username . . .
            </label>
            <input
              id="email-address"
              name="username"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter your username . . ."
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
