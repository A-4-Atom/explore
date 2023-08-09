import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export function StateContext({ children }) {
  let defaultData = {
    name: {
      common: "India",
    },
    capital: ["New Delhi"],
    region: "Asia",
    subregion: "Southern Asia",
    latlng: [20.0, 77.0],
    area: 3287590.0,
    population: 1380004385,
    timezones: ["UTC+05:30"],
    flags: {
      png: "https://flagcdn.com/w320/in.png",
      svg: "https://flagcdn.com/in.svg",
      alt: "The flag of India is composed of three equal horizontal bands of saffron, white and green. A navy blue wheel with twenty-four spokes — the Ashoka Chakra — is centered in the white band.",
    },
  };

  const [selectedCountry, setSelectedCountry] = useState("India");
  const [inputText, setInputText] = useState(null);
  const [countryData, setCountryData] = useState(null);
  // const [cords, setCords] = useState([20.0, 77.0])


  function setData(data) {
    if(selectedCountry == "United States of America"){
        setCountryData({...data[0]})
        return
    }
    let collectedData = data.filter((x) => x.name.common == selectedCountry);
    setCountryData({ ...collectedData[0] });
  }

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${selectedCountry}`)
      .then((res) => res.json())
      .then((data) => setData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry]);

  return (
    <Context.Provider
      value={{
        selectedCountry,
        setSelectedCountry,
        setInputText,
        inputText,
        countryData,
        setCountryData,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useStateContext = () => useContext(Context);
