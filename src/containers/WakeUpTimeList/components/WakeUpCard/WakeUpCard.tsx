import clsx from "clsx";
import Image from "next/image";

interface Props {
  time: string;
  is12hFormat?: boolean;
  size?: "small" | "large";
}

export const WakeUpCard = ({
  time,
  is12hFormat = false,
  size = "small",
}: Props) => {
  const isSmallSize = size === "small";

  const className = clsx("w-full", {
    "w-[calc(50%-1rem)]": isSmallSize,
  });

  const fontClassname = clsx("inline-block font-extralight flex-1", {
    "text-3xl": isSmallSize,
    "text-6xl": !isSmallSize,
  });

  return (
    <button
      className={`flex items-center h-24 bg-[#0a0a0a] border-4 rounded-3xl border-[#191919] hover:border-[#4a4a4a] ${className}`}
    >
      <Image
        alt="person on the bed getting up"
        src="/icons/get-up-icon.svg"
        width={isSmallSize ? "38" : "75"}
        height={isSmallSize ? "34" : "68"}
        className="ml-5"
      />
      <h2 className={fontClassname}>
        {time}{" "}
        {is12hFormat && (
          <span className="font-light text-xl ml-[-16px]">AM</span>
        )}
      </h2>
    </button>
  );
};
