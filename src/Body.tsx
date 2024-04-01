import React from "react";
import { tss } from "tss-react/mui";
import me from "./assets/me.jpg";

const useStyles = tss.create(() => ({
  bodyContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
    marginBottom: 40,
    alignItems: "center",
    minWidth: 500,
    maxWidth: 600,
    [`@media (max-width: 640px)`]: {
      marginLeft: 20,
      marginRight: 20,
    },
  },
  bodyTitleContainer: {
    display: "flex",
    flexDirection: "column",
  },
  articleTitle: {
    fontSize: "280%",
    fontFamily: "serif",
    color: "black",
    [`@media (min-width: 1120px)`]: {
      color: "transparent",
      height: 0,
    },
  },
  articleSubtitle: {
    fontSize: "140%",
    fontFamily: "serif",
    color: "black",
    [`@media (min-width: 1120px)`]: {
      color: "transparent",
      height: 0,
    },
  },
  authorContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [`@media (min-width: 1119px)`]: {
      marginTop: -20,
    },
  },
  authorPhoto: {
    minHeight: 75,
    height: 75,
    minWidth: 75,
    width: 75,
    borderRadius: "50%",
    overflow: "hidden",
  },
  authorInfoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "left",
    marginLeft: 20,
  },
  authorDivider: {
    [`@media (max-width: 1119px)`]: {
      width: "100%",
      marginTop: 20,
      marginBottom: 20,
    },
  },
  dateContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    fontSize: "75%",
    marginBottom: 20,
  },
  articleTextContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    fontFamily: "serif",
    fontSize: "120%",
  },
}));

export const Body = () => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.bodyContainer)}>
      <div className={cx(classes.bodyTitleContainer)}>
        <span className={cx(classes.articleTitle)}>
          <i>
            <b>
              Are Autonomous Vehicles <br /> Ruining the Environment?
            </b>
          </i>
        </span>
        <br />
        <span className={cx(classes.articleSubtitle)}>
          New studies suggest they may not be as good for the <br /> atmosphere
          as their non-autonomous counterparts.
        </span>
      </div>
      <hr className={cx(classes.authorDivider)} />
      <div>
        <div className={cx(classes.authorContainer)}>
          <img src={me} alt="me" className={cx(classes.authorPhoto)}></img>
          <div className={cx(classes.authorInfoContainer)}>
            <span style={{ marginRight: "auto" }}>
              <b>By Benjamin M. Aronow</b>
            </span>
            <span
              style={{ marginRight: "auto", textAlign: "left", marginTop: 5 }}
            >
              Benjamin Aronow has definitely been a prominent voice in <br />
              the autonomous vehicle industry for over 20 years.
            </span>
          </div>
        </div>
        <div className={cx(classes.dateContainer)}>
          <span style={{ alignSelf: "left" }}>April 4, 2024</span>
        </div>
        <div className={cx(classes.articleTextContainer)}>
          <span>
            <b>Context Note</b> <br />
            This is the context note. It will have lots of words and break
            correctly in the right spot so that everything looks good.
            <br />
            <br />
            <b>Public Document</b> <br />
            This is the actual essay. It will also have lots of words and break
            correctly in the right spot so that everything looks good.
            <br />
            <br />
            <b>Works Cited</b> <br />
            These are my sources. They will be largely the same as in Unit 3.
          </span>
        </div>
      </div>
    </div>
  );
};
