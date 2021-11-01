import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import CreateAddressPage from "../pages/CreateAddressPage/CreateAddressPage";
import EditAddressPage from "../pages/EditAddressPage/EditAddressPage";
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage";
import FeedPage from "../pages/FeedPage/FeedPage";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import ChartPage from "../pages/ChartPage/ChartPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

const Router = () => {
  return (
    <BrowserRouter>
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

        <Route exact path={"/edit-address"}>
          <EditAddressPage />
        </Route>

        <Route exact path={"/edit-profile"}>
          <EditProfilePage />
        </Route>

        <Route exact path={"/"}>
          <FeedPage />
        </Route>

        <Route exact path={"/restaurant-page"}>
          <RestaurantPage />
        </Route>

        <Route exact path={"/chart"}>
          <ChartPage />
        </Route>

        <Route exact path={"/profile-page"}>
          <ProfilePage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default Router;
