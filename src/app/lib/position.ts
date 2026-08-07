/** Editorial position notation such as `03`. */
export function formatPosition(index: number): string {
  return String(index + 1).padStart(2, "0");
}

/** Full position notation such as `03 / 06`. */
export function formatPositionOf(index: number, total: number): string {
  return `${formatPosition(index)} / ${String(total).padStart(2, "0")}`;
}
