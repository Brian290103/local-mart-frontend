// src/routes/routeConfig.ts
export const routes = {
  home: { path: "/", name: "Home" },
  shop: { path: "/:id/shop", name: "Shop" },
  product: { path: "/:id/shop/:prodId", name: "Product" },
  category: { path: "/:id/categories", name: "Categories" },
  bidding: { path: "/:id/bid", name: "Bid" },
  bid: { path: "/:id/bid/:bidId", name: "Bid" },

  cart: { path: "/cart", name: "Cart" },
  checkout: { path: "/checkout", name: "Checkout" },

  // AUTH ROUTE
  login: { path: "/login", name: "Login" },
  register: { path: "/register", name: "Register" },

  // NOT FOUND ROUTE
  notFound: { path: "*", name: "NotFound" },

  // User Auth
  addresses: { path: "/account/addresses", name: "Addresses" },
  personalInformation: {
    path: "/account/personal-information",
    name: "Personal Information",
  },
  passwords: { path: "/account/password", name: "passwords" },
  orders: { path: "/account/orders", name: "orders" },
  coins: { path: "/account/coins", name: "coins" },
  wishlist: { path: "/account/wishlist", name: "wishlist" },
};
