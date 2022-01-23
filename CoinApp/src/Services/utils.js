import { t } from 'i18next'

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
  return `$${str?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
}

export function convertStringToCurrencyString(num) {
  if (num === 0) {
    return '?'
  }

  if (Math.floor(num / 1000000000) > 0) {
    const value = num / 1000000000
    return (
      value.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') +
      ' ' +
      t('currency.billion')
    )
  } else if (Math.floor(num / 1000000) > 0) {
    const value = num / 1000000
    return (
      value.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') +
      ' ' +
      t('currency.milion')
    )
  } else if (Math.floor(num / 1000) > 0) {
    const value = num / 1000
    return (
      value.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') +
      ' ' +
      t('currency.thousand')
    )
  }

  return '?'
}
