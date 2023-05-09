type styles = { [key: string]: string };

export const classStyle =
  (styles: styles) =>
  (classes: string[] | string): string => {
    const classNames = Array.isArray(classes) ? classes : classes.split(" ");

    return classNames.map((c) => styles[c]).join(" ");
  };

export function getTraveledDistance(start: number, finish: number) {
  const distance = finish - start;

  return distance;
}

export function getRatio(width: number, x: number) {
  const ratio = 1 - x / width;

  return ratio;
}

export function getEvent(event: React.TouchEvent | React.MouseEvent) {
  return "changedTouches" in event ? event.changedTouches[0] : event;
}
