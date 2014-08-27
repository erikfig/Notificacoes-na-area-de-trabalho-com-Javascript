window.onload = (function(){

	notificacoes_request_permission();

	document.querySelector('#notificacao1').addEventListener('click', function() {
		var opt = {
			body: "Fala Erik, esta é uma mensagem gerada aqui pelo meu gerador de notificações, bem bacana né, vamos ver se cosneguimos fazer isso funcionar cross browser?",
			icon: "alerta.png"
		}
		notificacoes("Uma nova mensagem no WebDevBr", opt)
	}, false);

	document.querySelector('#notificacao2').addEventListener('click', function() {
		var opt = {
			body: "E outra notificacão com um sorriso pra alegrar seu dia!",
			icon: "sorriso.png"
		}
		notificacoes("Feliz?", opt)
	}, false);
});