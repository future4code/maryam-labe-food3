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
  history.push("/");
};

export const goToRestaurantDetails = (history, restaurantId) => {
  history.push(`restaurant/${restaurantId}`);
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

export const goBack = (history) => {
  history.goBack()
}
