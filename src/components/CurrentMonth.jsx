
export const revalidate = 0; // ensures fresh on every request

export default function CurrentMonth() {
  const now = new Date();

  // Format month and year for Helsinki timezone
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',      // short month name, e.g., "Dec"
    year: '2-digit',     // 2-digit year, e.g., "25"
    timeZone: 'Europe/Helsinki'
  });

  const formatted = formatter.format(now); // e.g., "Dec 25"

  // Add apostrophe before year
  const display = formatted.replace(/\s(\d{2})$/, " ’$1"); // "Dec ’25"

  return <span>{display}</span>;
}
