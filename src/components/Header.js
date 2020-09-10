import React from 'react';
import { VideoCameraOutlined } from '@ant-design/icons';
import { PageHeader, Input, Descriptions } from 'antd';

const { Search } = Input

const Header = () => {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        title="Recoil Movies"
        subTitle="My favorite movies"
        avatar={{ icon: <VideoCameraOutlined />, style: { backgroundColor: 'blue' } }}
        extra={[
          <Search
            placeholder="Search your favorite movie"
            enterButton
            onSearch={value => console.log(value)}
            size="large"
          />
        ]}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Search Term"></Descriptions.Item>
          <Descriptions.Item label="Results"></Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </div>
  )
}

export default Header