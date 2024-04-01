import React from "react";
import { tss } from "tss-react/mui";

const useStyles = tss.create(() => ({
  footerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 55,
    borderTop: "solid 1px",
  },
  footerText: {},
}));

export const Footer = () => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.footerContainer)}>
      <span className={cx(classes.footerText)}>
        Thanks for reading The Times.
      </span>
    </div>
  );
};
