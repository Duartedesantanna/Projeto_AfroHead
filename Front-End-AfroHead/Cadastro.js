import './Cadastro.css'
import { Form, Input, InputNumber, Button, message } from 'antd';


import Page from './Page'
import FileUpload from '../components/FileUpload'
import axios from 'axios';
import { useState } from 'react';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Nova = () => {
  const onFinish = (values) => {
    axios.post('https://api-afrohead.herokuapp.com/empresa', {...values.user, url_logomarca: imageUrl})
    .then(function () {
      message.success("Cadastro concluido com sucesso")
    })
    .catch(function (error) {
      message.error(error.response.data.mensagem)
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [imageUrl, setImageUrl] = useState("")

  return (
    <Page>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item className="String" name={['user', 'nome_usuario']} label="Nome" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item className="String" name={['user', 'sobrenome_usuario']} label="Sobrenome" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item className="String" name={['user', 'email']} label="Email" rules={[{ type: 'email', required:true }]}>
          <Input />
        </Form.Item>
        <h1> Dados da Empresa</h1>
        <Form.Item className="String" name={['user', 'nome_empresa']} label="Nome da Empresa" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item className="String" name={['user', 'telefone']} label="Telefone" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item className="String" name={['user', 'descricao']} label="Descricao">
          <Input.TextArea />
        </Form.Item>
        <Form.Item className="String" name={['user', 'url_instagram']} label="Instagram" rules={[{ type: 'url', warningOnly: true }]}>
          <Input />
        </Form.Item>
        <Form.Item className="String" name={['user', 'url_facebook']} label="Facebook" rules={[{ type: 'url', warningOnly: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="url_logomarca"
          label="Upload"
          valuePropName="fileList"
          // getValueFromEvent={normFile}
          // extra="longgggggggggggggggggggggggggggggggggg"
        >
          <FileUpload onUpload={(url) => setImageUrl(url)}/>
        </Form.Item>
        <h1> Endereco</h1>
        <Form.Item className="String" name={['user', 'logradouro']} label="Logradouro" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item className="String" name={['user', 'complemento']} label="Complemento">
          <Input />
        </Form.Item>
        <Form.Item className="cep" name={['user', 'cep']} label="CEP" rules={[{ required: true, min: 8, max: 8 }]}>
          <Input />
        </Form.Item>
        <Form.Item className="String" name={['user', 'bairro']} label="Bairro" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item className="String" name={['user', 'cidade']} label="Cidade" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item className="String" name={['user', 'estado']} label="Estado" rules={[{ required: true, max: 2, min: 2 }]}>
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button className="button"type="primary" htmlType="submit">
            Cadastrar
          </Button>
        </Form.Item>
      </Form>
      
      
    </Page>
  );
}

export default Nova;