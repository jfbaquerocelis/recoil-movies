import React from 'react';
import { useRecoilValueLoadable, useRecoilCallback, useRecoilValue } from 'recoil';
import { List, Spin, Typography, Button } from 'antd';
import { moviesQuery } from '../state/selectors';
import { FavoriteListState } from '../state/atoms';

const { Title } = Typography

const Movies = () => {
  const results = useRecoilValueLoadable(moviesQuery)
  const favoriteList = useRecoilValue(FavoriteListState)

  const addFavorite = useRecoilCallback(({ set }) => {
    return (item) => {
      const favorite = favoriteList.find((favorite) => favorite.imdbID === item.imdbID)

      if (favorite) return

      set(FavoriteListState, [...favoriteList, item])
    }
  })

  if (results.state === 'loading') return <Spin size="large" />

  return (
    <List
      header={<Title level={2}>Movie results</Title>}
      style={{ boxShadow: "1px 1px 5px lightgrey", backgroundColor: "white" }}
      itemLayout="vertical"
      dataSource={results.contents.movies}
      bordered
      renderItem={item => (
        <List.Item
          actions={[
            <Button
              onClick={() => {
                addFavorite(item)
              }}
            >
              Add to favorites
            </Button>
          ]}
          extra={
            <img
              width={70}
              alt="logo"
              src={item.Poster}
            />
          }
        >
          <List.Item.Meta
            title={item.Title}
            description={item.Year}
          />
        </List.Item>
      )}
    />
  )
}

export default Movies