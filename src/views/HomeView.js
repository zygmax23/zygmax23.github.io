import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledView = styled(motion.div)``;

const HomeView = () => {
  return (
    <motion.div initial="initial" animate="enter" exit="exit">
      This is home view
    </motion.div>
  );
};

export default HomeView;
