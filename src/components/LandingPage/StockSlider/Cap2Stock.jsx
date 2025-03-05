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


// ! Emergency Code: Static Data File inCase of Json Lost
// import React, { useState, useEffect, useRef } from "react";

// const Cap2Stock = () => {
//   const [companies, setCompanies] = useState([
//     {
//       name: "ICICI General Insurance",
//       logo: "https://cdn.freelogovectors.net/svg07/icici_lombard_logo.svg",
//       price: "2,535.80 INR",
//       change: "+0.62%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "Adani Energy Solutions",
//       logo: "https://companieslogo.com/img/orig/ADANIENSOL.NS_BIG-2fc4ca22.png?t=1720244490",
//       price: "3,215.55 INR",
//       change: "-0.89%",
//       changeColor: "#dc3545",
//     },
//     {
//       name: "Rail Vikas Nigam",
//       logo: "https://hblapis.cmots.com/complogodata/IImagesNew/RailVikasNigam_10861613_26721.png",
//       price: "1,650.50 INR",
//       change: "-0.24%",
//       changeColor: "#dc3545",
//     },
//     {
//       name: "Muthoot Finance",
//       logo: "https://companieslogo.com/img/orig/MUTHOOTFIN.NS-276f7615.png?t=1720244493",
//       price: "123.70 USD",
//       change: "-4.10%",
//       changeColor: "#dc3545",
//     },
//     {
//       name: "Polycab India",
//       logo: "https://assets-netstorage.groww.in/stock-assets/logos2/PolycabIndiaLtd_84608181_26603.png",
//       price: "237.07 USD",
//       change: "-0.45%",
//       changeColor: "#dc3545",
//     },
//     {
//       name: "Dixon Technologies",
//       logo: "https://seeklogo.com/images/D/dixon-logo-6CC658978B-seeklogo.com.png",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "Marico Ltd",
//       logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Marico_Logo.svg/220px-Marico_Logo.svg.png",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "Solar Industries India",
//       logo: "https://companieslogo.com/img/orig/SOLARINDS.NS_BIG-20a4867c.png?t=1720244494",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "Union Bank of India",
//       logo: "https://companieslogo.com/img/orig/UNIONBANK.NS-5bba728d.png?t=1720244494",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "Jindal Steel And Power",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Jindal_Steel_and_Power_Logo.svg/2560px-Jindal_Steel_and_Power_Logo.svg.png",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "IDBI Bank",
//       logo: "https://w7.pngwing.com/pngs/30/236/png-transparent-idbi-bank-logo-thumbnail-bank-logos.png",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "Canara Bank",
//       logo: "https://companieslogo.com/img/orig/CANBK.NS-94324ae3.png?t=1720244491",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "Bosch Ltd",
//       logo: "https://w7.pngwing.com/pngs/1006/243/png-transparent-logo-robert-bosch-gmbh-alternator-product-electric-battery-bosch-text-trademark-logo-thumbnail.png",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "JSW Energy Ltd",
//       logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/JSW_Group_logo.svg/1200px-JSW_Group_logo.svg.png",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "Oracle Financial Services",
//       logo: "https://5.imimg.com/data5/UH/BN/MY-8220234/oracle-financial-services.png",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "Hero MotoCorp",
//       logo: "https://www.pngfind.com/pngs/m/9-90489_hd-png-hero-motocorp-logo-transparent-png.png",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "SRF Ltd",
//       logo: "https://companieslogo.com/img/orig/SRF.NS_BIG-edc8b6da.png?t=1720244494",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "Cummins India",
//       logo: "https://logos-world.net/wp-content/uploads/2021/08/Cummins-Logo-1976-present.png",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "PB Fintech",
//       logo: "https://companieslogo.com/img/orig/POLICYBZR.NS-f77c5a5d.png?t=1720244493",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "GMR Airports Ltd",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/GMR_Group_%28logo%29.svg/1200px-GMR_Group_%28logo%29.svg.png",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "NHPC Ltd",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/NHPC_Logo_PNG_File.png/640px-NHPC_Logo_PNG_File.png",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "Torrent Power Ltd",
//       logo: "https://companieslogo.com/img/orig/TORNTPOWER.NS-7bfc1a00.png?t=1720244494",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "Colgate-Palmolive",
//       logo: "https://companieslogo.com/img/orig/CL-a39d8cf4.png?t=1720244491",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "Indusind Bank Ltd",
//       logo: "https://www.gupshup.io/resources/wp-content/uploads/2023/03/Group-38130.png?x96312",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//     {
//       name: "Hindustan Petroleum",
//       logo: "https://companieslogo.com/img/orig/HINDPETRO.NS-6dfea446.png?t=1720244492",
//       price: "1,388.75 INR",
//       change: "+1.05%",
//       changeColor: "#28a745",
//     },
//   ]);

