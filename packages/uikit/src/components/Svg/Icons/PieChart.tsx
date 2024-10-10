import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <mask
        id="mask0_2011_82726"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2011_82726)">
        <path
          d="M13 11H19.95C19.7 9.16667 18.9375 7.6125 17.6625 6.3375C16.3875 5.0625 14.8333 4.3 13 4.05V11ZM11 19.95V4.05C8.98333 4.3 7.3125 5.17917 5.9875 6.6875C4.6625 8.19583 4 9.96667 4 12C4 14.0333 4.6625 15.8042 5.9875 17.3125C7.3125 18.8208 8.98333 19.7 11 19.95ZM13 19.95C14.8333 19.7167 16.3917 18.9583 17.675 17.675C18.9583 16.3917 19.7167 14.8333 19.95 13H13V19.95ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6792 2.2625 15.8875 2.7875C17.0958 3.3125 18.1542 4.02917 19.0625 4.9375C19.9708 5.84583 20.6875 6.90417 21.2125 8.1125C21.7375 9.32083 22 10.6167 22 12C22 13.3667 21.7375 14.6583 21.2125 15.875C20.6875 17.0917 19.975 18.1542 19.075 19.0625C18.175 19.9708 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"
          fill="#A881FC"
        />
      </g>
    </Svg>
  );
};

export default Icon;
