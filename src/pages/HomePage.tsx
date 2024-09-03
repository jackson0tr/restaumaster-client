import landingImage from "../assets/pic2.webp";
import appDownloadImage from "../assets/appDownload.webp";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Home RestauMaster</title>
        <meta
          name="description"
          content="Welcome to RestauMaster Food Ordering Website. Let's know about RestauMaster Click for more..."
        />
        <link rel="canonical" href='https://restaumaster.vercel.app' />
      </Helmet>
      <div className="flex flex-col gap-12">
        <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
          <h1 className="text-3xl font-semibold tracking-tight text-[#2C7A7B]">
            Tuck into a takeway today
          </h1>
          <span className="text-xl">Food is just a click away!</span>
          <SearchBar
            placeHolder="Search by City or Town"
            onSubmit={handleSearchSubmit}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <img loading="lazy" alt="img" src={landingImage} />
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className="font-semibold text-2xl tracking-tighter">
              Order takeaway even faster!
            </span>
            <span>
              Download the RestauMaster App for faster ordering and personalised
              recommendations
            </span>
            <img loading="lazy" alt="img" src={appDownloadImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
