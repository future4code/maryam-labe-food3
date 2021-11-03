export const goToLogin = (history) => {
  history.push("/login");
};

export const goToSignUp = (history) => {
  history.push("/signUp");
};

export const goToCreateAddress = (history) => {
  history.push("/create-address");
};

export const goToFeed = (history) => {
  history.push("/feed");
};

export const goToRestaurantDetails = (history, restaurant) => {
  history.push(`/${restaurant}`);
};

export const goToCart = (history) => {
  history.push("/chart");
};

export const goToProfile = (history, profile) => {
  history.push(`/${profile}`);
};

export const goToEditProfile = (history) => {
  history.push("/edit-profile");
};

export const goToEditAddress = (history) => {
  history.push("/edit-address");
};
