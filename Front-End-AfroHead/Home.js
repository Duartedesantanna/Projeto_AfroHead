import home from '../assets/image/homeBranding.png'
import { Space, Card } from 'antd';
import Page from './Page'

const Home = () => (
  <Page style={{height: '100%'}}>
    <img src={home} alt="O black é power o black é meu " style={{maxWidth: '100%'}}/>
  </Page>
);

export default Home;