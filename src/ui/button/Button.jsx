import React from "react";
import { twMerge } from "tailwind-merge";

export default function ButtonUI({
  children,
  onClick,
  className,
  disabled,
  type,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={
        className
          ? className
          : twMerge(
              "ui-button mx-5 mb-5 mt-5 h-[50px] w-[328px] rounded-md bg-bgColor text-white hover:bg-none" +
            "  hover:text-[#fff] disabled:cursor-not-allowed disabled:bg-[#1d838eb4] ",
            )
      }
    >
      {children}
    </button>
  );
}
