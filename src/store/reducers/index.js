const userInfo = {
  userName: "weipenghui",
  tel: "15829770927",
};
export default function userqReducer(preState = userInfo, action) {
  const { type, data } = action;
  console.log(action);
  switch (type) {
    case "SET_INFO":
      return { ...preState, ...data };
    default:
      return userInfo;
  }
}
