import { useStateContext } from "@/context/StateContext";
import Image from "next/image";

export default function CountryDetails() {
  const { countryData } = useStateContext();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row gap-4 mr-4">
      {countryData && (
        <div>
          <Image
            width={372}
            height={256}
            src={countryData.flags.png}
            alt={`${countryData.name.common} Flag`}
            className="h-64"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold my-2 text-cyan-600">
              {countryData.name.common}
            </h2>
            <p className="text-cyan-600 text-xl">
              Region: {countryData.subregion}
            </p>
            {countryData.capital && <p className="text-cyan-600 text-xl">
              Capital: {countryData.capital[0]}
            </p>}
            <p className="text-cyan-600 text-xl">
              Population: {countryData.population}
            </p>
            <p className="text-cyan-600 text-xl">
              Coordinates:{" "}
              {`Lat: ${countryData.latlng[0]} -  Long: ${countryData.latlng[0]}`}
            </p>
            <p className="text-cyan-600 text-xl">
              Area: {countryData.area} sq km
            </p>
            <p className="text-cyan-600 text-xl">
              Timezone: {countryData.timezones[0]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
