/**
 * Formats a date object into a string according to the given format.
 * @param {Date} date - The date object to format.
 * @param {string} [format='YYYY-MM-DD'] - The format string.
 * @returns {string} The formatted date string.
 */
window.formatDate$ = (date, format = 'YYYY-MM-DD') => {
  const
    padZero = num => (num < 10 ? '0' : '') + num,
    year = date.getFullYear(),
    month = padZero(date.getMonth() + 1),
    day = padZero(date.getDate()),
    hours = padZero(date.getHours()),
    minutes = padZero(date.getMinutes()),
    seconds = padZero(date.getSeconds())

  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
};