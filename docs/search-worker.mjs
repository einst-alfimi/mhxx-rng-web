/*
 * Derived in part from apmnnn/mhxx-rng.
 * Original work Copyright (c) 2026 apmnnn, licensed under MIT.
 * HTML/JavaScript adaptation and additions Copyright (c) 2026 einst alfimi,
 * licensed under MIT. See ../LICENSE.
 */
import { listAround, searchExact, searchGreater } from "./core.mjs";

function sendError(message) {
  self.postMessage({
    type: "error",
    message,
  });
}

self.onmessage = (event) => {
  const data = event.data;

  try {
    if (data.type === "search") {
      const searchFn = data.mode === "greater" ? searchGreater : searchExact;
      const results = searchFn(data.query, data.limit, {
        progressInterval: 50000,
        onProgress(current, total) {
          self.postMessage({
            type: "progress",
            jobType: "search",
            current,
            total,
            mode: data.mode,
          });
        },
      });

      self.postMessage({
        type: "searchResult",
        mode: data.mode,
        limit: data.limit,
        results,
      });
      return;
    }

    if (data.type === "around") {
      const rows = listAround(data.kindIndex, data.originIndex, data.frame, data.radius);
      self.postMessage({
        type: "aroundResult",
        frame: data.frame,
        radius: data.radius,
        rows,
      });
      return;
    }

    sendError("Unknown worker message type.");
  } catch (error) {
    sendError(error instanceof Error ? error.message : String(error));
  }
};
