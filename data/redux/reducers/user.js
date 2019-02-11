import { USER_SELECTED, USER_CLEARED } from "../actions/user";

const userDefaultState = {
  id: undefined,
  name: undefined,
  username: undefined,
  email: undefined,
  address: {},
  phone: undefined,
  website: undefined,
  company: {}
};

const userReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case USER_SELECTED:
      return {
        id: action.id,
        name: action.name,
        username: action.username,
        email: action.email,
        address: action.address,
        phone: action.phone,
        website: action.website,
        company: action.company
      };
    case USER_CLEARED:
      return userDefaultState;
    default:
      return state;
  }
};

export default userReducer;
