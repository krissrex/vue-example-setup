let clockFunction = () => new Date();

export function setClock(clock: () => Date) {
  clockFunction = clock;
}

export function getCurrentDate() {
  return clockFunction();
}
