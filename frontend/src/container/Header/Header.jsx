import { motion } from "framer-motion";


import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import Typewriter from "typewriter-effect";

import {Heading, Text, Container, HStack} from "@chakra-ui/react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <div className="app__header-content">
        <Container p={0} maxW="container.md">
          <Text fontSize="4xl">Hello, my name is</Text>
          <Heading fontSize="6xl" padding="0">Zuhed Shaikh</Heading>
          <HStack>
            <Text>I'am a</Text>
            <Typewriter 
            onInit={(typewriter) => {
              typewriter
              .pauseFor(1000)
              .typeString("Full Stack Web Developer")
              .pauseFor(1000)
              .deleteAll()
              .pauseFor(1000)
              .typeString("Problem Solver")
              .pauseFor(1000)
              .start()
            }}
            options={{
              loop: true
            }}
            />
          </HStack>
        </Container>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");
