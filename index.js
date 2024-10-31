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
  
  
  const carro = new Carro('chevrolet', 'celta', 'compacto', 2023, 30000, 40000);
  





function Get() {
    return fetch('https://apigenerator.dronahq.com/api/jQIrTpJi/carro')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Erro ao fazer GET:', error));
  }
  
  
  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'PUT', 
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
  
    return response.json(); 
  }
  
  
  postData('https://apigenerator.dronahq.com/api/jQIrTpJi/carro/1', carro)
    .then(data => console.log(data))
    .catch(error => console.error('Erro ao fazer POST:', error));
  