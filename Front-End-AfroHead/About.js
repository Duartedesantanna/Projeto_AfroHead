import { Space, Card } from 'antd';
import Page from './Page'



const About = () => (
  <Page style={{height: '100%'}}>
    <Space direction="vertical">
    <Card title="BLACKHEAD" style={{ width: 300 }}>
      <p>Quem somos</p>
      <p>Somos uma plataforma onde profissionais especializados em cabelo afro e pessoas pretas se conectam. Nascemos da necessidade de encontrar com facilidade profissionais que entendam a complexibilidade e significado do cabelo afro.
</p>
    </Card>
    </Space>
  </Page>
);

export default About;