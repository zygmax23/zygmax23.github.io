import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const StyledLeft = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 40%;
  height: 100%;
  background: #fd0033;
  overflow: hidden;
  z-index: 1;
`;

const StyledTitle = styled.h1`
  color: white;
  font-size: 92px;
  letter-spacing: 8px;
  font-family: "Raleway";
  opacity: 0.2;
  font-weight: 800;
  display: block;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  margin: 0;
  padding: 0;
`;

const StyledRight = styled.div`
  position: absolute;
  width: 60%;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(motion.img)`
  width: 90%;
  height: 50%;
`;

const StyledBack = styled(motion.div)`
  position: fixed;
  top: 50%;
  right: 50px;
  font-size: 54px;
  z-index: 1;
  font-weight: 800;

  a {
    text-decoration: none;
    color: white;
  }
`;

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition
  }
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

const ProjectDetailsView = () => {
  return (
    <>
      <motion.div initial="exit" animate="enter" exit="exit">
        <StyledLeft>
          <StyledTitle> Project</StyledTitle>
        </StyledLeft>
        <StyledRight>
          <StyledBack
            initial="exit"
            animate="enter"
            exit="exit"
            variants={backVariants}
          >
            <Link to="/projects">← Back</Link>
          </StyledBack>

          <StyledImage
            initial="exit"
            animate="enter"
            exit="exit"
            variants={imageVariants}
            src="https://i.picsum.photos/id/0/300/300.jpg"
            alt="zdjecie"
          />
        </StyledRight>
      </motion.div>
    </>
  );
};

export default ProjectDetailsView;
