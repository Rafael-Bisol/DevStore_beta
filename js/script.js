const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=notebooks';

fetch(URL)
    .then(resposta => resposta.json())
    .then(dados => {
        const produtos = dados.results;
        const listaProdutos = document.createElement('ul');
        produtos.forEach(produto => {
            const itemLista = document.createElement('li');
            itemLista.textContent = produto.title;
            listaProdutos.appendChild(itemLista);
        })
        document.getElementById('lista-produtos').appendChild(listaProdutos);
    })
    .catch(deuRuimBerg => {
        console.log('Corre Berg! Erro: ', deuRuimBerg);
    });

