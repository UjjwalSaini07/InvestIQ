import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Cap1Stock = () => {
  const [companies, setCompanies] = useState([
    {
      name: "Reliance Industries",
      ticker: "RELIANCE",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsOc0_P4Ll-ExcqUit4R0aLHcto-3hbsoPWw&s",
    },
    {
      name: "Tata Consultancy Services",
      ticker: "TCS",
      logo: "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1720244494",
    },
    {
      name: "HDFC Bank",
      ticker: "HDFC",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNoQMLUXxpQbDeMQ_RUh-jjYxMqRR0xqfC-g&s",
    },
    {
      name: "Bharti Airtel",
      ticker: "BHARTIARTL",
      logo: "https://w1.pngwing.com/pngs/751/393/png-transparent-india-business-bharti-airtel-logo-mobile-phones-quiz-directtohome-television-in-india-mobile-service-provider-company-airtel-tanzania-thumbnail.png",
    },
    {
      name: "ICICI Bank",
      ticker: "ICICIBANK",
      logo: "https://w1.pngwing.com/pngs/670/83/png-transparent-india-design-icici-bank-icici-bank-canada-mobile-banking-privatesector-banks-in-india-finance-icici-prudential-mutual-fund-recurring-deposit.png",
    },
    {
      name: "Infosys",
      logo: "https://w7.pngwing.com/pngs/563/912/png-transparent-infosys-technologies-hd-logo.png",
      ticker: "INFY",
    },
    {
      name: "State Bank of India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg",
      ticker: "SBIN",
    },
    {
      name: "Hindustan Unilever",
      logo: "https://e7.pngegg.com/pngimages/716/500/png-clipart-unilever-logo-brand-personal-care-company-hindustan-miscellaneous-text.png",
      ticker: "HINDUNILVR",
    },
    {
      name: "ITC Ltd",
      logo: "https://w7.pngwing.com/pngs/40/945/png-transparent-itc-limited-company-business-conglomerate-business-thumbnail.png",
      ticker: "ITC",
    },
    {
      name: "Life Insurance Corporation",
      logo: "https://w7.pngwing.com/pngs/246/242/png-transparent-blue-hands-logo-life-insurance-corporation-lic-jeevan-lakshya-lic-housing-finance-others-miscellaneous-text-investment-thumbnail.png",
      ticker: "LICI",
    },
    {
      name: "Bajaj Finance",
      logo: "https://w7.pngwing.com/pngs/887/91/png-transparent-bajaj-auto-bajaj-finserv-ltd-mortgage-loan-finance-finance-blue-company-text.png",
      ticker: "BAJFINANCE",
    },
    {
      name: "Larsen and Toubro",
      logo: "https://e7.pngegg.com/pngimages/604/618/png-clipart-larsen-toubro-limited-mmh-architectural-engineering-business-l-t-hydrocarbon-engineering-business-blue-text-thumbnail.png",
      ticker: "LT",
    },
    {
      name: "HCL Technologies",
      logo: "https://e7.pngegg.com/pngimages/490/686/png-clipart-hcl-technologies-logo-company-information-technology-technology-blue-angle.png",
      ticker: "HCLTECH",
    },
    {
      name: "Sun Pharmaceutical",
      logo: "https://e7.pngegg.com/pngimages/734/292/png-clipart-sun-pharmaceutical-bangladesh-limited-pharmaceutical-industry-logo-company-deesawat-industries-company-limited-company-orange.png",
      ticker: "SUNPHARMA",
    },
    {
      name: "Kotak Mahindra Bank",
      logo: "https://companieslogo.com/img/orig/KOTAKBANK.NS-36440c5e.png?t=1720244492",
      ticker: "KOTAKBANK",
    },
    {
      name: "Maruti Suzuki India",
      logo: "https://w7.pngwing.com/pngs/215/94/png-transparent-suzuki-carry-suzuki-carry-honda-logo-suzuki-jimny-suzuki-angle-logo-car-thumbnail.png",
      ticker: "MARUTI",
    },
    {
      name: "Mahindra and Mahindra",
      logo: "https://w7.pngwing.com/pngs/547/351/png-transparent-mahindra-mahindra-car-logo-automotive-industry-tractor-lincoln-motor-company-company-text-trademark.png",
      ticker: "M&M",
    },
    {
      name: "UltraTech Cement",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKwuIE6dRC6k_tm36OvuBB2nAITW4Xk4mgg&s",
      ticker: "ULTRACEMCO",
    },
    {
      name: "Wipro Ltd",
      logo: "https://i.pinimg.com/736x/16/f8/7a/16f87a2a909a06634e61d63d57e79bb0.jpg",
      ticker: "WIPRO",
    },
    {
      name: "ONGC Ltd",
      logo: "https://e7.pngegg.com/pngimages/626/110/png-clipart-oil-and-natural-gas-corporation-indian-oil-corporation-logo-business-india-text-rectangle-thumbnail.png",
      ticker: "ONGC",
    },
    {
      name: "NTPC Ltd",
      logo: "https://www.m1xchange.com/wp-content/uploads/2023/10/NTPC-logos.png",
      ticker: "NTPC",
    },
    {
      name: "Axis Bank",
      logo: "https://w7.pngwing.com/pngs/509/329/png-transparent-axis-bank-connaught-place-new-delhi-security-business-bank-purple-angle-violet-thumbnail.png",
      ticker: "AXISBANK",
    },
    {
      name: "Titan Company",
      logo: "https://toppng.com/uploads/preview/titan-vector-logo-download-free-11574029507aj7fv0mril.png",
      ticker: "TITAN",
    },
    {
      name: "Tata Motors Ltd",
      logo: "https://e7.pngegg.com/pngimages/423/40/png-clipart-tata-motors-european-technical-centre-car-tata-group-tata-steel-car-blue-company.png",
      ticker: "TATAMOTORS",
    },
    {
      name: "Adani Enterprises Ltd",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Adani_logo_2012.svg/1200px-Adani_logo_2012.svg.png",
      ticker: "ADANIENT",
    },
  ]);

  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getStocks = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/v1/fetchStocksData');
      setStocks(response.data);
    } catch (error) {
        console.error("Error fetching stocks:", error.message);
        setError("Failed to fetch stocks data. Please try again later...");
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    getStocks();
  }, []);

  useEffect(() => {
    const updatedCompanies = companies.map((company) => {
      const matchedStock = stocks.find((s) => s.ticker === company.ticker);
      if (matchedStock) {
        const percentageChange = (
          ((matchedStock.current_price - matchedStock.previous_close) / matchedStock.previous_close) *
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
  }, [stocks]);

  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    const scrollSpeed = 1;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth / 2
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="font-sans p-6 text-white">
      <h2
        className="text-3xl font-bold mb-5 flex items-center transition-colors duration-300 hover:text-blue-500"
      >
        Large Cap Stocks
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
              <span className="text-sm font-bold text-center">{company.name}</span>
            </div>
            <div className="flex justify-between mt-2">
              <div className="text-sm font-semibold">{company.price ? `₹ ${company.price}` : "N/A"}</div>
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

export default Cap1Stock;
