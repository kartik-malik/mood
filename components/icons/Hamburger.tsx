import React, { SVGProps } from "react";

interface HamburgerProps extends SVGProps<SVGSVGElement> {
  fillColor?: string;
  strokeColor?: string;
}

const Hamburger = ({
  fillColor = "white",
  strokeColor = "red",
  ...props
}: HamburgerProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 18"
    {...props}
  >
    <path
      fill={fillColor}
      stroke={strokeColor}
      d="M1 1h18v2H1V1Zm6 7h12v2H7V8Zm-6 7h18v2H1v-2Z"
    />
  </svg>
);

export default Hamburger;
