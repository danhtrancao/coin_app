import { objToQueryString } from '@/Services/utils'
import { Config } from '@/Config'

export function getMarketList() {
  const queryString = objToQueryString({
    vs_currency: 'usd',
    order: 'market_cap_desc',
    per_page: '100',
    page: '1',
    sparkline: 'false',
  })
  return fetch(`${Config.API_URL}/coins/markets?${queryString}`)
    .then(data => {
      return data.json()
    })
    .catch(error => {
      console.error(error)
    })
}

export function getMarketCoin(id) {
  const url = `${Config.API_URL}/coins/${id}`
  return fetch(`${url}`)
    .then(data => {
      return data.json()
    })
    .catch(error => {
      console.error(error)
    })
}

export function getTrendingList() {
  return fetch(`${Config.API_URL}/search/trending`)
    .then(data => {
      return data.json()
    })
    .catch(error => {
      console.error(error)
    })
}

export function searchCoins(keyword) {
  return fetch(`${Config.API_URL}/search?query=${keyword}`)
    .then(data => {
      return data.json()
    })
    .catch(error => {
      console.error(error)
    })
}
