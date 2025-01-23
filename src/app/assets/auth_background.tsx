import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AUTH_Background = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 1600 800"
    className="transition-colors duration-300"
    {...props}
  >
    <rect className="fill-neutral-100 dark:fill-neutral-900" width={1600} height={800} />
    <g className="fill-opacity-60 dark:fill-opacity-40 transition-all duration-300">
      <polygon
        className="fill-teal-50 dark:fill-teal-950"
        points="800 100 0 200 0 800 1600 800 1600 200"
      />
      <polygon
        className="fill-teal-100 dark:fill-teal-900"
        points="800 200 0 400 0 800 1600 800 1600 400"
      />
      <polygon
        className="fill-teal-200 dark:fill-teal-800"
        points="800 300 0 600 0 800 1600 800 1600 600"
      />
      <polygon
        className="fill-teal-300 dark:fill-teal-700"
        points="1600 800 800 400 0 800"
      />
      <polygon
        className="fill-teal-400 dark:fill-teal-600"
        points="1280 800 800 500 320 800"
      />
      <polygon
        className="fill-teal-500 dark:fill-teal-500"
        points="533.3 800 1066.7 800 800 600"
      />
      <polygon
        className="fill-teal-600 dark:fill-teal-400"
        points="684.1 800 914.3 800 800 700"
      />
    </g>
  </svg>
);

export default AUTH_Background;