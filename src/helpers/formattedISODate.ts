export function formattedISODate(dateToFormat: Date) {
  const formattedDate = dateToFormat.toISOString();
  const ISODate = formattedDate.split('T')[0];
  return ISODate;
}
