import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const hashId = hash.replace("#", "");
      const timeoutId = window.setTimeout(() => {
        document.getElementById(hashId)?.scrollIntoView({ block: "start" });
      }, 0);

      return () => window.clearTimeout(timeoutId);
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);

  return null;
}
