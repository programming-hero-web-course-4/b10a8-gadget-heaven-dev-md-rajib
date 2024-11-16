const saveCartData = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const retrieveCartData = () => {
  const res = localStorage.getItem("cart");
  if (res) {
    return JSON.parse(res);
  } else {
    return [];
  }
};

const saveWishListData = (data) => {
  localStorage.setItem("wishlist", JSON.stringify(data));
};

const retrieveWishListData = () => {
  const res = localStorage.getItem("wishlist");
  if (res) {
    return JSON.parse(res);
  } else {
    return [];
  }
};

export {
  saveCartData,
  retrieveCartData,
  saveWishListData,
  retrieveWishListData,
};
