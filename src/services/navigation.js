import { NavigationActions } from "react-navigation";

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

function dispatch(action) {
  _navigator.dispatch(action);
}
function push(routeName, params) {
  _navigator.dispatch(
    NavigationActions.push({
      routeName,
      params
    })
  );
}
export default {
  navigate,
  setTopLevelNavigator,
  push,
  dispatch
};
