// export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/': '';
export const BASE_URL = "";
export const PRODUCTS_URL = "/api/products";
export const PRODUCTDETAILS_URL = "/api/products/";
export const USERS_URL = "/api/users";
export const ORDERS_URL = "/api/orders";
export const PAYPAL_URL = "/api/config/paypal";
export const UPLOAD_URL = "/api/upload";

export const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  state.itemPrice = addDecimal(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  state.shippingPrice = addDecimal(state.itemPrice > 100 ? 0 : 10);

  state.taxPrice = addDecimal(Number(0.18 * state.itemPrice).toFixed(2));

  state.totalPrice = (
    Number(state.itemPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));
};
