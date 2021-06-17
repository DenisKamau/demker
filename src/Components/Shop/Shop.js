import React from "react";
import "./Shop.css";
import StorefrontIcon from "@material-ui/icons/Storefront";
import products from "../../Data";
import Card from "../Card/Card";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop__title">
        <h1>Shop</h1>
        <StorefrontIcon style={{ marginTop: "4px" }} />
      </div>
      <div className="shop__items">
        {products.map((product) => {
          const { id, name, image } = product;
          return <Card key={id} image={image} title={name} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
