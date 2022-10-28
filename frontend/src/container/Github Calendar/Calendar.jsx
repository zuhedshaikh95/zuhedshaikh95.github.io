import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Calendar.scss";

const Calendar = () => {
  return (
    <motion.div
      id="calendar"
      whileInView={{ y: [150, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__calendar"
    >
      <h2 className="head-text" style={{ marginBottom: "4rem" }}>
        GitHub Contributions
      </h2>

      <GitHubCalendar
        className="app__github-calendar"
        username="zuhedshaikh95"
        year={new Date().getFullYear()}
        showWeekdayLabels
      >
        <ReactTooltip html />
      </GitHubCalendar>
    </motion.div>
  );
};

export default AppWrap(MotionWrap(Calendar, ""), "calendar", "app__whitebg");
