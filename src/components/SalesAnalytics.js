import React from 'react';

const SalesAnalytics = () => {
    return (
        <div>
            <div className="salesAnalysis animate__bounceInRight animate__animated ">
          <div className="analysisBox">
            <div>
              <span class="material-icons-sharp iconPrimery">
                shopping_cart
              </span>
              <h3 className="analysisBoxTitle">Online shop</h3>
              <span className="positive">23%</span>
              <span>3849</span>
            </div>
            <small>last 24 Hours</small>
          </div>
        </div>

        <div className="salesAnalysis animate__bounceInRight animate__animated animate__delay-1s">
          <div className="analysisBox">
            <div>
              <span class="material-icons-sharp iconDanger">local_mall</span>
              <h3 className="analysisBoxTitle">Offline Orders</h3>
              <span className="negative">-17%</span>
              <span>1300</span>
            </div>
            <small>last 24 Hours</small>
          </div>
        </div>

        <div className="salesAnalysis animate__bounceInRight animate__animated animate__delay-2s">
          <div className="analysisBox">
            <div>
              <span class="material-icons-sharp iconSuccess">person</span>
              <h3 className="analysisBoxTitle">New customers</h3>
              <span className="positive">25%</span>
              <span>849</span>
            </div>
            <small>last 24 Hours</small>
          </div>
        </div>
        </div>
    );
};

export default SalesAnalytics;