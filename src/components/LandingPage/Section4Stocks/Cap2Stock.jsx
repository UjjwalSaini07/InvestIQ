import React, { useState, useEffect, useRef } from "react"; 

const Cap2Stock = () => {
  const [companies, setCompanies] = useState([
    {
      name: "ICICI General Insurance",
      logo: "https://cdn.freelogovectors.net/svg07/icici_lombard_logo.svg",
      price: "2,535.80 INR",
      change: "+0.62%",
      changeColor: "#28a745",
    },
    {
      name: "Adani Energy Solutions",
      logo: "https://companieslogo.com/img/orig/ADANIENSOL.NS_BIG-2fc4ca22.png?t=1720244490",
      price: "3,215.55 INR",
      change: "-0.89%",
      changeColor: "#dc3545",
    },
    {
      name: "Rail Vikas Nigam",
      logo: "https://hblapis.cmots.com/complogodata/IImagesNew/RailVikasNigam_10861613_26721.png",
      price: "1,650.50 INR",
      change: "-0.24%",
      changeColor: "#dc3545",
    },
    {
      name: "Muthoot Finance",
      logo: "https://companieslogo.com/img/orig/MUTHOOTFIN.NS-276f7615.png?t=1720244493",
      price: "123.70 USD",
      change: "-4.10%",
      changeColor: "#dc3545",
    },
    {
      name: "Polycab India",
      logo: "https://assets-netstorage.groww.in/stock-assets/logos2/PolycabIndiaLtd_84608181_26603.png",
      price: "237.07 USD",
      change: "-0.45%",
      changeColor: "#dc3545",
    },
    {
      name: "Dixon Technologies",
      logo: "https://seeklogo.com/images/D/dixon-logo-6CC658978B-seeklogo.com.png",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "Marico Ltd",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Marico_Logo.svg/220px-Marico_Logo.svg.png",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "Solar Industries India",
      logo: "https://companieslogo.com/img/orig/SOLARINDS.NS_BIG-20a4867c.png?t=1720244494",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "Union Bank of India",
      logo: "https://companieslogo.com/img/orig/UNIONBANK.NS-5bba728d.png?t=1720244494",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "Jindal Steel And Power",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Jindal_Steel_and_Power_Logo.svg/2560px-Jindal_Steel_and_Power_Logo.svg.png",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "IDBI Bank",
      logo: "https://w7.pngwing.com/pngs/30/236/png-transparent-idbi-bank-logo-thumbnail-bank-logos.png",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "Canara Bank",
      logo: "https://companieslogo.com/img/orig/CANBK.NS-94324ae3.png?t=1720244491",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "Bosch Ltd",
      logo: "https://w7.pngwing.com/pngs/1006/243/png-transparent-logo-robert-bosch-gmbh-alternator-product-electric-battery-bosch-text-trademark-logo-thumbnail.png",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "JSW Energy Ltd",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/JSW_Group_logo.svg/1200px-JSW_Group_logo.svg.png",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "Oracle Financial Services",
      logo: "https://5.imimg.com/data5/UH/BN/MY-8220234/oracle-financial-services.png",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "Hero MotoCorp",
      logo: "https://www.pngfind.com/pngs/m/9-90489_hd-png-hero-motocorp-logo-transparent-png.png",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "SRF Ltd",
      logo: "https://companieslogo.com/img/orig/SRF.NS_BIG-edc8b6da.png?t=1720244494",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "Cummins India",
      logo: "https://logos-world.net/wp-content/uploads/2021/08/Cummins-Logo-1976-present.png",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "PB Fintech",
      logo: "https://companieslogo.com/img/orig/POLICYBZR.NS-f77c5a5d.png?t=1720244493",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "GMR Airports Ltd",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/GMR_Group_%28logo%29.svg/1200px-GMR_Group_%28logo%29.svg.png",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "NHPC Ltd",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/NHPC_Logo_PNG_File.png/640px-NHPC_Logo_PNG_File.png",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "Torrent Power Ltd",
      logo: "https://companieslogo.com/img/orig/TORNTPOWER.NS-7bfc1a00.png?t=1720244494",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "Colgate-Palmolive",
      logo: "https://companieslogo.com/img/orig/CL-a39d8cf4.png?t=1720244491",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "Indusind Bank Ltd",
      logo: "https://www.gupshup.io/resources/wp-content/uploads/2023/03/Group-38130.png?x96312",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "Hindustan Petroleum",
      logo: "https://companieslogo.com/img/orig/HINDPETRO.NS-6dfea446.png?t=1720244492",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
  ]);

  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    const scrollSpeed = -1; // Reverse the scrolling direction
  
    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft <= 0) {
          // Jump to the end once we've reached the start
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
        }
      }
      requestAnimationFrame(scroll);
    };
  
    const animation = requestAnimationFrame(scroll);
  
    return () => cancelAnimationFrame(animation);
  }, []);
  

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "25px" }}>
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          transition: "color 0.3s",
        }}
        onMouseEnter={(e) => e.target.style.color = '#0582e8'}
        onMouseLeave={(e) => e.target.style.color = '#fff'}
      >
        Mid Cap Stocks
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          fill="currentColor"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
          style={{ marginLeft: "6px", transition: "fill 0.3s" }}
          onMouseEnter={(e) => e.target.style.fill = '#0582e8'}
          onMouseLeave={(e) => e.target.style.fill = 'currentColor'}
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
          />
        </svg>
      </h2>

      <div
        ref={containerRef}
        style={{
          display: "flex",
          overflowX: "hidden",
          gap: "20px",
          padding: "10px 0",
          whiteSpace: "nowrap",
          borderRadius: "15px",
        }}
      >
        {/* Render the companies twice to create an infinite loop */}
        {[...companies, ...companies].map((company, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: "235px",
              maxHeight: '85%',
              borderRadius: "18px",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
              background: "rgba(255, 255, 255, 0.07)",
              padding: "12px",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0px 10px 20px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0px 5px 15px rgba(0, 0, 0, 0.2)";
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "5px",
              }}
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
              />
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                {company.name}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  color: "#fff",
                }}
              >
                {company.price}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: company.changeColor,
                }}
              >
                {company.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cap2Stock;
