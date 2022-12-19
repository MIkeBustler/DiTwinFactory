import {combineReducers} from "@reduxjs/toolkit";
import { NAV_STATE_CHANGE, USER_LOGIN, USER_LOGOUT } from "./actions";

const navStateData = {
  drawerOpen: false,
  drawerWidth: 200,
};

function navState(state = navStateData, action){
  switch (action.type){
    case NAV_STATE_CHANGE: {
      return { ...state, 
        drawerOpen: action.payload.navState.drawerOpen,
        drawerWidth: action.payload.navState.drawerWidth,
      }
    }
    default:{};
  };
  return state;
};

const userData = {
  id: "",
  name: "",
  jwtToken: "",
}

function user(state = userData, action){
  switch(action.type){
    case USER_LOGIN :{
      return{ ...state,
        name: action.payload.user.name,
        id: action.payload.user.id,
        jwtToken: action.payload.user.jwtToken,
      }
    }
    case USER_LOGOUT :{
      return{ ...state,
        name: "",
        id: "",
        jwtToken: "",
      }
    }
    default:{}
  }
  return state;
}

export const reducer = combineReducers({navState, user});