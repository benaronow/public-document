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
    minWidth: 475,
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
    minWidth: 475,
    maxWidth: 600,
    textAlign: "left",
    fontFamily: "serif",
    fontSize: "120%",
    overflowWrap: "break-word",
    lineHeight: 2,
  },
  extras: {
    display: "flex",
    flexDirection: "row",
    fontSize: "80%",
    justifyContent: "space-evenly",
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

  const handleContextNoteClick = () => {
    setShowContextNote(!showContextNote);
    setShowWorksCited(false);
  };

  const handleWorksCitedClick = () => {
    setShowWorksCited(!showWorksCited);
    setShowContextNote(false);
  };

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
          as their non-autonomous counterparts, <br /> but something is being
          done to fix the problem.
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
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;The fact that cars produce carbon dioxide
              has been well-known and undisputed for decades. One driver, on
              average, will produce 4.6 metric tons of CO<sup>2</sup> every
              year, leading cars alone to account for a whopping 10% of total
              global emissions.<sup>[5]</sup> Electric vehicles, upon their
              advent, were introduced in large part to aid in the battle against
              this emission crisis, an effort which was largely successful. They
              produce roughly 2,700lb of CO<sup>2</sup> equivalent annually,
              whereas gasoline-powered vehicles emit almost 12,600lb.
              <sup>[4]</sup> Autonomous vehicles have entirely ditched internal
              combustion engines for those of an electric nature, and therefore
              benefit from a similar baseline reduction in emissions due to the
              exclusion of fossil fuel in their use; however, it is within the
              massive requirements of onboard computational technology used in
              piloting AVs where the issue lies. Despite their electric engines,
              self-driving cars still manage to produce a significant amount of
              emissions due to these energy requirements, but luckily, driving
              efficiency algorithm technology currently being implemented just
              may be the answer to cutting the surplus carbon all the way back
              down.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp; Currently, 1 billion AVs driven for 1
              hour every day is estimated to emit over 200 million tons of CO
              <sup>2</sup> into the atmosphere annually, yielding roughly the
              same carbon emissions as data centers worldwide,<sup>[7]</sup> or
              the country of Argentina. These greenhouse gas emissions have the
              potential to assert massive amounts of damage on our environment,
              with said damage consisting of many different factors. One such
              factor is the direct rise in temperature associated with an
              increase in atmospheric CO<sup>2</sup>. Higher ocean temperatures
              lead to a larger amount of hurricanes which have the potential to
              cause drastic numbers of fatalities, with the ensuing uptick in
              flooding rates spreading disease and chemical hazards.
              <sup>[2]</sup>
              This heat will also cause increased forest fires and as a result
              lower the air quality to levels unsafe for at-risk populations.
              <sup>[2]</sup>
              Additionally, a loss of animal life is imminent and fast
              approaching. The planet is currently at approximately 1 thousand
              times the risk of losing species than any other point known in
              history, such over the course of the next few decades, 1 million
              species are forecasted to go extinct.<sup>[1]</sup> Furthermore,
              it is estimated that around 40% of the world’s population resides
              in coastal areas that are bound to be affected by the rising sea
              levels,<sup>[2]</sup> causing mass displacement and distress of an
              unfathomable number of people. These harmful ramifications of
              climate change because of CO<sup>2</sup> emissions, due in part to
              AVs, clearly endanger the lives of many and cannot be understated.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp; One method that manufacturers of AVs are
              beginning to use in order to combat the previously listed effects
              of carbon emissions is that of an increase in algorithmic prowess
              to create a manner of driving efficiency, commonly referred to as
              “eco-driving.” Most people driving themselves around today already
              utilize simple eco-driving techniques in the form of avoiding
              tailgating and rapid starts/stops along with using cruise control
              and spending as little time idling as possible. These techniques
              can decrease fuel consumption by up to 10%.<sup>[3]</sup> Imagine,
              then, if a computer could take said concept to the next level and
              execute it as efficiently as possible within the bounds of current
              technology. Recent studies have focused specifically on
              eco-driving algorithms using a further concept known as connected
              autonomous vehicles (CAVs), or essentially a web of AVs
              communicating with each other. What these studies found was that
              fuel consumption at signalized intersections, like stop lights,
              can be drastically decreased from the vehicles communicating with
              each other.<sup>[6]</sup> Furthermore, when all of the vehicles at
              an intersection are CAVs, there was as high as a 25% reduction in
              overall CO<sup>2</sup> emissions. Not only that, but as a bonus, the speed at
              which vehicles made it through the intersection was also decreased
              by up to 20%.<sup>[6]</sup> While this technology is already
              implemented to some extent, there has been an overwhelming amount
              of independent research conducted surrounding the subject just
              recently. Many different types of algorithms are being tested, and
              they all have led to their own unique findings. What they do have
              in common is a substantial decrease in emissions without any
              ramifications to the hardware of the vehicle.<sup>[6]</sup> It’s
              quite easy to see how significant of a discovery this technology
              is, and how it is already changing AVs for the better, and will
              continue to in the near future.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp; Self-driving cars will certainly be the
              future of transportation, and it won’t be long before they and
              their large energy expenditures are commonplace on our roads.
              However, it’s clear that not all hope is lost. By improving and
              implementing this solution of eco-driving into the manufacturing
              process, AV companies will substantially decrease the total carbon
              footprint of vehicles across the globe, making a significant
              difference concerning the issue of greenhouse gas emissions that
              are ravaging the planet. The further exploration of the
              eco-driving concept is one that will not cease in the near future,
              and its potential for not only decreasing emissions but also the
              nature in which autonomous vehicles navigate the road is extremely
              exciting.
            </p>
          </div>

          <div className={cx(classes.extras)}>
            <div>
              <p
                onClick={handleContextNoteClick}
                className={cx(classes.showButton)}
              >
                <b>
                  <u>
                    {showContextNote
                      ? "Hide Context Note"
                      : "Show Context Note"}
                  </u>
                </b>
              </p>
            </div>

            <div>
              <p
                onClick={handleWorksCitedClick}
                className={cx(classes.showButton)}
              >
                <b>
                  <u>
                    {showWorksCited ? "Hide Works Cited" : "Show Works Cited"}
                  </u>
                </b>
              </p>
            </div>
          </div>

          {showContextNote && (
            <p>
              This document is an informative news article, which condenses
              complex information from the scientific field into a digestible
              format. The purpose of the document is to discuss the issue of the
              environmental impact that autonomous vehicles (AVs) will have as
              they increase in popularity and highlight a method that is being
              used to combat this impact. The intended audience made up of these
              readers consists of young college graduates that are at the age
              where they may be thinking about purchasing a long-term car, or in
              the range of 25-30. The reason for this being the target
              demographic is that they will very likely be environmentally
              conscious people in the market for a higher end, more
              technologically advanced vehicle car, such as one with autonomous
              driving features. These readers would therefore be rather
              interested in the topic as each aspect would be relevant to their
              lives. The essence of the knowledge that readers outside of the
              previously defined audience scope should obtain prior to viewing
              this document is as follows: As the production and distribution of
              autonomous vehicle technology becomes more widespread, the
              mechanical and computational progressions are contributing to a
              vast amount of carbon emissions. Refraining from use of these
              vehicles as much as possible before certain environmentally
              conscious techniques are put in place would aid in avoiding
              environmental catastrophe as the industry continues to grow.
            </p>
          )}
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
                  Climate change impacts (2021) National Oceanic and Atmospheric
                  Administration. Available at:
                  https://www.noaa.gov/education/resource-collections/climate/climate-change-impacts
                  (Accessed: 24 March 2024).
                </li>
                <br />
                <li>
                  Doherty, R. et al. (2023) The triple play: Growth, profit, and
                  sustainability, McKinsey & Company. Available at:
                  https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/the-triple-play-growth-profit-and-sustainability
                  (Accessed: 24 March 2024).
                </li>
                <br />
                <li>
                  Eco-driving means driving smarter (2011) Texas Transportation
                  Researcher. Available at:
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
                  strategies at signalized intersections, IEEE Xplore. Available
                  at: https://ieeexplore.ieee.org/document/9838000 (Accessed: 24
                  March 2024).
                </li>
                <br />
                <li>
                  Sudhakar, S., Sze, V. and Karaman, S. (2022) Data centers on
                  Wheels: Emissions from computing onboard autonomous vehicles,
                  IEEE Xplore. Available at:
                  https://ieeexplore.ieee.org/document/9942310 (Accessed: 24
                  March 2024).
                </li>
                <br />
                <li>
                  Zakutniaia, A. and Hayriyan, A. (2017) Transparency as
                  competitive advantage of innovation driven ..., ResearchGate.
                  Available at:
                  https://www.researchgate.net/publication/316767094_Transparency_as_competitive_advantage_of_innovation_driven_companies
                  (Accessed: 24 March 2024).
                </li>
              </ol>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
