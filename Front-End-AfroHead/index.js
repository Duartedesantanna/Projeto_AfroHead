import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import axios from 'axios';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
  
}

const uploadImage = options => {
  const { onSuccess, onError, file } = options;
  getBase64(file, data => 
    axios
      .post("https://api-afrohead.herokuapp.com/upload", {nome: file.name, imagem: data})
      .then(res => {
        onSuccess(res);
      })
      .catch(err=>{
        const error = new Error('Some error');
        onError({event:error});
        message.error(err.response.data.mensagem)
      })
  )
}

class FileUpload extends React.Component {
  state = {
    loading: false,
  };

  handleChange = ({ file, fileList, event }) => {
    // console.log(file, fileList, event)
    this.setState({defaultFileList: fileList})

    if (file.status === 'done') {
      this.props.onUpload(file.response.data.urlImagem)
      message.success(`${file.name} inserida com sucesso`);
    } else if (file.status === 'error') {
      message.error('Falha ao inserir imagem');
    }
  };

  render() {
    const { loading, imageUrl, defaultFileList } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <Upload
        name="imagem"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        defaultFileList={defaultFileList}
        customRequest={uploadImage}
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    );
  }
}

export default FileUpload