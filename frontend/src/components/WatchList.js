import React ,{ useState ,useContext }from "react"
import GeneralContext from "./GeneralContext"
import { Tooltip,Grow } from "@mui/material"
import {KeyboardArrowDown ,KeyboardArrowUp , BarChartOutlined, MoreHoriz } from "@mui/icons-material"
import { watchlist } from "../data/data"
import { DoughnutChart } from "./DoughnutChart"

const labels = watchlist.map((subArray) => subArray["name"]);
const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(194, 21, 58, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 89, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(194, 21, 58,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(7, 64, 41 ,1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 0,
      },
    ],
  };
  

  return (
    <div className="watchlist-container" >
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">  {watchlist.length} / 50</span>
      </div>

      <ul className="list">
       {watchlist.map((stock,index)=>{
        return(
          <WatchListItem stock={stock} key={index}/>
        )

       })}
      </ul>  

      <DoughnutChart data={data} />
    </div>

//     <div className="watchlist-container container-fluid d-flex flex-column p-3 bg-light shadow rounded" style={{ width: "30%" }}>
//   {/* Search Bar */}
//   <div className="search-container d-flex align-items-center mb-3">
//     <input
//       type="text"
//       name="search"
//       id="search"
//       placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
//       className="form-control me-2"
//     />
//     <span className="counts badge bg-primary">{watchlist.length} / 50</span>
//   </div>

//   {/* Watchlist Items */}
//   <ul className="list-group">
//     {watchlist.map((stock, index) => (
//       <WatchListItem stock={stock} key={index} className="list-group-item" />
//     ))}
//   </ul>  
// </div>

  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
    // when it hover over the stock
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"} style={{fontSize:"1.1em",fontWeight:"400"}}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
      {/* only when the condition is true then the buttons will be displayed  */}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
