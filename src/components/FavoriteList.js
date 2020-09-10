import React from 'react';
import { List, Skeleton, Typography } from 'antd';

const { Title } = Typography

const FavoriteList = () => {
  return (
    <List
      header={<Title level={2}>My favorite list</Title>}
      style={{ boxShadow: "1px 1px 5px lightgrey", backgroundColor: "white" }}
      itemLayout="vertical"
      // dataSource={}
      bordered
      renderItem={item => (
        <List.Item
          actions={[<a key="list-loadmore-edit">Quitar</a>]}
          extra={
            <img
              width={70}
              alt="logo"
              src={item.Poster}
            />
          }
        >
          <Skeleton title={false} loading={item.loading} active>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.Title}</a>}
              description={item.Genre}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  )
}

export default FavoriteList