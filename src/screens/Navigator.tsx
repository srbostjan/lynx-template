import React from "react";
import { useUserStore } from "../store/store.js";
import AuthNavigator from "./AuthStack/index.jsx";
import MainNavigator from "./MainStack/index.jsx";

function Navigator() {
  const user = useUserStore((state) => state.user)

  if (user) {
    return <AuthNavigator />
  } else {
    return <MainNavigator />
  }
}

export default Navigator;
