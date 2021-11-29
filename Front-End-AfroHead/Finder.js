import Page from './Page'
import { Input, List, Space } from 'antd'
import { LikeOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { getAllBarbers, getBarbersByLocation } from '../api/barber';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Finder = () => {
  const [barbers, setBarbers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  // useEffect(() => {
  //   setBarbers(getAllBarbers())
  // }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm !== "") {
        const res = await getBarbersByLocation(searchTerm)
        console.log(res);
        setBarbers(res)
      }


      // setBarbers(getAllBarbers())
      // Send Axios request here
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  return (
    <Page style={{height: '100%'}}>
      <Input style={{margin: '0 20px', width: '50%'}} placeholder="Busque pela localização" onChange={(e) => setSearchTerm(e.target.value)} />
      <List
      itemLayout="vertical"
      size="large"
      dataSource={barbers}
      renderItem={item => (
        <List.Item
          key={item.nome_empresa}
          actions={[
            <IconText icon={LikeOutlined} text={item.Nota} key="list-vertical-like-o" />,
          ]}
          extra={
            <div style={{width: 400, overflow: 'hidden', height: 200}}>
              <img
              style={{width: "100%"}}
              alt="logo"
              src={item.url_logomarca}
            />
            </div>
          }
        >
          <List.Item.Meta
            title={<a href={item.href}>{item.nome_usuario + item.sobrenome_usuario}</a>}
            description={item.descricao}
          />
          {item.logradouro}
        </List.Item>
      )}
    />
    </Page>
  );
}

export default Finder;