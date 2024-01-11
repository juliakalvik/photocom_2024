import { Router, Route, RootRoute } from "@tanstack/react-router";

import JobsComponent from "./pages/AllJobs";
import Root from "./App";
import NewJobComponent from "./pages/NewJob";

const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: JobsComponent,
});

const newJobRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/newjob",
  component: NewJobComponent,
});

const routeTree = rootRoute.addChildren([indexRoute, newJobRoute]);

export const router = new Router({ routeTree });

export default router;
