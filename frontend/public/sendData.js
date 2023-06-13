function sendData(data, endpoint) {
  fetch(endpoint, {
  method: 'POST',
  mode: 'no-cors',
  headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    // A resposta será opaca (opaque) devido ao modo 'no-cors'
    // Você pode verificar response.status para ver se a solicitação foi bem-sucedida
  })
  .catch(error => {
    // Trate erros aqui
  });
}