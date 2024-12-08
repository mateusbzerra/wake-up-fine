import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: React.ReactNode;
  variant?: "rounded" | "default";
}

export const Button = ({ label, variant = "default", ...props }: Props) => {
  const isRoundedButton = variant === "rounded";

  const buttonClassname = clsx(
    "h-20 bg-[#0b0b0b] text-white font-bold text-lg shadow-xl flex items-center justify-center hover:opacity-60",
    {
      "w-20 rounded-full": isRoundedButton,
      "w-full rounded-3xl": !isRoundedButton,
    }
  );

  return (
    <button type="button" {...props} className={buttonClassname}>
      {label}
    </button>
  );
};
