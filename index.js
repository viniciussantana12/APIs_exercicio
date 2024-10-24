class Carro {
    constructor(Marca, Modelo, Categoria, Ano, Quilometragem, Valor) {
      this.Marca = Marca;
      this.Modelo = Modelo;
      this.Categoria = Categoria;
      this.Ano = Ano;
      this.Quilometragem = Quilometragem;
      this.Valor = Valor;
    }
  }
  
  // Criando um objeto da classe
  const carro = new Carro('chevrolet', 'celta', 'compacto', 2023, 30000, 40000);
  




// Função GET
function Get() {
    return fetch('https://apigenerator.dronahq.com/api/jQIrTpJi/carro')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Erro ao fazer GET:', error));
  }
  
  // Função POST, PUT, DELETE
  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'PUT', // Altere para 'PUT', 'DELETE', etc.
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });
  
    return response.json(); // Retorna a resposta da API
  }
  
  // Usando POST com o objeto 'carro'
  postData('https://apigenerator.dronahq.com/api/jQIrTpJi/carro/1', carro)
    .then(data => console.log(data))
    .catch(error => console.error('Erro ao fazer POST:', error));
  