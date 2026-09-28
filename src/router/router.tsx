/**
 * A tiny hash-based router (URLs look like /#/classes).
 *
 * Why hash routing: GitHub Pages serves static files only, so a URL like
 * /classes would 404 on refresh. Hash URLs always load index.html, so every
 * page link and refresh works with zero server configuration.
 *
 * Routes themselves are defined in src/routes.tsx.
 */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

function readPath(): string {
  const raw = window.location.hash.replace(/^#/, "");
  const path = raw.split("?")[0] || "/";
  return path.startsWith("/") ? path : `/${path}`;
}

const PathContext = createContext<string>("/");

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(readPath);

  useEffect(() => {
    const onChange = () => {
      setPath(readPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return <PathContext.Provider value={path}>{children}</PathContext.Provider>;
}

/** The current path, e.g. "/classes". */
export function usePath(): string {
  return useContext(PathContext);
}

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  /** An internal path such as "/classes". */
  to: string;
};

/** Link to another page on this site. */
export function Link({ to, ...rest }: LinkProps) {
  const active = usePath() === to;
  return <a href={`#${to}`} aria-current={active ? "page" : undefined} {...rest} />;
}
