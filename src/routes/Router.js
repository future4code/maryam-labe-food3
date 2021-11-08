import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import CreateAddressPage from "../pages/CreateAddressPage/CreateAddressPage";
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage";
import FeedPage from "../pages/FeedPage/FeedPage";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import ChartPage from "../pages/ChartPage/ChartPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import Header from "../components/Header/Header";
import styled from "styled-components"

const Router = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>

        <Route exact path={"/signUp"}>
          <SignUpPage />
        </Route>

        <Route exact path={"/create-address"}>
          <CreateAddressPage />
        </Route>

        <Route exact path={"/edit-profile"}>
          <EditProfilePage />
        </Route>

        <Route exact path={"/"}>
          <FeedPage />
        </Route>

        <Route exact path={"/restaurant/:restaurantId"}>
          <RestaurantPage />
        </Route>

        <Route exact path={"/chart"}>
          <ChartPage />
        </Route>

        <Route exact path={"/profile"}>
          <ProfilePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
