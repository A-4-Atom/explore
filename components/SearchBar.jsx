import { useRef } from "react";
import { useStateContext } from "@/context/StateContext";
// import countriesList from "@/lib/countriesList";
export default function SearchBar() {
  const { setInputText, setSelectedCountry, inputText} = useStateContext();
  const inputTextRef = useRef();

  function handleClick(){
    setInputText(inputTextRef.current.value)
    setSelectedCountry(inputTextRef.current.value)
  }
  return (
    <div className="w-full flex items-center justify-center mt-5">
      <input
        className="bg-cyan-400 appearance-none border-2 border-cyan-200 rounded w-3/5 sm:w-2/5 py-2 px-4 text-gray-700 placeholder-gray-700 focus:outline-none focus:bg-white focus:border-cyan-300"
        type="text"
        placeholder="Search"
        ref={inputTextRef}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-11 h-11 text-white bg-cyan-400 border-2 border-cyan-200 mx-5 rounded py-1 px-1 cursor-pointer hover:scale-110 transform transition-transform duration-300 ease-in-out"
        onClick={handleClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
}
