export const formatTime = (date: Date, isHour12?: boolean) => {
  return date.toLocaleTimeString("en-US", {
    hour12: isHour12 ?? false,
    hour: "2-digit",
    minute: "2-digit",
  });
};
