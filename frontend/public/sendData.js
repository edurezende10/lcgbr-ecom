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
/* 
.html 
/carrinho.html

content/b2b/e-commerce-equipamentos/vitrine.html
content/b2b/e-commerce-equipamentos/vitrine/carrinho.html
content/b2b/e-commerce-equipamentos/vitrine/produtos/categoria.html?title=Inform%C3%A1tica&query=:categorySectionDisplay:allCategories:Inform%C3%A1tica.html



/content/b2b/e-commerce-equipamentos/vitrine.html 
/content/b2b/e-commerce-equipamentos/vitrine/carrinho.html 
/content/b2b/e-commerce-equipamentos/vitrine/produtos/categoria.html
/content/b2b/e-commerce-equipamentos/vitrine/produtos/categoria.html
/content/b2b/e-commerce-equipamentos/vitrine/produtos/categoria.html
/content/b2b/e-commerce-equipamentos/vitrine/produtos/categoria.html
/content/b2b/e-commerce-equipamentos/vitrine/ajuda.html 


/content/b2b/e-commerce-equipamentos/vitrine/produto/produto.html


samuel.rsilva@grupopan.com

 */




TAG: View:Resumo:Oferta - ["bp.data.banner.hposition": "3", "bp.data.banner.name": "vei_home-res-1_seg_shopping-bau-img", "bp.data.pagename": "BP:APP:Home:Resumo", "bp.data.banner.vposition": "Home", "bp.data.subsecao1": "Home", "bp.data.estadologin": "LG", "bp.data.secao": "ContaDigital"]