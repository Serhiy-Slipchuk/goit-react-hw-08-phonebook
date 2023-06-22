export const handlerPending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handlerRegisterAndLogin = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.token = payload.token;
  state.user = payload.user;
  state.isLoggedIn = true;
};

export const handlerLogout = state => {
  state.token = '';
  state.user = {};
  state.error = '';
  state.isLoggedIn = false;
};

export const handlerRegisterError = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handlerLoginError = (state, { payload }) => {
  state.isLoading = false;
  state.error = `${payload}. Invalid user's email or password`;
};

export const handlerLogoutError = (state, { payload }) => {
  state.error = payload;
};

export const handlerGetCurrentUser = (state, { payload }) => {
    state.error = '';
    state.user = payload;
    state.isLoggedIn = true;
  }