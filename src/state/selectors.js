import { selector } from 'recoil';
import { SearchTermState } from './atoms'

export const moviesQuery = selector({
  key: 'moviesQuery',
  get: async ({ get }) => {
    const searchTerm = get(SearchTermState)

    if (searchTerm) {
      try {
        const res = await fetch(`http://omdbapi.com/?s=${searchTerm}&apiKey=9bd5123d`)
        const { Search: movies, totalResults: total } = await res.json()
  
        return { movies, total }
      } catch (error) {
        console.error(error)
      }
    } else {
      return { movies: [], total: 0 }
    }

  }
})