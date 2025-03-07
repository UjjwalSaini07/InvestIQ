import React, { useState, useEffect, useRef } from "react";
import StockJson from "../../webScrappedData/StocksData.json";

const Cap2Stock = () => {
  const [companies, setCompanies] = useState([
    {
      name: "ICICI General Insurance",
      ticker: "ICICIGI",
      logo: "https://cdn.freelogovectors.net/svg07/icici_lombard_logo.svg",
    },
    {
      name: "Adani Energy Solutions",
      ticker: "ADANIENSOL",
      logo: "https://companieslogo.com/img/orig/ADANIENSOL.NS_BIG-2fc4ca22.png?t=1720244490",
    },
    {
      name: "Rail Vikas Nigam",
      ticker: "RVNL",
      logo: "https://hblapis.cmots.com/complogodata/IImagesNew/RailVikasNigam_10861613_26721.png",
    },
    {
      name: "Muthoot Finance",
      ticker: "MUTHOOTFIN",
      logo: "https://companieslogo.com/img/orig/MUTHOOTFIN.NS-276f7615.png?t=1720244493",
    },
    {
      name: "Polycab India",
      ticker: "POLYCAB",
      logo: "https://assets-netstorage.groww.in/stock-assets/logos2/PolycabIndiaLtd_84608181_26603.png",
    },
    {
      name: "Dixon Technologies",
      ticker: "DIXON",
      logo: "https://seeklogo.com/images/D/dixon-logo-6CC658978B-seeklogo.com.png",
    },
    {
      name: "Marico Ltd",
      ticker: "MARICO",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Marico_Logo.svg/220px-Marico_Logo.svg.png",
    },
    {
      name: "Solar Industries India",
      ticker: "SOLARINDS",
      logo: "https://companieslogo.com/img/orig/SOLARINDS.NS_BIG-20a4867c.png?t=1720244494",
    },
    {
      name: "Union Bank of India",
      ticker: "UNIONBANK",
      logo: "https://companieslogo.com/img/orig/UNIONBANK.NS-5bba728d.png?t=1720244494",
    },
    {
      name: "Jindal Steel And Power",
      ticker: "JINDALSTEL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Jindal_Steel_and_Power_Logo.svg/2560px-Jindal_Steel_and_Power_Logo.svg.png",
    },
    {
      name: "IDBI Bank",
      ticker: "IDBI",
      logo: "https://w7.pngwing.com/pngs/30/236/png-transparent-idbi-bank-logo-thumbnail-bank-logos.png",
    },
    {
      name: "Canara Bank",
      ticker: "CANBK",
      logo: "https://companieslogo.com/img/orig/CANBK.NS-94324ae3.png?t=1720244491",
    },
    {
      name: "Bosch Ltd",
      ticker: "BOSCHLTD",
      logo: "https://w7.pngwing.com/pngs/1006/243/png-transparent-logo-robert-bosch-gmbh-alternator-product-electric-battery-bosch-text-trademark-logo-thumbnail.png",
    },
    {
      name: "JSW Energy Ltd",
      ticker: "JSWENERGY",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/JSW_Group_logo.svg/1200px-JSW_Group_logo.svg.png",
    },
    {
      name: "Oracle Financial Services",
      ticker: "OFSS",
      logo: "https://5.imimg.com/data5/UH/BN/MY-8220234/oracle-financial-services.png",
    },
    {
      name: "Hero MotoCorp",
      ticker: "HEROMOTOCO",
      logo: "https://www.pngfind.com/pngs/m/9-90489_hd-png-hero-motocorp-logo-transparent-png.png",
    },
    {
      name: "SRF Ltd",
      ticker: "SRF",
      logo: "https://companieslogo.com/img/orig/SRF.NS_BIG-edc8b6da.png?t=1720244494",
    },
    {
      name: "Cummins India",
      ticker: "CUMMINSIND",
      logo: "https://logos-world.net/wp-content/uploads/2021/08/Cummins-Logo-1976-present.png",
    },
    {
      name: "PB Fintech",
      ticker: "POLICYBZR",
      logo: "https://companieslogo.com/img/orig/POLICYBZR.NS-f77c5a5d.png?t=1720244493",
    },
    {
      name: "GMR Airports Ltd",
      ticker: "GMRAIRPORT",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/GMR_Group_%28logo%29.svg/1200px-GMR_Group_%28logo%29.svg.png",
    },
    {
      name: "NHPC Ltd",
      ticker: "NHPC",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/NHPC_Logo_PNG_File.png/640px-NHPC_Logo_PNG_File.png",
    },
    {
      name: "Torrent Power Ltd",
      ticker: "TORNTPOWER",
      logo: "https://companieslogo.com/img/orig/TORNTPOWER.NS-7bfc1a00.png?t=1720244494",
    },
    {
      name: "Indusind Bank Ltd",
      ticker: "INDUSINDBK",
      logo: "https://www.gupshup.io/resources/wp-content/uploads/2023/03/Group-38130.png?x96312",
    },
    {
      name: "Hindustan Petroleum",
      ticker: "HINDPETRO",
      logo: "https://companieslogo.com/img/orig/HINDPETRO.NS-6dfea446.png?t=1720244492",
    },
  ]);

  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(false);

  const getStocks = async () => {
    setLoading(true);
    try {
      setStock(StockJson.StockData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStocks();
  }, []);

  useEffect(() => {
    const updatedCompanies = companies.map((company) => {
      const matchedStock = stock.find((s) => s.ticker === company.ticker);
      if (matchedStock) {
        const percentageChange = (
          ((matchedStock.current_price - matchedStock.previous_close) /
            matchedStock.previous_close) *
          100
        ).toFixed(2);

        return {
          ...company,
          price: matchedStock.current_price,
          change: `${percentageChange}%`,
          changeColor: percentageChange > 0 ? "text-green-500" : "text-red-500",
        };
      }
      return company;
    });
    setCompanies(updatedCompanies);
  }, [stock]);

  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    const scrollSpeed = -1; // Reverse the scrolling direction

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
        }
      }
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="font-sans p-6 text-white">
      <h2 className="text-3xl font-bold mb-5 flex items-center transition-colors duration-300 hover:text-blue-500">
        Mid Cap Stocks
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          fill="currentColor"
          className="ml-2 transition-colors duration-300 hover:fill-blue-500"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
          />
        </svg>
      </h2>

      <div
        ref={containerRef}
        className="flex overflow-hidden gap-5 py-2 whitespace-nowrap rounded-2xl"
      >
        {[...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className="flex flex-col min-w-[235px] max-h-full rounded-2xl shadow-lg bg-white bg-opacity-10 p-3 bg-[#FFFFFF12] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-2">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-8 h-8 object-contain"
              />
              <span className="text-sm font-bold text-center">
                {company.name}
              </span>
            </div>
            <div className="flex justify-between mt-2">
              <div className="text-sm font-semibold">
                {company.price ? `₹ ${company.price}` : "N/A"}
              </div>
              <div className={`text-sm font-bold ${company.changeColor}`}>
                {company.change ? company.change : "N/A"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cap2Stock;
