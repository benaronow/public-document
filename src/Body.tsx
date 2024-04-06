import React, { useState } from "react";
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
    minWidth: 500,
    maxWidth: 600,
    textAlign: "left",
    fontFamily: "serif",
    fontSize: "120%",
    overflowWrap: "break-word",
  },
  showButton: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export const Body = () => {
  const { classes, cx } = useStyles();
  const [showContextNote, setShowContextNote] = useState(false);
  const [showWorksCited, setShowWorksCited] = useState(false);

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
          <div>
            <p
              onClick={() => setShowContextNote(!showContextNote)}
              className={cx(classes.showButton)}
            >
              <b>
                {showContextNote ? "Hide Context Note" : "Show Context Note"}
              </b>
            </p>
            {showContextNote && (
              <p>
                This document is of the proposal genre, as it suggests a
                guideline to be followed by its readers. The purpose of the
                document is to address the issue of the environmental impact
                that autonomous vehicles (AVs) will have as they increase in
                popularity through hopefully encouraging readers to make more
                environmentally-conscious decisions surrounding these vehicles.
                The intended audience made up of these readers consists of young
                college graduates that are at the age where they may be thinking
                about starting a household or a family, or about 25-30. The
                reason for this being the target demographic is that they will
                very likely be in the market for a car, specifically a daily
                driver to get them to and from work and possibly to start taking
                a child around, necessitating a newer, safer, technologically
                advanced vehicle, such as autonomous driving features. The
                essence of the knowledge that readers outside of the previously
                defined audience scope should obtain prior to viewing this
                document is as follows: As the production and distribution of
                autonomous vehicle technology becomes more widespread, the
                mechanical and computational progressions are contributing to a
                vast amount of carbon emissions. Refraining from use of these
                vehicles as much as possible before certain environmentally
                conscious techniques are put in place would aid in avoiding
                environmental catastrophe as the industry continues to grow.
              </p>
            )}
          </div>

          <div>
            <p>
              <b>Public Document</b>
            </p>
            <p>
              This is the actual essay. It will also have lots of words and
              break correctly in the right spot so that everything looks good.
            </p>
          </div>

          <div>
            <p
              onClick={() => setShowWorksCited(!showWorksCited)}
              className={cx(classes.showButton)}
            >
              <b>{showWorksCited ? "Hide Works Cited" : "Show Works Cited"}</b>
            </p>
            {showWorksCited && (
              <p>
                <ol>
                  <li>
                    Causes and effects of climate change (2020) Climate Action.
                    Available at:
                    https://www.un.org/en/climatechange/science/causes-effects-climate-change#:~:text=As%20greenhouse%20gas%20emissions%20blanket,the%20usual%20balance%20of%20nature.
                    (Accessed: 24 March 2024).
                  </li>
                  <br />
                  <li>
                    Climate change impacts (2021) National Oceanic and
                    Atmospheric Administration. Available at:
                    https://www.noaa.gov/education/resource-collections/climate/climate-change-impacts
                    (Accessed: 24 March 2024).
                  </li>
                  <br />
                  <li>
                    Doherty, R. et al. (2023) The triple play: Growth, profit,
                    and sustainability, McKinsey & Company. Available at:
                    https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/the-triple-play-growth-profit-and-sustainability
                    (Accessed: 24 March 2024).
                  </li>
                  <br />
                  <li>
                    Eco-driving means driving smarter (2011) Texas
                    Transportation Researcher. Available at:
                    https://tti.tamu.edu/researcher/eco-driving-means-driving-smarter/#:~:text=Eco%2Ddriving%20involves%20adopting%20driving,of%20a%20%E2%80%9Clead%20foot.%E2%80%9D
                    (Accessed: 24 March 2024).
                  </li>
                  <br />
                  <li>
                    Greenhouse gas emissions from a typical passenger vehicle
                    (2023) EPA. Available at:
                    https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle
                    (Accessed: 24 March 2024).
                  </li>
                  <br />
                  <li>
                    Jayawardana, V. and Wu, C. (2022) Learning eco-driving
                    strategies at signalized intersections, IEEE Xplore.
                    Available at: https://ieeexplore.ieee.org/document/9838000
                    (Accessed: 24 March 2024).
                  </li>
                  <br />
                  <li>
                    Sudhakar, S., Sze, V. and Karaman, S. (2022) Data centers on
                    Wheels: Emissions from computing onboard autonomous
                    vehicles, IEEE Xplore. Available at:
                    https://ieeexplore.ieee.org/document/9942310 (Accessed: 24
                    March 2024).
                  </li>
                  <br />
                  <li>
                    Zakutniaia, A. and Hayriyan, A. (2017) Transparency as
                    competitive advantage of innovation driven ...,
                    ResearchGate. Available at:
                    https://www.researchgate.net/publication/316767094_Transparency_as_competitive_advantage_of_innovation_driven_companies
                    (Accessed: 24 March 2024).
                  </li>
                </ol>
              </p>
            )}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
