import React from "react";

export const DashBoardTable = () => {
  return (
    <div className="dash-main">
      <div className="heading">
        <h2>Latest Orders</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Products</th>
            <th>Gender</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="product-container">
          {/* Show the CountriesRow here  */}
        </tbody>
      </table>
    </div>
  );
};
