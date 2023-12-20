import { useNavigate } from "react-router-dom"

export default function QuitButton() {
    const navigate = useNavigate()
    const handleOnQuit = () => {
        localStorage.removeItem('name')
        navigate('/')
    }
    
    return (
        <button
      type="button"
      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      onClick={handleOnQuit}
    >
      Quit
    </button>
    )
}