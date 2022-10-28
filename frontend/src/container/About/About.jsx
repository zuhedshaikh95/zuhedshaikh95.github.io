import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import timelineElements from "./timelineElements";

import { AppWrap, MotionWrap } from "../../wrapper";
import { FaGraduationCap } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import "./About.scss";

const styleIcon = {
  background: "#f9c74f",
};

const About = () => {
  return (
    <>
      <h2 className="head-text">
        All about <span>Me</span>
      </h2>

      <VerticalTimeline className="app__timeline-container">
        {timelineElements.map((elem) => (
          <VerticalTimelineElement
            key={elem.id}
            date={elem.date}
            dateClassName="timeline-date"
            iconStyle={styleIcon}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">{elem.title}</h3>
            <h4 className="app__university p-text">{elem.university}</h4>
            <h5 className="vertical-timeline-element-subtitle">
              {elem.location}
            </h5>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
