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
          <span style={{ alignSelf: "left" }}>April 14, 2024</span>
        </div>
        <div className={cx(classes.articleTextContainer)}>
          <div>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Cars spewing out carbon dioxide into the
              atmosphere is news to nobody. In fact, on average, one driver
              produces 12,600lb of CO2 every year,<sup>[5]</sup>&nbsp; leading
              cars alone to account for a whopping 10% of total global carbon
              emissions.<sup>[6]</sup>&nbsp; When it comes to electric cars,
              it’s a bit of a different story. They were originally introduced
              in large part to aid in the battle against the current emission
              crisis, an effort which was largely successful. They produce about
              2,700lb of CO2 equivalent annually, roughly ⅕ the emissions of
              gasoline powered vehicles.<sup>[5]</sup>&nbsp; Recently, however,
              a third type of car has entered the conversation: electric cars
              that can drive themselves. Autonomous vehicles, or AVs, are all
              electric. Therefore, they benefit from a similar baseline
              reduction in emissions, but the massive requirements of onboard
              computers used to pilot AVs do their best to negate these benefits
              altogether. Luckily, driving efficiency algorithms may provide a
              path to cutting the surplus carbon all the way back down.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;It’s not immediately clear how any
              computing, much less a relatively small computer running inside of
              a car, can produce carbon emissions. The answer actually lies not
              in the device itself, but instead in vast data centers in which
              supercomputers receive and handle the information being processed
              by said device. Green Algorithms, a software created by
              mathematician Loïc Lannelongue that allows people to estimate the
              carbon emissions of certain computational tasks, was used to
              calculate the carbon footprint of different supercomputers.
              Lannelongue found that among the astronomy research department at
              the University of Western Australia, each astronomer’s emissions
              averaged to 37 tons of carbon annually.<sup>[1]</sup>&nbsp; The
              carbon footprints coming from the Dutch Astronomy Council and
              Germany’s Max Planck Institute for Astronomy were both similarly
              alarming, totalling to another 22.7 tons.<sup>[1]</sup>&nbsp; What
              is even more frightening about these statistics is that they are
              for individual researchers using a limited number of computing
              devices, whereas the data centers supporting AV fleets often
              contain hundreds, if not thousands, of supercomputers running
              simultaneously to process the data they receive. Currently, 1
              billion AVs driven for 1 hour every day is estimated to emit over
              200 million tons of CO2 into the atmosphere annually, yielding
              roughly the same carbon emissions as data centers worldwide,
              <sup>[8]</sup>&nbsp; or the country of Argentina. While it may be
              difficult to ascertain the immense scope of this catastrophe
              simply from the weight of carbon being produced, the effects on
              our environment are far more tangible.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Carbon emissions, many of which can be
              directly attributed to data centers, are constantly asserting
              massive amounts of damage on the Earth through myriad factors. One
              such factor is a direct rise in ocean temperature, leading to a
              larger number of hurricanes which have the potential to cause
              drastic numbers of fatalities, not to mention the ensuing increase
              in flooding rates, chemical hazards, and forest fires.
              <sup>[3]</sup>&nbsp; Additionally, it’s estimated that melting ice
              caps will cause the living situation of around 40% of the world’s
              coastal population to be displaced. It’s not just people being
              affected; the planet is currently at approximately 1 thousand
              times the risk of losing species than any other point known in
              history, such over the course of the next few decades, 1 million
              species are forecasted to go extinct.<sup>[2]</sup>&nbsp; These
              harmful ramifications of climate change because of CO2 emissions,
              due in part to AVs, clearly endanger the lives of many and cannot
              be understated.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Thankfully, a new achievement in
              technology may present one piece of the puzzle in demolishing
              these AV-based emissions. Algorithmic driving efficiency, commonly
              referred to as “eco-driving,” is a technique that most people
              driving themselves around today already utilize in the form of
              avoiding tailgating and rapid starts/stops, along with using
              cruise control and spending as little time idling as possible.
              These techniques, performed by an average driver, can decrease
              fuel consumption by up to 10%.<sup>[4]</sup>&nbsp; If performed by
              a computer, it’s obvious that the execution of said techniques
              would be on a level of efficiency far above that of a human.
              Recent studies have focused specifically on a concept known as
              connected autonomous vehicles (CAVs), or essentially a web of AVs
              communicating with each other to accomplish the most efficient
              eco-driving possible. What these studies found was that emissions
              at signalized intersections, like stop lights, can be drastically
              decreased from the vehicles communicating with each other.
              <sup>[7]</sup>&nbsp; In essence, if each car already knows the
              intended movement of every surrounding car and the timing of stop
              lights, they can move exactly the right amount at precisely the
              right times without computing those decisions in real time. When
              all of the vehicles at an intersection are CAVs, there was as high
              as a 25% reduction in overall CO2 emissions. Not only that, but as
              a bonus, the speed at which vehicles made it through the
              intersection was also decreased by up to 20% due to the
              near-maximal efficiency of the cars’ movement.<sup>[7]</sup>&nbsp;
              While manufacturers have attempted to implement this technology in
              the past, there has recently been an overwhelming amount of
              independent research conducted surrounding the subject. Many
              different types of algorithms are being tested, and they all have
              led to their own unique findings. What they have in common is the
              ability to substantially decrease AV emissions without any
              ramifications to the hardware of the vehicle.<sup>[7]</sup>&nbsp;
              The effects this technology has on the environment will no doubt
              be significant, and it’s only improving as time goes on.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;It won’t be long before self-driving cars
              and their large energy expenditures are commonplace on our roads.
              However, by improving and implementing this solution of
              eco-driving into the manufacturing process, AV companies will
              substantially decrease the total carbon footprint of vehicles
              across the globe. The further exploration of the eco-driving
              concept will only continue going forward, and despite the constant
              uphill battle that is decreasing the world’s vehicular carbon
              footprint, its potential for not only decreasing emissions but
              also changing how autonomous vehicles navigate the road is
              extremely exciting.
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
              driving features. I envision these people reading the New York
              Times, a newspaper whose target demographic aligns with those I’ve
              outlined. These readers would therefore be rather interested in
              the topic as each aspect would be relevant to their lives. The
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
          {showWorksCited && (
            <p>
              <ol>
                <li>
                  Allen, M. (2022) The huge carbon footprint of large-scale
                  computing, Physics World. Available at:
                  https://physicsworld.com/a/the-huge-carbon-footprint-of-large-scale-computing/
                  (Accessed: 14 April 2024).
                </li>
                <br />
                <li>
                  Causes and effects of climate change (2020) Climate Action.
                  Available at:
                  https://www.un.org/en/climatechange/science/causes-effects-climate-change#:~:text=As%20greenhouse%20gas%20emissions%20blanket,the%20usual%20balance%20of%20nature.
                  (Accessed: 14 April 2024).
                </li>
                <br />
                <li>
                  Climate change impacts (2021) National Oceanic and Atmospheric
                  Administration. Available at:
                  https://www.noaa.gov/education/resource-collections/climate/climate-change-impacts
                  (Accessed: 14 April 2024).
                </li>
                <br />
                <li>
                  Doherty, R. et al. (2023) The triple play: Growth, profit, and
                  sustainability, McKinsey & Company. Available at:
                  https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/the-triple-play-growth-profit-and-sustainability
                  (Accessed: 14 April 2024).
                </li>
                <br />
                <li>
                  Eco-driving means driving smarter (2011) Texas Transportation
                  Researcher. Available at:
                  https://tti.tamu.edu/researcher/eco-driving-means-driving-smarter/#:~:text=Eco%2Ddriving%20involves%20adopting%20driving,of%20a%20%E2%80%9Clead%20foot.%E2%80%9D
                  (Accessed: 14 April 2024).
                </li>
                <br />
                <li>
                  Greenhouse gas emissions from a typical passenger vehicle
                  (2023) EPA. Available at:
                  https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle
                  (Accessed: 14 April 2024).
                </li>
                <br />
                <li>
                  Jayawardana, V. and Wu, C. (2022) Learning eco-driving
                  strategies at signalized intersections, IEEE Xplore. Available
                  at: https://ieeexplore.ieee.org/document/9838000 (Accessed: 14
                  April 2024).
                </li>
                <br />
                <li>
                  Sudhakar, S., Sze, V. and Karaman, S. (2022) Data centers on
                  Wheels: Emissions from computing onboard autonomous vehicles,
                  IEEE Xplore. Available at:
                  https://ieeexplore.ieee.org/document/9942310 (Accessed: 14
                  April 2024).
                </li>
                <br />
                <li>
                  Zakutniaia, A. and Hayriyan, A. (2017) Transparency as
                  competitive advantage of innovation driven ..., ResearchGate.
                  Available at:
                  https://www.researchgate.net/publication/316767094_Transparency_as_competitive_advantage_of_innovation_driven_companies
                  (Accessed: 14 April 2024).
                </li>
              </ol>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
