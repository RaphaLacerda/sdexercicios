import axios from 'axios';

const loadColaboradores = () => {
   return axios.get('http://localhost:3001/');
};

const saveColaboradores = () => {
   return axios.post('http://localhost:3001/');
};

const updateColaboradores = () => {
   return axios.put('http://localhost:3001/', {});
};

const deleteColaboradores = (id) => {
   return axios.delete('http://localhost:3001/' + id);
};

export default { updateColaboradores, saveColaboradores, loadColaboradores, deleteColaboradores  }

//export default updateColaboradores
//module.exports = updateColaboradores