"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@components/Button/Button";
import { useRouter } from "next/navigation";

export const IntroBanner = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-3xl font-bold mb-2">Let&apos;s Wake-up fine!</h1>
      <p className="text-center text-slate-300 text-sm mb-6">
        Waking-up at the right time reduce your morning fatigue and make you
        awake fast
      </p>
      <Image
        src="/icons/undraw_mornings.svg"
        width={250}
        height={250}
        alt="Meditation icon"
        className="mb-20"
      />
      <Button
        label="Get started"
        onClick={() => {
          router.push("/wake-up");
        }}
      />
    </div>
  );
};
