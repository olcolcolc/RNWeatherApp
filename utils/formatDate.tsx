export const formatWeeklyForcastDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
};

export const formatCurrentDate = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
};

export const getShortWeekday = (date: string) => {
  return new Date(date).toLocaleString("en-US", { weekday: "short" });
};
