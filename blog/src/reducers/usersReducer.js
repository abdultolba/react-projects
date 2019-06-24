export default (users = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...users, action.payload]; // Append the user to state.users
    default:
      return users;
  }
};
