import React, { FC, SVGProps } from "react";

const CollapseIndicatorIcon: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <rect
        x="0.5"
        y="1.07324"
        width="18"
        height="16.2727"
        stroke="currentColor"
      />
      <path
        d="M14.0341 9.85604H10.1477V13.7424H8.85225V9.85604H4.96588V8.56059H8.85225V4.67422H10.1477V8.56059H14.0341V9.85604Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CollapseIndicatorIcon;
