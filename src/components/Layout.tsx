import { useEffect, useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { wChild } from '../types';
import Styles from './Layout.module.css';

type breakpoints = "sm" | "md" | "lg";

export interface hiddenProps extends wChild {
  breakpoints: breakpoints[];
}

export interface colProps extends wChild {
  sm?: 1|2|3|4;
  md?: 1|2|3|4|5|6|7|8;
  lg?: 1|2|3|4|5|6|7|8|9|10|11|12;
}

export const Col = ({children, sm=1, md=1, lg=1}:colProps) => {
  return(<div className={[Styles[`col-sm-${sm}`], Styles[`col-md-${md}`], Styles[`col-lg-${lg}`]].join(" ")}>{children}</div>);
}

export const GridContainer = ({children}:wChild) => {
  return(<div className={Styles['grid-container']}>{children}</div>);
}

export const Hidden = ({children, breakpoints}:hiddenProps) => {
  const sm = useMediaQuery('(max-width: 767px)');
  const md = useMediaQuery('(min-width: 768px) and (max-width: 1279px)');
  const lg = useMediaQuery('(min-width: 1280px)');
  const [currentQuery, setCurrentQuery] = useState<breakpoints>("sm");

  useEffect(() => {
    if(sm) {setCurrentQuery("sm");}
    else if(md) {setCurrentQuery("md");}
    else if(lg) {setCurrentQuery("lg");}
  }, [sm, md, lg]);

  return breakpoints.indexOf(currentQuery) === -1 ? <>{children}</> : <></>;
}

export const MainContainer = ({children}:wChild) => (
  <div className={Styles['main-container']}>{children}</div>
);
