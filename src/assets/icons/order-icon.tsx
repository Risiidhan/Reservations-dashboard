import { FC, SVGProps } from "react";

export const OrderIcon: FC<SVGProps<SVGSVGElement>> = ({ ...rest }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <mask
        id="mask0_63_22857"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="0"
        width="18"
        height="22">
        <path
          d="M15.1479 3.20839H17.4166C17.6597 3.20839 17.8929 3.30497 18.0648 3.47687C18.2367 3.64878 18.3333 3.88194 18.3333 4.12506V19.2501C18.3333 19.4932 18.2367 19.7263 18.0648 19.8982C17.8929 20.0701 17.6597 20.1667 17.4166 20.1667H4.58329C4.34018 20.1667 4.10702 20.0701 3.93511 19.8982C3.7632 19.7263 3.66663 19.4932 3.66663 19.2501V4.12506C3.66663 3.88194 3.7632 3.64878 3.93511 3.47687C4.10702 3.30497 4.34018 3.20839 4.58329 3.20839H7.79163V4.58339H14.2083V3.20839H15.1479Z"
          fill="#555555"
          stroke="white"
          strokeWidth="1.83333"
          strokeLinejoin="round"
        />
        <path
          d="M12.375 8.70839L8.70829 12.3755H13.2935L9.62496 16.0422M7.79163 1.83339H14.2083V4.58339H7.79163V1.83339Z"
          stroke="white"
          strokeWidth="1.83333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>
      <g mask="url(#mask0_63_22857)">
        <path d="M0 6.10352e-05H22V22.0001H0V6.10352e-05Z" fill="#3D85F7" />
      </g>
    </svg>
  );
};
