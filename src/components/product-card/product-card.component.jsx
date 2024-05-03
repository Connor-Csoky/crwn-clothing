import { useContext } from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { CartContext } from "../../contexts/cart.context";
import { Footer, ProductCartContainer } from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button
        onClick={() => addItemToCart(product)}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
