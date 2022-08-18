const breadcrumbData = {};
export default function breadcrumbReducer(preState = breadcrumbData, action) {
  const { type, data } = action;
  switch (type) {
    case "SET_BREADCRUMBDATA":
      return { ...preState, ...data };
    default:
      return preState;
  }
}
