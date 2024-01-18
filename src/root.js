import { Router, Route, RootRoute } from "@tanstack/react-router";

import JobsComponent from "./pages/AllJobs";
import Root from "./App";
import NewJobComponent from "./pages/NewJob";
import HomePage from "./pages/Home";
import AllPhotographers from "./pages/AllPhotographers";
import MyJobs from "./pages/MyJobs";

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

const routeTree = rootRoute.addChildren([
  indexRoute,
  newJobRoute,
  allJobsRoute,
  allPhotographersRoute,
  homeRoute,
  myJobsRoute,
]);

export const router = new Router({ routeTree });

export default router;
