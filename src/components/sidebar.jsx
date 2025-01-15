import React, { useState } from "react";
import shade from '../assets/shade1.png'

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const styles = {
    sidebar: {
      width: isExpanded ? "215px" : "65px",
      height: "100vh",
      backgroundColor: "#343a40",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      borderRight: "1px solid #dee2e6",
      transition: "width 0.3s",
      overflow: "hidden",
    },
    header: {
      padding: "1rem",
      borderBottom: "1px solid #dee2e6",
      fontSize: "1.25rem",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: isExpanded ? "center" : "flex-start",
      gap: "0.5rem",
      transition: "justify-content 0.3s",
    },
    logo: {
      fontSize: "1.2rem",
      backgroundColor: "#fff",
      color: "#343a40",
      borderRadius: "50%",
      width: "2rem",
      height: "2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    nav: {
      listStyle: "none",
      padding: "0",
      margin: "0",
      flex: "1",
    },
    navItem: {
      padding: "0.75rem 1rem",
      display: "flex",
      alignItems: "center",
      color: "#fff",
      textDecoration: "none",
      transition: "background-color 0.3s, padding 0.3s",
    },
    navItemHover: {
      backgroundColor: "#495057",
    },
    navIcon: {
      fontSize: "1.5rem",
      marginRight: isExpanded ? "0.75rem" : "0",
      transition: "margin-right 0.3s",
    },
    navText: {
      display: isExpanded ? "inline" : "none",
      transition: "display 0.3s",
    },
    footer: {
      marginTop: "auto",
      padding: "1rem",
      display: "flex",
      alignItems: "center",
      borderTop: "1px solid #dee2e6",
    },
    footerImage: {
      width: "2rem",
      height: "2rem",
      borderRadius: "50%",
      marginRight: "0.5rem",
    },
    footerText: {
      display: isExpanded ? "inline" : "none",
      color: "#fff",
      fontSize: "1rem",
      transition: "display 0.3s",
    },
    footerDropdown: {
      marginLeft: "auto",
      display: isExpanded ? "inline" : "none",
    },
  };

  return (
    <div
      style={styles.sidebar}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div style={styles.header}>
        <div style={styles.logo}>IQ</div>
        {isExpanded && "InvestIQ"}
      </div>
      <ul style={styles.nav}>
        <li>
          <a style={styles.navItem} href="#">
            <i className="bi bi-house" style={styles.navIcon}></i>
            <span style={styles.navText}>Home</span>
          </a>
        </li>
        <li>
          <a style={styles.navItem} href="#">
            <i className="bi bi-file-earmark-diff" style={styles.navIcon}></i>
            <span style={styles.navText}>Compare</span>
          </a>
        </li>
        <li>
          <a style={styles.navItem} href="#">
            <i className="bi bi-bookmarks-fill" style={styles.navIcon}></i>
            <span style={styles.navText}>Watchlist</span>
          </a>
        </li>
        <li>
          <a style={styles.navItem} href="#">
            <i className="bi bi-speedometer2" style={styles.navIcon}></i>
            <span style={styles.navText}>Dashboard</span>
          </a>
        </li>
        <li>
          <a style={styles.navItem} href="#">
            <i className="bi bi-file-person-fill" style={styles.navIcon}></i>
            <span style={styles.navText}>About</span>
          </a>
        </li>
        <li>
          <a style={styles.navItem} href="#">
            <i className="bi bi-person-lines-fill" style={styles.navIcon}></i>
            <span style={styles.navText}>Contact</span>
          </a>
        </li>
      </ul>
      <div style={styles.footer}>
        <img
          src={shade}
          alt="User"
          style={styles.footerImage}
        />
        <span style={styles.footerText}>UserName1</span>
        <i className="bi bi-chevron-down" style={styles.footerDropdown}></i>
      </div>
    </div>
  );
};

export default Sidebar;
