export const NAV_STATE_CHANGE = "NAV_STATE_CHANGE"; // change navigation components state - drawer open, menu and so on (pass state between sidebar and topbar)
export const navStateChange = function(navState){return{type: NAV_STATE_CHANGE, payload: {navState},}};

export const USER_LOGIN = "USER_LOGIN";
export const userLogin = function(user){return {type: USER_LOGIN, payload:{user}, }};
export const USER_LOGOUT = "USER_LOGOUT";
export const userLogout = function(){return{type: USER_LOGOUT, payload: {}, }};

