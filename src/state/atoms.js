import { atom } from 'recoil';

export const FavoriteListState = atom({
  key: 'FavoriteListState',
  default: []
})

export const SearchTermState = atom({
  key: 'SearchTermState',
  default: null
})