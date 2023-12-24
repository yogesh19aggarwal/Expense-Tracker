export function getSevenDaysBeforeDate(inputDate) {
  const newDate = new Date(inputDate);

  const currentDay = newDate.getDate();

  newDate.setDate(currentDay - 7);

  return newDate;
}
