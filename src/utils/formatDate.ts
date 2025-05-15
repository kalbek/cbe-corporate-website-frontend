export function formatDate(timestamp: number): string {
  const date = new Date(timestamp)

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const day = date.getDate()
  const year = date.getFullYear()
  const month = monthNames[date.getMonth()]

  const getOrdinal = (n: number) => {
    if (n > 3 && n < 21) return 'th'
    switch (n % 10) {
      case 1:
        return 'st'
      case 2:
        return 'nd'
      case 3:
        return 'rd'
      default:
        return 'th'
    }
  }

  const ordinal = getOrdinal(day)
  return `${month} ${day}${ordinal} ${year}`
}
