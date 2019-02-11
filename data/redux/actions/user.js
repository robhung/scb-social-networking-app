// action types

export const USER_SELECTED = "USER_SELECTED";
export const USER_CLEARED = "USER_CLEARED";

// action creators

export const userSelected = user => ({
  type: USER_SELECTED,
  id: user.id,
  name: user.name,
  username: user.username,
  email: user.email,
  address: user.address,
  phone: user.phone,
  website: user.website,
  company: user.company
});

export const userCleared = () => ({ type: USER_CLEARED });
