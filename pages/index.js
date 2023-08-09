import Header from "@/components/Header";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/Map"), { ssr: false });
const CounrtryDetails = dynamic(() => import("../components/CountryDetails"), {
  ssr: false,
});
const SearchBar = dynamic(() => import("../components/SearchBar"), { ssr: false });

export default function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <div className="mt-4 grid grid-cols-1 grid-rows-1 sm:grid-cols-3">
        <Map />
        <CounrtryDetails />
      </div>
    </>
  );
}
