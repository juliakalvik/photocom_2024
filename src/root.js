import { Router, Route, RootRoute } from "@tanstack/react-router";

import JobsComponent from "./pages/AllJobs";
import Root from "./App";
import NewJobComponent from "./pages/NewJob";
import HomePage from "./pages/Home";
import AllPhotographers from "./pages/AllPhotographers";
import MyJobs from "./pages/MyJobs";
import OneJob from "./components/oneJob";
import JobSpecificPage from "./pages/OneJob";
import ProfilePage from "./pages/Profile";

const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const allJobsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/alljobs",
  component: JobsComponent,
});

const oneJobRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/onejob",
  component: JobSpecificPage,
});

const allPhotographersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/allphotographers",
  component: AllPhotographers,
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/home",
  component: HomePage,
});

const newJobRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/newjob",
  component: NewJobComponent,
});

const myJobsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/myjobs",
  component: MyJobs,
});

const profileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: ProfilePage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  newJobRoute,
  allJobsRoute,
  allPhotographersRoute,
  homeRoute,
  myJobsRoute,
  oneJobRoute,
  profileRoute,
]);

export const router = new Router({ routeTree });

export default router;
