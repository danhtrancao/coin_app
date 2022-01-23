export function objToQueryString(query) {
  const keyValuePairs = []
  for (const key in query) {
    keyValuePairs.push(
      encodeURIComponent(key) + '=' + encodeURIComponent(query[key]),
    )
  }
  return keyValuePairs.join('&')
}

export function convertStringToCurrency(str) {
  return `$${str
    .toString()
    .replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')}`
}

export function convertStringToCurrencyDecimal(str) {
  return `$${str.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
}
