import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    image: 1
  },
  {
    id: 1,
    image: 1
  },
  {
    id: 1,
    image: 1
  },
  {
    id: 1,
    image: 1
  },
  {
    id: 1,
    image: 1
  },
  {
    id: 1,
    image: 1
  },
  {
    id: 1,
    image: 1
  },
  {
    id: 1,
    image: 1
  },
  {
    id: 1,
    image: 1
  },
  {
    id: 1,
    image: 1
  },
  {
    id: 1,
    image: 1
  }
];

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
  align-items: flex-end;
  justify-content: center;
  overflow-y: scroll;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 300px;
  width: 85%;
  height: 90%;
  column-gap: 60px;
  row-gap: 60px;
`;

const GridCell = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;

  :nth-child(even) {
    margin-top: 60px;
  }

  background: red;
`;

const StyledImage = styled(motion.img)`
  width: 100%;
  height: 100%;
`;

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const frameVariants = {
  initial: {
    scale: 0.5,
    opacity: 0
  },
  enter: { scale: 1, opacity: 1, transition: { duration: 1.5, ...transition } },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  },
  hover: { scale: 0.95 }
};

const imageVariants = {
  hover: { scale: 1.15 }
};

const ProjectsView = () => {
  return (
    <>
      <motion.div>
        <StyledLeft>
          <StyledTitle> Projects</StyledTitle>
        </StyledLeft>
        <StyledRight>
          <Grid
            initial="initial"
            animate="enter"
            exit="exit"
            variants={{
              exit: { transition: { staggerChildren: 0.1 } },
              enter: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {projects.map(item => (
              <GridCell
                whileHover="hover"
                variants={frameVariants}
                transition={transition}
              >
                <Link to="/details/1">
                  <StyledImage
                    src="https://i.picsum.photos/id/0/300/300.jpg"
                    alt="zdjecie"
                    whileHover="hover"
                    variants={imageVariants}
                    transition={transition}
                  />
                </Link>
              </GridCell>
            ))}
          </Grid>
        </StyledRight>
      </motion.div>
    </>
  );
};

export default ProjectsView;
