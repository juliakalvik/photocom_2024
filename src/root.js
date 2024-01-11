import { Router, Route, RootRoute } from "@tanstack/react-router";

import JobsComponent from "./pages/AllJobs";
import Root from "./App";

const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: JobsComponent,
});

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = new Router({ routeTree });

export default router;
