import React from "react";
import "./styles.scss";
import { Switch, Route, useLocation } from "react-router-dom";
import HomeView from "./views/HomeView";
import Navbar from "./components/Navbar/Navbar";
import ProjectsView from "./views/ProjectsView";
import ProjectDetailsView from "./views/ProjectDetailsView";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/home" component={HomeView} />
          <Route path="/projects" component={ProjectsView} />
          <Route path="/details/:id" component={ProjectDetailsView} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}
