import React, { useState, useEffect, useRef } from "react"; 

const LargestCompanies = () => {
  const [companies, setCompanies] = useState([
    {
      name: "Apple Inc.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      price: "239.36 USD",
      change: "+0.46%",
      changeColor: "#28a745",
    },
    {
      name: "Microsoft Corporation",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      price: "442.33 USD",
      change: "-1.09%",
      changeColor: "#dc3545",
    },
    {
      name: "NVIDIA Corporation",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
      price: "123.70 USD",
      change: "-4.10%",
      changeColor: "#dc3545",
    },
    {
      name: "Amazon.com, Inc.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      price: "237.07 USD",
      change: "-0.45%",
      changeColor: "#dc3545",
    },
    {
      name: "Reliance Industries",
      logo: "https://www.newsonprojects.com/uploads/news/083737.jpg",
      price: "2,535.80 INR",
      change: "+0.62%",
      changeColor: "#28a745",
    },
    {
      name: "Tata Consultancy Services",
      logo: "https://www.siegelgale.com/app/uploads/2021/10/SGCOM_Blog_211018.png",
      price: "3,215.55 INR",
      change: "-0.89%",
      changeColor: "#dc3545",
    },
    {
      name: "Infosys",
      logo: "https://yt3.googleusercontent.com/Niu-EMqd0HeQ4c5_rRDICMsh_WAV-vf0Z1WGWY3Smb8r4Cef90bbTY7O8QaOcZ7z9N04P20Q=s900-c-k-c0x00ffffff-no-rj",
      price: "1,388.75 INR",
      change: "+1.05%",
      changeColor: "#28a745",
    },
    {
      name: "HDFC Bank",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNoQMLUXxpQbDeMQ_RUh-jjYxMqRR0xqfC-g&s",
      price: "1,650.50 INR",
      change: "-0.24%",
      changeColor: "#dc3545",
    },
  ]);

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
          // Jump to the start once we've scrolled through half the total content
          scrollContainer.scrollLeft = 0;
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
        onMouseEnter={(e) => e.target.style.color = 'blue'}
        onMouseLeave={(e) => e.target.style.color = '#fff'}
      >
        Largest Companies
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          fill="currentColor"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
          style={{ marginLeft: "6px", transition: "fill 0.3s" }}
          onMouseEnter={(e) => e.target.style.fill = 'blue'}
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
              minWidth: "240px",
              maxHeight: '90%',
              borderRadius: "20px",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
              background: "rgba(255, 255, 255, 0.95)",
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
                  color: "#333",
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
                  color: "#555",
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

export default LargestCompanies;
