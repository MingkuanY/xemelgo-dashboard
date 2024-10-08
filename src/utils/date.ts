export function formatDate(date: Date): string {
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