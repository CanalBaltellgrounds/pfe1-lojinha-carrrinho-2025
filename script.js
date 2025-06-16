const produtos = [
  { id: 1, nome: "Relógio", preco: 199.9, descricao: "Relógio sofisticado com pulseira de couro.", imagem: "https://imgs.search.brave.com/GSKo7Fcqd2cRCMuJtRxeENsBywFY4fuxflasNGeYEHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9yZWxvZ2lvLWRl/LXB1bHNvLWRlLWRp/YW1hbnRlLWRlY29y/YWRvLWRlLWx1eG9f/MTU0MDI2LTU3OC5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw" },
  { id: 2, nome: "Fone Premium", preco: 299.9, descricao: "Fone com cancelamento de ruído de alta performance.", imagem: "https://imgs.search.brave.com/mJR3Off4G13AcsVQWajFX9tZO1MsPxhl6olnleFmpOc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubmV0c2hvZXMu/Y29tLmJyL3Byb2R1/dG9zL2ZvbmUtZGUt/b3V2aWRvLWJsdWV0/b290aC1lc3BvcnRp/dm8tYWlyLWJlYXRz/LzA2L0NQTC0wMzM3/LTAwNi9DUEwtMDMz/Ny0wMDZfem9vbTEu/anBnP3RzPTE3NDYy/MDU2MzgmaW1zPTMy/Nng" },
  { id: 3, nome: "Tênis Esportivo", preco: 149.9, descricao: "Tênis confortável para corrida e caminhada.", imagem: "https://imgs.search.brave.com/VjyIBRUzGNSsm-hOLCoyZuUJ6Nc8r04f6jv4RFQ5aas/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzY0OTc4Ny8x/ODBfdGVuaXNfZGVf/Y29ycmlkYV9tYXNj/dWxpbm9fb25fcnVu/bmluZ19jbG91ZG1v/bnN0ZXJfdm9pZF9z/aWx2ZXJfbGVuc2Vf/MTIxMjlfMl80ZGE1/OWQ2NTllM2U2YzAx/MjMxYjNiZTc0ZmEy/NTFkMS5qcGc" },
  { id: 4, nome: "Camisa Social", preco: 89.9, descricao: "Camisa de algodão egípcio com acabamento fino.", imagem: "https://imgs.search.brave.com/SuTtdaigKjgomsKB__6sruSQbi_LmH24Y86PsjwugDE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTkw/MDM5OTcwL3B0L2Zv/dG8vbWFuLXdlYXJp/bmctYS13aGl0ZS1z/aGlydC13aGl0ZS1i/YWNrZ3JvdW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz14/YTVxaXpnUDlLa3pO/YzVvUnZEakl1alow/RkZWcGRySVVUSGpm/R2N5eEgwPQ" },
  { id: 5, nome: "Smartphone X", preco: 1999.9, descricao: "Smartphone moderno com ótima câmera e bateria.", imagem: "https://imgs.search.brave.com/Yb3qEDm0ukec-xwJhAmvxp_GQM5xGjzymY41HSslYis/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODg1/MDI0MDU0L3Bob3Rv/L25ldy1pcGhvbmUt/eC1zaWx2ZXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWYy/Q1NQX1k1Qk9KcE5S/T3VLZFhGdEUwa1g0/eG9Zek5JYWdVRUdJ/NklYdzQ9" },
  { id: 6, nome: "Mochila Executiva", preco: 129.9, descricao: "Mochila resistente com compartimento para notebook.", imagem: "https://imgs.search.brave.com/RJroF8mz7RuSLNHbS1Y5xLJZE3JhX45i7B3jk4S8aaE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2ph/bWFya3J5ZGVuLmNv/bS5ici9jZG4vc2hv/cC9maWxlcy9wYXJh/ZnVzby0yXzYwMHgu/anBnP3Y9MTY4Mjg2/MDM0MQ" }
];


let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function renderizarProdutos() {
  const container = document.getElementById("produtos-container");
  if (!container) return;

  container.innerHTML = "";
  produtos.forEach(produto => {
    container.innerHTML += `
      <div class="card" onclick="verDetalhes(${produto.id})">
        <img src="${produto.imagem}" alt="${produto.nome}" />
        <h2>${produto.nome}</h2>
        <p>R$ ${produto.preco.toFixed(2)}</p>
      </div>
    `;
  });
}

function verDetalhes(id) {
  localStorage.setItem("produtoSelecionado", id);
  window.location.href = "detalhes.html";
}

function carregarDetalhes() {
  const id = localStorage.getItem("produtoSelecionado");
  const produto = produtos.find(p => p.id == id);
  if (!produto) return;

  document.getElementById("produto-img").src = produto.imagem;
  document.getElementById("nome-produto").innerText = produto.nome;
  document.getElementById("descricao-produto").innerText = produto.descricao;
  document.getElementById("preco-produto").innerText = "R$ " + produto.preco.toFixed(2);
}

function comprarProduto() {
  const id = localStorage.getItem("produtoSelecionado");
  const produto = produtos.find(p => p.id == id);
  carrinho.push(produto);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Produto adicionado ao carrinho!");
}

function abrirCarrinho() {
  const modal = document.getElementById("modal-carrinho");
  const itensDiv = document.getElementById("itens-carrinho");
  const totalSpan = document.getElementById("total-carrinho");
  if (!modal || !itensDiv) return;

  itensDiv.innerHTML = "";
  let total = 0;
  carrinho.forEach(item => {
    itensDiv.innerHTML += `<p>${item.nome} - R$ ${item.preco.toFixed(2)}</p>`;
    total += item.preco;
  });

  totalSpan.innerText = "R$ " + total.toFixed(2);
  modal.style.display = "block";
}

function fecharCarrinho() {
  const modal = document.getElementById("modal-carrinho");
  if (modal) modal.style.display = "none";
}

function irParaCheckout() {
  window.location.href = "checkout.html";
}

function carregarCheckout() {
  const lista = document.getElementById("lista-checkout");
  const totalSpan = document.getElementById("total-checkout");
  if (!lista || !totalSpan) return;

  let total = 0;
  lista.innerHTML = "";
  carrinho.forEach(item => {
    lista.innerHTML += `<p>${item.nome} - R$ ${item.preco.toFixed(2)}</p>`;
    total += item.preco;
  });
  totalSpan.innerText = "R$ " + total.toFixed(2);
}

function finalizarCompra(event) {
  event.preventDefault();
  alert("Compra realizada com sucesso!");
  localStorage.removeItem("carrinho");
  carrinho = [];
  window.location.href = "index.html";
}

window.onload = () => {
  if (document.getElementById("produtos-container")) renderizarProdutos();
  if (document.getElementById("produto-img")) carregarDetalhes();
  if (document.getElementById("lista-checkout")) carregarCheckout();
};
