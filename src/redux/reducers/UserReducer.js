import { LOGIN, LOGOUT } from "../types/UserTypes";

const initalstate = {
  users: [
    { username: "ali", password: "123456", auth: false },
    { username: "salah", password: "654321", auth: false },
    { username: "ahmed", password: "0000", auth: false },
  ],
};

export const UserReducer = (state = initalstate, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        users: state.users.map((el) =>
          el.username == action.username && el.password == action.password
            ? {
                ...el,
                auth: true,
              }
            : el
        ),
      };
    case LOGOUT:
      return {
        ...state,
        users: state.users.map((el) => ({ ...el, auth: false })),
      };
    default:
      return state;
  }
};

export default UserReducer;
