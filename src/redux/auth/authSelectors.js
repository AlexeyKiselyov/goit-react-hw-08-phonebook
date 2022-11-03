export const selectAuthUser = state => state.auth.user;
export const selectAuthToken = state => state.auth.token;
export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;
export const selectAuthIsRefreshingCurrentUser = state =>
  state.auth.isRefreshingCurrentUser;
