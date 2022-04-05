import { useEffect, useState } from "react";
import { featuresEnum } from "../enums/featuresEnum";
import { wChild } from "../types";

interface IFeatureToggleProps extends wChild {
  feature: featuresEnum;
  offTemplate?: JSX.Element | JSX.Element[] | React.ReactChild;
}

// Do not render children if the tag is on the disabled list
export const FeatureToggle = ({children, feature, offTemplate}:IFeatureToggleProps) => {
  const [featureList, setFeatureList] = useState<string[]>([]);

  useEffect(()=>{
    try {
      const lsData = localStorage.getItem("jt-disabled-features");
      if(lsData) setFeatureList(JSON.parse(lsData));
    }
    catch(e){}
  },[]);

  return featureList.indexOf(feature) > -1 ? <>{offTemplate && offTemplate}</> : <>{children}</>;
}

// Check if feature toggle configuration is available, and populates it with default
export const FeatureToggleProvider = ({children}:wChild) => {
  useEffect(() => {
    try { // In case the localstorage is disabled
      const lsData = localStorage.getItem("jt-disabled-features");
      if(!lsData) {
        let defaultValue = process.env.REACT_APP_DISABLED_FEATURES;
        if(!defaultValue) defaultValue = "[]";
        localStorage.setItem("jt-disabled-features", defaultValue);
      }
    } catch (e) {}
  },[]);
  return (<>{children}</>);
}