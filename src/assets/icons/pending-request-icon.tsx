import { FC, SVGProps } from "react";

export const PendingRequestIcon: FC<SVGProps<SVGSVGElement>> = ({
  ...rest
}) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <path
        d="M0 2.75006V12.3751H22V2.75006H0ZM1.375 4.12506H20.625V11.0001H1.375V4.12506ZM2.75 6.87506H13.75V5.50006H2.75V6.87506ZM6.875 9.62506H13.75V8.25006H6.875V9.62506ZM15.125 9.62506H19.25V5.50006H15.125V9.62506ZM16.5 6.87506H17.875V8.25006H16.5V6.87506ZM19.25 13.7501H2.75V15.1251H19.25V13.7501ZM16.5 16.5001H5.5V17.8751H16.5V16.5001Z"
        fill="currentColor"
      />
    </svg>
  );
};
