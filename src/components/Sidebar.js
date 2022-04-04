import React from "react";
import "../app.css";
import "./sidebar.css";
import profile1 from "../image/user1.jpeg";
import profile2 from "../image/user2.jpeg";
import profile3 from "../image/user3.jpeg";
import SalesAnalytics from "./SalesAnalytics";
const Sidebar = () => {
  return (
    <div className="secondSidebar">
      <div className="userProfile">
        <h3>
          <span>Hey,</span> Saman <br /> <span>Admin</span>
        </h3>
        <img src={profile3} alt="profile" className="profileImage" />
      </div>

      <div>
        <h2 className="recetnUpdateTitle">Recent updates</h2>
        <div className="recetnUpdateContainer animate__zoomIn animate__animated">
          <ul>
            <li>
              <div>
                <img src={profile1} alt="profile" className="profileImage" />
                <p className="text">
                  <span>Saman Rahmanian.</span>Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                  <br />
                  <small>2 Hours ago</small>
                </p>
              </div>
            </li>
            <li>
              <div>
                <img src={profile2} alt="profile" className="profileImage" />
                <p className="text">
                  <span>Saman Rahmanian.</span>Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                  <br />
                  <small>2 Hours ago</small>
                </p>
              </div>
            </li>
            <li>
              <div>
                <img src={profile3} alt="profile" className="profileImage" />
                <p className="text">
                  <span>Saman Rahmanian.</span>Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                  <br />
                  <small>2 Hours ago</small>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="salesAnalysisParent">
        <h2 className="salesAnalysisTitle">Sales Analysis</h2>
        <SalesAnalytics/>
      <button className="addProduct">
        <span class="material-icons-sharp">add</span>Add product
      </button>
      </div>
    </div>
  );
};

export default Sidebar;
