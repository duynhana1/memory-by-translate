import React, { useState } from "react";
import { Tabs, Tab } from "@blueprintjs/core";
import FormRegister from "../components/FormRegister";
import FormSignIn from "../components/FormSignIn";

export default props => {
  let [currentTab, setCurrentTab] = useState("signin");
  const handleTabChange = newTabId => {
    setCurrentTab(newTabId);
    console.log(newTabId);
  };
  return (
    <Tabs
      id="TabsExample"
      onChange={handleTabChange}
      selectedTabId={currentTab}
    >
      <Tab id="signin" title="Sign in" panel={<FormSignIn />} />
      <Tab id="signup" title="Register" panel={<FormRegister />} />
    </Tabs>
  );
};
