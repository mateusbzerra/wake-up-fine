import clsx from "clsx";
import Image from "next/image";

interface Props {
  time: string;
  size?: "small" | "large";
  imageUrl: string;
}

export const WakeUpCard = ({ time, size = "small", imageUrl }: Props) => {
  const isSmallSize = size === "small";
  const isLargeSize = size === "large";

  const className = clsx("w-full h-24", {
    "w-[45%] h-24": isSmallSize,
    "h-36": isLargeSize,
  });

  const fontClassname = clsx("inline-block font-light flex-1", {
    "text-3xl": isSmallSize,
    "text-6xl": !isSmallSize,
  });

  return (
    <button
      className={`flex relative items-center bg-[#0a0a0a] border-4 rounded-3xl border-[#191919] hover:border-[#4a4a4a] ${className}`}
    >
      <Image
        alt="emoji"
        src={imageUrl}
        width={isSmallSize ? "72" : "96"}
        height={isSmallSize ? "72" : "96"}
        className="ml-2 absolute"
      />
      <h2 className={fontClassname}>{time}</h2>
    </button>
  );
};
