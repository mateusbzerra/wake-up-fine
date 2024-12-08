const NUMBER_OF_SLEEPING_CYCLES = 6;
const SLEEPING_CYCLES_DURATION_IN_MINUTES = 90;
const MINUTES_TO_FALL_ASLEEP = 15;

export const getWakeUpSlots = () => {
  const wakeUpSlots: Date[] = [];

  Array.from({ length: NUMBER_OF_SLEEPING_CYCLES }).forEach(
    (_, currentSleepingCycle) => {
      const currentDateTime = new Date();
      const standardSleepCycle =
        SLEEPING_CYCLES_DURATION_IN_MINUTES * (currentSleepingCycle + 1);

      currentDateTime.setMinutes(
        currentDateTime.getMinutes() +
          standardSleepCycle +
          MINUTES_TO_FALL_ASLEEP
      );

      wakeUpSlots.push(currentDateTime);
    }
  );

  return wakeUpSlots.reverse();
};
