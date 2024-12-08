"use client";
import React, { useEffect } from "react";
import { getWakeUpSlots } from "../../services/get-wake-up-slots/get-wake-up-slots";
import { formatTime } from "../../services/format-time/format-time";
import { Button } from "@components/Button/Button";
import { WakeUpCard } from "./components/WakeUpCard/WakeUpCard";
import Image from "next/image";

const isFirstTwoItems = (index: number) => index < 2;

export const WakeUpTimeList = () => {
  const [wakeUpSlots, setWakeUpSlots] = React.useState<Date[]>([]);

  const getWakeUpTimeList = () => {
    const dates = getWakeUpSlots();
    setWakeUpSlots(dates);
  };
  const isHour12Format = true;
  useEffect(() => {
    getWakeUpTimeList();
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap gap-5 justify-between">
        {wakeUpSlots.map((item, index) => (
          <WakeUpCard
            key={item.toLocaleTimeString()}
            time={formatTime(item, isHour12Format)}
            size={isFirstTwoItems(index) ? "large" : "small"}
          />
        ))}
      </div>

      <div className="flex w-full items-center justify-center my-6">
        <Button
          onClick={getWakeUpTimeList}
          variant="rounded"
          label={
            <Image
              src="/icons/refresh-icon.svg"
              width="24"
              height="24"
              alt="refresh icon"
            />
          }
        />
      </div>
    </>
  );
};
