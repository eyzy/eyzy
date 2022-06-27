export function parseWidth(width: any): string | null {
  const parsed = parseInt(width, 10)

  if (!isNaN(parsed)) {
    return `${parsed}px`
  }

  return null
}
