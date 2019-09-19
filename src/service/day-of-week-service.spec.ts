import { getDayOfWeek, DayOfWeek } from "./day-of-week-service";
import { setClock } from "./clock-service";

describe("Day of week service", () => {
  describe("Current day of week", () => {
    it.skip("Should return Monday", () => {
      forceMonday();
      const actual = getDayOfWeek();
      expect(actual).toBe("Monday");
    });

    it("Should return Thursday", () => {
      forceThursday();
      const actual = getDayOfWeek();
      expect(actual).toBe("Thursday");
    });

    it.skip("Should return Sunday", () => {
      forceSunday();
      const actual = getDayOfWeek();
      expect(actual).toBe("Sunday");
    });
  });
});

function forceMonday() {
  setClock(() => new Date(TIME_MONDAY));
}

function forceThursday() {
  setClock(() => new Date(TIME_THURSDAY));
}

function forceSunday() {
  setClock(() => new Date(TIME_SUNDAY));
}

const TIME_MONDAY = 1568630738168;
const TIME_THURSDAY = 1568889938168;
const TIME_SUNDAY = 1569149138168;
