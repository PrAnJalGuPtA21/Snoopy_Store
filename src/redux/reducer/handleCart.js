const cart = [];
const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      //first check for the item to be present already in the cart
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        //Increasing the quantity if already present ....
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;
    case "DELITEM":
      const existing = state.find((x) => x.id === product.id);
      if (existing.qty === 1) {
        return state.filter((x) => x.id !== existing.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    default:
      return state;
      break;
  }
};

export default handleCart;
