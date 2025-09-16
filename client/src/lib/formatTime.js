export default function formatTime(mins) {
  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;

  return `${hours}h ${remainingMins}h`;
}
