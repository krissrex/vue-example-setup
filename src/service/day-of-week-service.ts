import { getCurrentDate } from "./clock-service";

export type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

function dayIntToName(day: number): DayOfWeek {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      throw new Error("Invalid argument: " + day);
  }
}

export function getDayOfWeek(): DayOfWeek {
  const date = getCurrentDate();
  const day = date.getDay();
  return dayIntToName(day);
}
