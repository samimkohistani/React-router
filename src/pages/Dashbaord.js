import React from "react";
import { Link } from 'react-router-dom'

const Dashboard = (props) => {
  const stockList = props.stockData.stocks.map((stock, index) => {
    const { name, symbol } = stock;

    return (
      <Link key={index} to={`/stocks/${symbol}`}>
        <h2>{name}</h2>
      </Link>
    );
  })

  return (
    <div className="dashboardContainer">
      <h1>This is the Dashboard Component</h1>
      {stockList}
    </div>
  )
};

export default Dashboard;