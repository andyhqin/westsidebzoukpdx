import { useEffect } from "react";
import { site } from "./config/site";
import { routes } from "./routes";
import { usePath } from "./router/router";
import { Layout } from "./components/layout/Layout";
import { NotFoundPage } from "./pages/NotFoundPage";

/** Picks the page for the current URL and wraps it in the site layout. */
export function App() {
  const path = usePath();
  const route = routes.find((r) => r.path === path);
  const Page = route?.component ?? NotFoundPage;
  const title = route?.title ?? "Page not found";

  useEffect(() => {
    document.title = path === "/" ? site.name : `${title} | ${site.name}`;
  }, [path, title]);

  return (
    <Layout>
      <Page />
    </Layout>
  );
}
