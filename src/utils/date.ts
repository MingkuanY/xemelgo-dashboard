/**
 * Format a date to display in timestamp column.
 *
 * @param dateString the date in string format to convert
 * @returns date formatted in "4:45 PM Jul 19" convention
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  // Format the time (hour and minute)
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const time = new Intl.DateTimeFormat('en-US', timeOptions).format(date);

  // Format the date (month and day)
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(date);

  // Combine time and date without a comma
  return `${time} ${formattedDate}`;
}