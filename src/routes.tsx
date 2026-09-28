/**
 * THE PAGE LIST. To add a page:
 *   1. Create a component in src/pages/ (copy an existing one as a starting point).
 *   2. Add an entry below. Set `navLabel` to show it in the header menu.
 * Order here = order in the menu.
 */
import type { ComponentType } from "react";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ClassesPage } from "./pages/ClassesPage";
import { NewHerePage } from "./pages/NewHerePage";
import { CodeOfConductPage } from "./pages/CodeOfConductPage";

export type Route = {
  path: string;
  /** Browser tab title. */
  title: string;
  /** Label in the header menu. Omit to keep the page out of the menu. */
  navLabel?: string;
  component: ComponentType;
};

export const routes: Route[] = [
  { path: "/", title: "Home", navLabel: "Home", component: HomePage },
  { path: "/about", title: "About", navLabel: "About", component: AboutPage },
  { path: "/classes", title: "Classes & Events", navLabel: "Classes & Events", component: ClassesPage },
  { path: "/new-here", title: "New Here?", navLabel: "New Here?", component: NewHerePage },
  { path: "/code-of-conduct", title: "Code of Conduct", navLabel: "Code of Conduct", component: CodeOfConductPage },
];
