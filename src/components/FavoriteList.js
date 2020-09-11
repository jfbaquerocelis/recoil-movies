import React from 'react';
import { useRecoilValue } from 'recoil';
import { List, Typography } from 'antd';
import { FavoriteListState } from '../state/atoms';

const { Title } = Typography

const FavoriteList = () => {
  const favoriteList = useRecoilValue(FavoriteListState)

  return (
    <List
      header={<Title level={2}>My favorite list</Title>}
      style={{ boxShadow: "1px 1px 5px lightgrey", backgroundColor: "white" }}
      itemLayout="vertical"
      dataSource={favoriteList}
      bordered
      renderItem={item => (
        <List.Item
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

export default FavoriteList