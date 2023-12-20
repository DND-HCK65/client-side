import { Link } from "react-router-dom";


export default function DndLogo() {
  return (
    <>
    <h1 
    className="text text-2xl font-bold"
    >
        <Link to="/home-page">
        Dnd Poll!
        </Link>
    </h1>
    
    <svg
      className="mx-3 w-6 h-6 text-white-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 18"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"
      />
    </svg>
    </>
  );
}
