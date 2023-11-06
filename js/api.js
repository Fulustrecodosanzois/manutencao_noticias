document.addEventListener("DOMContentLoaded", function () {
  const noticiasPorTemaDiv = document.getElementById("noticiasPorTema");

  // URL da API de notícias
  const apiUrl = "https://64d2a382f8d60b1743624173.mockapi.io/noticias";

  // Função para buscar notícias da seção "Ciência"
  function buscarNoticias() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((noticias) => {
        const noticiasCiencia = noticias.filter((noticia) => noticia.secao === "Ciência");

        noticiasPorTemaDiv.innerHTML = "";

        if (noticiasCiencia.length === 0) {
          noticiasPorTemaDiv.innerHTML = "<p>Nenhuma notícia encontrada para este tema.</p>";
        } else {
          noticiasCiencia.forEach((noticia) => {
            const noticiaDiv = document.createElement("div");
            noticiaDiv.innerHTML = `
                      <div class="container col-10 my-5">
                          <h3 class="fw-bolder mb-4">${noticia.titulo}</h3>
                          <p class="lead">${noticia.resumo}</p>
                          <small class="me-3 rounded ">Autor: ${noticia.autor}</small>
                          <small>Data: ${noticia.data}</small>
                      </div>
                      `;
            noticiasPorTemaDiv.appendChild(noticiaDiv);
          });
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar notícias: " + error);
      });
  }

  buscarNoticias();
});


// ----------------------------------------- ESPORTE


document.addEventListener("DOMContentLoaded", function () {
  const noticiasPorTemaDiv = document.getElementById("noticiasPorTema2");

  // URL da API de notícias
  const apiUrl = "https://64d2a382f8d60b1743624173.mockapi.io/noticias";

  // Função para buscar notícias da seção "Ciência"
  function buscarNoticias() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((noticias) => {
        const noticiasCiencia = noticias.filter((noticia) => noticia.secao === "Esporte");

        noticiasPorTemaDiv.innerHTML = "";

        if (noticiasCiencia.length === 0) {
          noticiasPorTemaDiv.innerHTML = "<p>Nenhuma notícia encontrada para este tema.</p>";
        } else {
          noticiasCiencia.forEach((noticia) => {
            const noticiaDiv = document.createElement("div");
            noticiaDiv.innerHTML = `
                      <div class="container col-10 my-5">
                          <h3 class="fw-bolder mb-4">${noticia.titulo}</h3>
                          <p class="lead">${noticia.resumo}</p>
                          <small class="me-3 rounded ">Autor: ${noticia.autor}</small>
                          <small>Data: ${noticia.data}</small>
                      </div>
                      `;
            noticiasPorTemaDiv.appendChild(noticiaDiv);
          });
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar notícias: " + error);
      });
  }

  buscarNoticias();
});

// ------------------------------- SAUDE

document.addEventListener("DOMContentLoaded", function () {
  const noticiasPorTemaDiv = document.getElementById("noticiasPorTema3");

  // URL da API de notícias
  const apiUrl = "https://64d2a382f8d60b1743624173.mockapi.io/noticias";

  // Função para buscar notícias da seção "Ciência"
  function buscarNoticias() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((noticias) => {
        const noticiasCiencia = noticias.filter((noticia) => noticia.secao === "Saúde");

        noticiasPorTemaDiv.innerHTML = "";

        if (noticiasCiencia.length === 0) {
          noticiasPorTemaDiv.innerHTML = "<p>Nenhuma notícia encontrada para este tema.</p>";
        } else {
          noticiasCiencia.forEach((noticia) => {
            const noticiaDiv = document.createElement("div");
            noticiaDiv.innerHTML = `
                      <div class="container col-10 my-5">
                          <h3 class="fw-bolder mb-4">${noticia.titulo}</h3>
                          <p class="lead">${noticia.resumo}</p>
                          <small class="me-3 rounded ">Autor: ${noticia.autor}</small>
                          <small>Data: ${noticia.data}</small>
                      </div>
                      `;
            noticiasPorTemaDiv.appendChild(noticiaDiv);
          });
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar notícias: " + error);
      });
  }

  buscarNoticias();
});


// --------------------- TECNOLOGIA

document.addEventListener("DOMContentLoaded", function () {
  const noticiasPorTemaDiv = document.getElementById("noticiasPorTema");

  // URL da API de notícias
  const apiUrl = "https://64d2a382f8d60b1743624173.mockapi.io/noticias";

  // Função para buscar notícias da seção "Ciência"
  function buscarNoticias() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((noticias) => {
        const noticiasCiencia = noticias.filter((noticia) => noticia.secao === "Tecnologia");

        noticiasPorTemaDiv.innerHTML = "";

        if (noticiasCiencia.length === 0) {
          noticiasPorTemaDiv.innerHTML = "<p>Nenhuma notícia encontrada para este tema.</p>";
        } else {
          noticiasCiencia.forEach((noticia) => {
            const noticiaDiv = document.createElement("div");
            noticiaDiv.innerHTML = `
                      <div class="container col-10 my-5 shadow p-3 rounded-bottom-4">
                          <h3 class="fw-bolder mb-4">${noticia.titulo}</h3>
                          <p class="lead">${noticia.resumo}</p>
                          <small class="me-3 rounded ">Autor: ${noticia.autor}</small>
                          <small>Data: ${noticia.data}</small>
                      </div>
                      `;
            noticiasPorTemaDiv.appendChild(noticiaDiv);
          });
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar notícias: " + error);
      });
  }

  buscarNoticias();
});
