import React from 'react';
import { List, Skeleton, Typography } from 'antd';

const { Title } = Typography

const list = [
  {
    Title: "Guardians of the Galaxy Vol. 2",
    Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    Genre: "Action, Adventure, Comedy, Sci-Fi"
  },
  {
    Title: "Guardians of the Galaxy Vol. 2",
    Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    Genre: "Action, Adventure, Comedy, Sci-Fi"
  }
]

const Movies = () => {
  return (
    <List
      header={<Title level={2}>Movie results</Title>}
      style={{ boxShadow: "1px 1px 5px lightgrey", backgroundColor: "white" }}
      itemLayout="vertical"
      dataSource={list}
      bordered
      renderItem={item => (
        <List.Item
          actions={[<a key="list-loadmore-edit">Add to favorites</a>]}
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

export default Movies