import React from 'react';
import Router from "./routes/Router";
import CreateAddressPage from './pages/CreateAddressPage/CreateAddressPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RestaurantCard from './components/RestaurantCard/RestaurantCard';
import FeedPage from "./pages/FeedPage/FeedPage";

function App() {
  return (
    <div>
      <RestaurantCard />
      <Router />
    </div>
  );
}

export default App;
