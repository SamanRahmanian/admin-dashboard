import React, { useEffect } from "react";
import { Link, Switch, Route, useLocation } from "react-router-dom";
import "../app.css";
import "./menu.css";
import logo from "../image/logo.png";
const Manu = (props) => {
  let location = useLocation();

  useEffect(() => {
    if (document.querySelector("body").classList.contains("darkTheme")) {
      dark();
    }
  }, [location]);

  const MenuHandeler = (e) => {
    document.querySelectorAll(".item").forEach((element) => {
      if (element.classList.contains("active")) {
        element.classList.remove("active");
      }
    });
    e.target.parentElement.parentElement.classList.add("active");
    if (window.innerWidth < 1770) {
      closeMenuHandeler();
    }
  };

  const darkMode = (e) => {
    switch (e.target.textContent) {
      case "Dark mode":
        e.target.textContent = "Light mode";
        dark();
        break;
      case "Light mode":
        e.target.textContent = "Dark mode";
        light();
        break;
    }
  };

  const dark = () => {
    document.querySelector("body").classList.add("darkTheme");
    document.querySelector("aside").style.backgroundColor = "#333535";
    switch (location.pathname) {
      case "/":
        document.querySelectorAll(".boxDetail").forEach((element) => {
          element.style.boxShadow = "0 2rem 3rem rgba(0, 0, 0, 0.486)";
        });
        document.querySelector(".recentOrder").style.boxShadow =
          "0 2rem 3rem rgba(0, 0, 0, 0.486)";
        document.querySelector(".recetnUpdateContainer").style.boxShadow =
          "0 2rem 3rem rgba(0, 0, 0, 0.486)";
        document.querySelectorAll(".analysisBox").forEach((element) => {
          element.style.boxShadow = "0 2rem 3rem rgba(0, 0, 0, 0.486)";
        });
        break;
      case "/orders":
        document.querySelector(".recentOrder").style.boxShadow =
          "0 2rem 3rem rgba(0, 0, 0, 0.486)";
        break;
    }
  };

  const light = () => {
    document.querySelector("body").classList.remove("darkTheme");
    document.querySelector("aside").style.backgroundColor = "#f6f6f9";

    switch (location.pathname) {
      case "/":
        document.querySelectorAll(".boxDetail").forEach((element) => {
          element.style.boxShadow = "0 2rem 3rem rgb(132, 139,200 , 0.18)";
        });
        document.querySelector(".recentOrder").style.boxShadow =
          "0 2rem 3rem rgb(132, 139,200 , 0.18)";
        document.querySelector(".recetnUpdateContainer").style.boxShadow =
          "0 2rem 3rem rgb(132, 139,200 , 0.18)";
        document.querySelectorAll(".analysisBox").forEach((element) => {
          element.style.boxShadow = "0 2rem 3rem rgb(132, 139,200 , 0.18)";
        });
        break;
      case "/orders":
        document.querySelector(".recentOrder").style.boxShadow =
          "0 2rem 3rem rgb(132, 139,200 , 0.18)";
        break;
      default:
        break;
    }
  };

  const menuBtnHandeler = () => {
    document.querySelector("aside").style.display = "block";
    document.querySelector(".closeMenuBtn").style.display = "block";
    document.querySelector("aside").classList.add("showMenu");
    document.querySelector("aside").style.boxShadow = "0 10px 10px #999";
    if (document.querySelector("body").classList.contains("darkTheme")) {
      document.querySelector("aside").style.backgroundColor = "#333535";
    } else {
      document.querySelector("aside").style.backgroundColor = "#f6f6f9";
    }
  };

  const closeMenuHandeler = () => {
    document.querySelector("aside").style.display = "none";
  };

  return (
    <>
      <button className="menuBtn" onClick={menuBtnHandeler}>
        <span class="material-icons-sharp">menu</span>
      </button>
      <aside>
        <div className="top">
          <div className="logo">
            <img src={logo} alt="logo" className="imageLogo" />
            <h2>
              L<span>ogo</span>
            </h2>
            <button className="darkMode" onClick={darkMode}>
              Dark mode
            </button>
            <button className="closeMenuBtn" onClick={closeMenuHandeler}>
              <span class="material-icons-sharp">close</span>
            </button>
          </div>
          <div className="close" id="close-btn">
            <span class="material-icons-sharp">close</span>
          </div>
        </div>
        <div className="sidebarItems">
          <ul>
            <li className="item animate__flipInX animate__animated active">
              <Link to="/" onClick={MenuHandeler}>
                <span class="material-icons-sharp">dashboard</span>
                <h3>Dashboard</h3>
              </Link>
            </li>
            <li className="item animate__flipInX animate__animated">
              <Link to="/customers" onClick={MenuHandeler}>
                <span class="material-icons-sharp">person_outline</span>
                <h3>Customers</h3>
              </Link>
            </li>
            <li className="item animate__flipInX animate__animated">
              <Link to="/orders" onClick={MenuHandeler}>
                <span class="material-icons-sharp">receipt_long</span>
                <h3>Orders</h3>
              </Link>
            </li>
            <li className="item animate__flipInX animate__animated">
              <Link to="/analytics" onClick={MenuHandeler}>
                <span class="material-icons-sharp">insights</span>
                <h3>Analytics</h3>
              </Link>
            </li>
            <li className="item animate__flipInX animate__animated">
              <Link to="/messages" onClick={MenuHandeler}>
                <span class="material-icons-sharp">mail_outline</span>
                <h3>Messages</h3>
                <span className="counterOfMessage">29</span>
              </Link>
            </li>
            <li className="item animate__flipInX animate__animated">
              <Link to="/products" onClick={MenuHandeler}>
                <span class="material-icons-sharp">inventory</span>
                <h3>Products</h3>
              </Link>
            </li>
            <li className="item animate__flipInX animate__animated">
              <Link to="/reports" onClick={MenuHandeler}>
                <span class="material-icons-sharp">report_gmailerrorred</span>
                <h3>Reports</h3>
              </Link>
            </li>
            <li className="item animate__flipInX animate__animated">
              <Link to="/settings" onClick={MenuHandeler}>
                <span class="material-icons-sharp">settings</span>
                <h3>Settings</h3>
              </Link>
            </li>
            <li className="item animate__flipInX animate__animated">
              <Link to="/add-products" onClick={MenuHandeler}>
                <span class="material-icons-sharp">add</span>
                <h3>Add products</h3>
              </Link>
            </li>
            <li className="item animate__flipInX animate__animated">
              <Link to="/logout" onClick={MenuHandeler}>
                <span class="material-icons-sharp">logout</span>
                <h3>Logout</h3>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Manu;
