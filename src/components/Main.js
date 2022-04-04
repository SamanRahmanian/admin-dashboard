import React from "react";
import "./main.css";
import "../app.css";
import RecentOrders from "./RecentOrders";
const Main = () => {
  return (
    <main>
      <h2 className="title">Dashboard</h2>

      <div className="insighst">
        <div className="boxDetail animate__animated animate__bounceInLeft">
          <div className="content">
            <span class="material-icons-sharp">analytics</span>
            <h4 className="title">Total sales</h4>
            <h2 className="amount">$25,024</h2>
            <small className="time">Last 24 Hours</small>
          </div>
          <div className="progres">
            <svg>
              <circle cx="38" cy="38" r="36"></circle>
            </svg>
            <span className="percentage">81%</span>
          </div>
        </div>

        <div className="boxDetail animate__animated animate__bounceInLeft animate__delay-1s">
          <div className="content">
            <span class="material-icons-sharp danger">leaderboard</span>
            <h4 className="title">Total sales</h4>
            <h2 className="amount">$25,024</h2>
            <small className="time">Last 24 Hours</small>
          </div>
          <div className="progres">
            <svg>
              <circle cx="38" cy="38" r="36"></circle>
            </svg>
            <span className="percentage">60%</span>
          </div>
        </div>

        <div className="boxDetail animate__animated animate__bounceInLeft animate__delay-2s">
          <div className="content">
            <span class="material-icons-sharp success">stacked_line_chart</span>
            <h4 className="title">Total sales</h4>
            <h2 className="amount">$25,024</h2>
            <small className="time">Last 24 Hours</small>
          </div>
          <div className="progres">
            <svg>
              <circle cx="38" cy="38" r="36"></circle>
            </svg>
            <span className="percentage">91%</span>
          </div>
        </div>
      </div>

      <RecentOrders />
    </main>
  );
};

export default Main;
