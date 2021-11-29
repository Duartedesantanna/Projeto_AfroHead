import { message } from "antd";
import axios from "axios";

export const getAllBarbers = () => [
  {
    nome_empresa: `Barbeiro #1`,
    url_logomarca: 'https://www.netvasco.com.br/news/noticias16/arquivos/20150501-2152-1-ded-black-com-a-equipe-ele-faz-a-cabeca-do-vasco.jpg', 
    cidade: 'São Paulo / Zona Sul',
    Nota: 4,
  },
  {
    nome_empresa: `Barbeiro #1`,
    url_logomarca: 'https://www.netvasco.com.br/news/noticias16/arquivos/20150501-2152-1-ded-black-com-a-equipe-ele-faz-a-cabeca-do-vasco.jpg', 
    cidade: 'São Paulo / Zona Sul',
    Nota: 4,
  },
  {
    nome_empresa: `Barbeiro #1`,
    url_logomarca: 'https://www.netvasco.com.br/news/noticias16/arquivos/20150501-2152-1-ded-black-com-a-equipe-ele-faz-a-cabeca-do-vasco.jpg', 
    cidade: 'São Paulo / Zona Sul',
    Nota: 4,
  },
]

export const getBarbersByLocation = (term) => axios.get(`https://api-afrohead.herokuapp.com/empresas/${term}`)
.then(function (response) {
  // handle success
  console.log(response);
  return response.data
})
.catch(function (error) {
  // handle error
  message.error(error.response.data.mensagem)
})
