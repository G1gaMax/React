import React from "react";
import "./itemListContainer.css";
import mainLogo from "../NavBar/img/trolley.png";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Sometype+Mono&display=swap');
</style>

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="greeting">
      <img
        src={mainLogo}
        width="100"
        height="100"
        className="d-inline-block align-top"
        alt="ShopSmart Logo"
      />
      <h1>ShopSmart</h1>
      <h2>{greeting}</h2>
    </div>
  );
};
export default ItemListContainer;
