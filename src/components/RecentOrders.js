import React from "react";
import "./main.css";
const RecentOrders = () => {
  return (
    <div>
      <h2 className="recentOrderTitle">Recent Orders</h2>
      <table className="recentOrder animate__zoomIn animate__animated">
        <tr className="tableRow">
          <th className="tableHeader">Product name</th>
          <th className="tableHeader">Product number</th>
          <th className="tableHeader">Payment</th>
          <th className="tableHeader">Status</th>
          <th className="tableHeader">Other</th>
        </tr>
        <tr className="tableRow">
          <td className="tableColumn">HTML course</td>
          <td className="tableColumn">854412</td>
          <td className="tableColumn due">Due</td>
          <td className="tableColumn pending">Pending</td>
          <td className="tableColumn details">Details</td>
        </tr>
        <tr className="tableRow">
          <td className="tableColumn">CSS course</td>
          <td className="tableColumn">125685</td>
          <td className="tableColumn paid">Paid</td>
          <td className="tableColumn delivered">Delivered</td>
          <td className="tableColumn details">Details</td>
        </tr>
        <tr className="tableRow">
          <td className="tableColumn">SASS course</td>
          <td className="tableColumn">849752</td>
          <td className="tableColumn paid">Paid</td>
          <td className="tableColumn delivered">Delivered</td>
          <td className="tableColumn details">Details</td>
        </tr>
        <tr className="tableRow">
          <td className="tableColumn">ReactJS course</td>
          <td className="tableColumn">125300</td>
          <td className="tableColumn refunded">Refunded</td>
          <td className="tableColumn declined">Declined</td>
          <td className="tableColumn details">Details</td>
        </tr>
        <tr className="tableRow">
          <td className="tableColumn">Python course</td>
          <td className="tableColumn">150005</td>
          <td className="tableColumn due">Due</td>
          <td className="tableColumn pending">Pending</td>
          <td className="tableColumn details">Details</td>
        </tr>
        <tr className="tableRow">
          <td className="tableColumn">Javascript course</td>
          <td className="tableColumn">894656</td>
          <td className="tableColumn due">Due</td>
          <td className="tableColumn pending">Pending</td>
          <td className="tableColumn details">Details</td>
        </tr>
        <tr className="tableRow">
          <td className="tableColumn">Git course</td>
          <td className="tableColumn">785991</td>
          <td className="tableColumn paid">Paid</td>
          <td className="tableColumn delivered">Delivered</td>
          <td className="tableColumn details">Details</td>
        </tr>
      </table>
    </div>
  );
};

export default RecentOrders;
