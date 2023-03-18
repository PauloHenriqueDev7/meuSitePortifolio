// Selecionando o botão "Enviar" do formulário de contato
const sendButton = document.querySelector('#send-button');

// Adicionando um ouvinte de eventos para quando o botão for clicado
sendButton.addEventListener('click', (event) => {
  event.preventDefault(); // Evitando que a página recarregue após o envio do formulário

  // Selecionando os campos do formulário
  const nameInput = document.querySelector('#name-input');
  const emailInput = document.querySelector('#email-input');
  const messageInput = document.querySelector('#message-input');

  // Verificando se todos os campos foram preenchidos
  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    alert('Por favor, preencha todos os campos do formulário!');
    return;
  }

  // Criando um objeto com os dados do formulário
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  // Enviando os dados do formulário para um servidor ou API
  // Aqui você pode adicionar o código para enviar os dados usando XMLHttpRequest ou Fetch API, por exemplo
  console.log(formData);
});

  /*  
  const form = document.querySelector('form');
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const formData = new FormData(form);
			const xhr = new XMLHttpRequest();
			xhr.open('POST', 'http://exemplo.com/formulario-contato');
			xhr.send(formData);
			form.reset();
			alert('Mensagem enviada com sucesso!');
		});
*/ 