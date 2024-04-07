import React from "react";
import { tss } from "tss-react/mui";
import headerCar from "./assets/header-car.jpg";
import headerTitle from "./assets/header-title.png";

const useStyles = tss.create(() => ({
  headerContainer: {
    display: "flex",
    flexDirection: 'column',
  },
  headerImageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
    height: "60vw",
    maxHeight: "100vh",
    backgroundColor: "black",
    overflow: "hidden",
  },
  headerImage: {
    width: "100%",
    height: "60vw",
  },
  headerTitleContainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "60vw",
    top: 0,
  },
  headerLogo: {
    marginTop: 20,
    minHeight: 30,
    minWidth: 200,
    height: "3vw",
    width: "20vw",
  },
  articleTitle: {
    fontSize: "300%",
    fontFamily: "serif",
    marginTop: "20vh",
    color: "transparent",
    [`@media (min-width: 1120px)`]: {
      color: "white",
      textShadow: "black 10px 10px 10px",
    },
  },
  articleSubtitle: {
    fontSize: "150%",
    fontFamily: "serif",
    marginTop: 20,
    color: "transparent",
    [`@media (min-width: 1120px)`]: {
      color: "white",
      textShadow: "black 10px 10px 10px",
    },
  },
}));

export const Header = () => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.headerContainer)}>
      <div className={cx(classes.headerImageContainer)}>
        <img
          src={headerCar}
          alt="headerImage"
          className={cx(classes.headerImage)}
        ></img>
      </div>
      <div className={cx(classes.headerTitleContainer)}>
        <img
          src={headerTitle}
          alt="headerTitle"
          className={cx(classes.headerLogo)}
        ></img>
        <span className={cx(classes.articleTitle)}>
          <i>
            Are Autonomous Vehicles <br /> Ruining the Environment?
          </i>
        </span>
        <span className={cx(classes.articleSubtitle)}>
          New studies suggest they may not be as good for the <br /> atmosphere
          as their non-autonomous counterparts, <br /> but something is being
          done to fix the problem.
        </span>
      </div>
    </div>
  );
};
