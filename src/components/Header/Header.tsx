"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

  const handleNavigateBack = () => {
    router.back();
  };

  return (
    <div className="flex relative flex-col justify-center items-center my-6 gap-4">
      <button onClick={handleNavigateBack} className="absolute left-0">
        <Image
          src="/icons/arrow-back-icon.svg"
          width="24"
          height="24"
          alt="Arrow back icon"
        />
      </button>
      <Image
        src="/icons/header-icon.svg"
        width="264"
        height="108"
        alt="WakeUp Fine"
      />
      <h1 className="text-center font-light">
        Considering an average human takes 15 min to fall asleep, you should
        wake up at:
      </h1>
    </div>
  );
};
