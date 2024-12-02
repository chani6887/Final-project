
const initialUser={
user:null
}

const userReducer = (state = initialUser, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state,user:action.pailod  };
      case 'SIGHUP':
        return { ...state, user:action.pailod};
      default:
        return state;
    }
  };
  
  export default userReducer