import './Cadastro.css'
import { Form, Input, InputNumber, Button, message } from 'antd';
import Page from './Page'
import axios from 'axios';

const Contact = () => {
  const onFinish = (values) => {
    console.log(values);
    axios.post('https://api-afrohead.herokuapp.com/contatos', {...values.user})
    .then(function () {
      message.success("Cadastro concluido com sucesso")
    })
    .catch(function (error) {
      message.error(error.response.data.mensagem)
    });
  };

  return (
    <Page style={{height: '100%'}}>
      <h1>Contato</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item name={['user', 'nome_usuario']} label="Nome" rules={[{ type: 'string' }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'telefone']} label="Telefone" rules={[{ type: 'string', min: 9, max: 11 }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'mensagem']} label="Mensagem" rules={[{required:true}]} >
          <Input.TextArea />
        </Form.Item>
        <Button className ="button" type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form>
    </Page>
    );
}

export default Contact;