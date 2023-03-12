export function groupByKey<T>(param: T[], groupKey: keyof T) {
  return param.reduce((acc, currentValue) => {
    const dept = currentValue[groupKey];

    if (!acc[dept]) {
      acc[dept] = [currentValue];
    } else {
      acc[dept].push(currentValue);
    }

    return acc;
  }, {} as any);
}
