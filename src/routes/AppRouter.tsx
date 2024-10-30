// src/routes/AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout.tsx";
import HomePage from "@/pages/HomePage.tsx";
import ShopPage from "@/pages/ShopPage.tsx";
import NotFoundPage from "@/pages/NotFoundPage.tsx";
import { routes } from "@/routes/routeConfig.ts";
import BiddingPage from "@/pages/BiddingPage.tsx";
import CategoryPage from "@/pages/CategoryPage.tsx";
import ProductPage from "@/pages/ProductPage.tsx";
import BidPage from "@/pages/BidPage.tsx";
import LoginPage from "@/pages/auth/LoginPage.tsx";
import RegisterPage from "@/pages/auth/RegisterPage.tsx";
import CartPage from "@/pages/CartPage.tsx";
import CheckoutPage from "@/pages/CheckoutPage.tsx";
import AddressesPage from "@/pages/user/AddressesPage.tsx";
import PersonalInformationPage from "@/pages/user/PersonalInformationPage.tsx";
import OrdersPage from "@/pages/user/OrdersPage.tsx";
import WishlistPage from "@/pages/user/WishlistPage.tsx";
import PasswordsPage from "@/pages/user/PasswordsPage.tsx";
import CoinsPage from "@/pages/user/CoinsPage.tsx";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.home.path} element={<MainLayout />}>
          <Route index element={<HomePage />} /> {/* Default route */}
          <Route path={routes.shop.path} element={<ShopPage />} />
          <Route path={routes.category.path} element={<CategoryPage />} />
          <Route path={routes.product.path} element={<ProductPage />} />
          <Route path={routes.bidding.path} element={<BiddingPage />} />
          <Route path={routes.bid.path} element={<BidPage />} />
          {/*STORE*/}
          <Route path={routes.cart.path} element={<CartPage />} />
          <Route path={routes.checkout.path} element={<CheckoutPage />} />
          {/*AUTH PAGES*/}
          <Route path={routes.login.path} element={<LoginPage />} />{" "}
          <Route path={routes.register.path} element={<RegisterPage />} />{" "}
          {/*NOT FOUND PAGE*/}
          <Route path={routes.notFound.path} element={<NotFoundPage />} />{" "}
          {/*ACCOUNT */}
          <Route
            path={routes.addresses.path}
            element={<AddressesPage />}
          />{" "}
          <Route
            path={routes.personalInformation.path}
            element={<PersonalInformationPage />}
          />{" "}
          <Route path={routes.orders.path} element={<OrdersPage />} />{" "}
          <Route path={routes.wishlist.path} element={<WishlistPage />} />{" "}
          <Route path={routes.passwords.path} element={<PasswordsPage />} />{" "}
          <Route path={routes.coins.path} element={<CoinsPage />} />{" "}
          {/* Catch-all route */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
