export default (users = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...users, action.payload];
    default:
      return users;
  }
};
