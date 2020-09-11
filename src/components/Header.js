import React from 'react';
import { useRecoilValueLoadable, useRecoilState } from 'recoil';
import { VideoCameraOutlined } from '@ant-design/icons';
import { PageHeader, Input, Descriptions } from 'antd';
import { moviesQuery } from '../state/selectors';
import { SearchTermState } from '../state/atoms';

const { Search } = Input

const Header = () => {
  const [searchTerm, setSearchTerm] = useRecoilState(SearchTermState)
  const results = useRecoilValueLoadable(moviesQuery)

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
            onSearch={value => setSearchTerm(value)}
            size="large"
            loading={results.state === 'loading'}
          />
        ]}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Search Term">{searchTerm}</Descriptions.Item>
          <Descriptions.Item label="Results">{results.contents.total}</Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </div>
  )
}

export default Header