//   const containerRef = useRef(null);

//   useEffect(() => {
//     const scrollContainer = containerRef.current;
//     const scrollSpeed = -1; // Reverse the scrolling direction

//     const scroll = () => {
//       if (scrollContainer) {
//         scrollContainer.scrollLeft += scrollSpeed;
//         if (scrollContainer.scrollLeft <= 0) {
//           // Jump to the end once we've reached the start
//           scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
//         }
//       }
//       requestAnimationFrame(scroll);
//     };

//     const animation = requestAnimationFrame(scroll);

//     return () => cancelAnimationFrame(animation);
//   }, []);

//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", padding: "25px" }}>
//       <h2
//         style={{
//           fontSize: "32px",
//           fontWeight: "bold",
//           marginBottom: "20px",
//           color: "#fff",
//           display: "flex",
//           alignItems: "center",
//           transition: "color 0.3s",
//         }}
//         onMouseEnter={(e) => e.target.style.color = '#0582e8'}
//         onMouseLeave={(e) => e.target.style.color = '#fff'}
//       >
//         Mid Cap Stocks
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="21"
//           height="21"
//           fill="currentColor"
//           class="bi bi-chevron-right"
//           viewBox="0 0 16 16"
//           style={{ marginLeft: "6px", transition: "fill 0.3s" }}
//           onMouseEnter={(e) => e.target.style.fill = '#0582e8'}
//           onMouseLeave={(e) => e.target.style.fill = 'currentColor'}
//         >
//           <path
//             fill-rule="evenodd"
//             d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
//           />
//         </svg>
//       </h2>

//       <div
//         ref={containerRef}
//         style={{
//           display: "flex",
//           overflowX: "hidden",
//           gap: "20px",
//           padding: "10px 0",
//           whiteSpace: "nowrap",
//           borderRadius: "15px",
//         }}
//       >
//         {/* Render the companies twice to create an infinite loop */}
//         {[...companies, ...companies].map((company, index) => (
//           <div
//             key={index}
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               minWidth: "235px",
//               maxHeight: '85%',
//               borderRadius: "18px",
//               boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
//               background: "rgba(255, 255, 255, 0.07)",
//               padding: "12px",
//               transition: "transform 0.3s, box-shadow 0.3s",
//               cursor: "pointer",
//               position: "relative",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "translateY(-5px)";
//               e.currentTarget.style.boxShadow =
//                 "0px 10px 20px rgba(0, 0, 0, 0.3)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "translateY(0)";
//               e.currentTarget.style.boxShadow =
//                 "0px 5px 15px rgba(0, 0, 0, 0.2)";
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "6px",
//                 marginBottom: "5px",
//               }}
//             >
//               <img
//                 src={company.logo}
//                 alt={`${company.name} logo`}
//                 style={{ width: "30px", height: "30px", objectFit: "contain" }}
//               />
//               <span
//                 style={{
//                   fontSize: "14px",
//                   fontWeight: "bold",
//                   color: "#fff",
//                   textAlign: "center",
//                 }}
//               >
//                 {company.name}
//               </span>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginTop: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   fontSize: "14px",
//                   color: "#fff",
//                 }}
//               >
//                 {company.price}
//               </div>
//               <div
//                 style={{
//                   fontSize: "14px",
//                   fontWeight: "bold",
//                   color: company.changeColor,
//                 }}
//               >
//                 {company.change}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cap2Stock;
