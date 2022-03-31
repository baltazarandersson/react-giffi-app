import { useEffect } from "react";
import { useRoute } from "wouter";

export function useSEO({ title, description }) {
  const [home, homeParams] = useRoute("/");

  useEffect(() => {
    if (title) {
      if (home) {
        document.title = "Home - GIFFI";
      } else {
        document.title = `${title} - GIFFI`;
      }
    }
  }, [title, home]);

  useEffect(() => {
    if (description) {
      if (home) {
        document
          .querySelector("meta[name='description']")
          .setAttribute(
            "content",
            `GIFFI is your search engine to find any GIF you can imagine, just search for it, and choose your favourite GIF. `
          );
      } else {
        document
          .querySelector("meta[name='description']")
          .setAttribute("content", description);
      }
    }
  }, [description, home]);
}
