

  // Define uma lista de conteúdo a ser exibido na sidebar
  const conteudoSidebar = [
    {
      titulo: "Tendências de tecnologia para 2023",
      descricao: "As principais tendências de tecnologia para 2023",
      link: "https://canaltech.com.br/mercado/6-maiores-tendencias-de-tecnologia-para-2023/",
      imagem: "https://www.exemplo.com/img/dicas-otimizacao.png"
    },
    {
        titulo: "Dicas para otimizar o desempenho do seu site",
        descricao: "Confira algumas dicas úteis para tornar o seu site mais rápido e responsivo.",
        link: "https://www.exemplo.com/dicas-otimizacao-desempenho",
        imagem: "https://www.exemplo.com/img/dicas-otimizacao.png"
      },
    {
      titulo: "Novidades em tecnologia web",
      descricao: "Fique por dentro das últimas tendências em desenvolvimento web e tecnologia.",
      link: "https://www.exemplo.com/novidades-tecnologia-web",
      imagem: "https://www.exemplo.com/img/novidades-tecnologia.png"
    },
    {
      titulo: "Como melhorar a acessibilidade do seu site",
      descricao: "Saiba como tornar o seu site acessível para todos os usuários, incluindo pessoas com deficiência.",
      link: "https://www.exemplo.com/melhorar-acessibilidade-site",
      imagem: "https://www.exemplo.com/img/melhorar-acessibilidade.png"
    }
  ];

  // Cria uma função para exibir o conteúdo na sidebar
  function exibirConteudoSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const conteudo = document.createElement("div");
    conteudo.classList.add("conteudo-sidebar");

    // Itera sobre a lista de conteúdo e cria um card para cada item
    conteudoSidebar.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");

      const imagem = document.createElement("img");
      imagem.src = item.imagem;

      const titulo = document.createElement("h3");
      titulo.textContent = item.titulo;

      const descricao = document.createElement("p");
      descricao.textContent = item.descricao;

      const link = document.createElement("a");
      link.href = item.link;
      link.textContent = "Leia mais";

      card.appendChild(imagem);
      card.appendChild(titulo);
      card.appendChild(descricao);
      card.appendChild(link);

      conteudo.appendChild(card);
    });

    sidebar.appendChild(conteudo);
  }

  // Chama a função de exibição do conteúdo na sidebar quando a página carregar
  window.addEventListener("load", exibirConteudoSidebar);

