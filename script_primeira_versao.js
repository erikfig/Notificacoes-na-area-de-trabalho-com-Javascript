//console.log(window);

notificacoes = function(title, opt) {
	if(window.Notification) {
		if (window.Notification.permission != 'granted') {
			window.Notification.requestPermission();
		} else {
			var notificacao = new Notification(title, opt);
		}
	} else {
		console.log('Notification não é suportado');
	}
}

document.querySelector("#notificacao1").addEventListener('click', function(){
	var opt = {
		body: "Fala Erik, esta é uma mensagem gerada aqui pelo meu gerador de notificações, bem bacana né, vamos ver se cosneguimos fazer isso funcionar cross browser?",
		icon: "alerta.png"
	}
	notificacoes("Uma nova mensagem no WebDevBr", opt);
});

document.querySelector("#notificacao2").addEventListener('click', function(){
	var opt = {
		body: "E outra notificação com um sorriso pra alegrar o seu dia!",
		icon: "sorriso.png"
	}
	notificacoes("Feliz?", opt);
});