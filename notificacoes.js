notificacoes_check = function() {
	
	if (window.Notification) {
		return true;
	} else {
	  console.log("Hum... navegador sem suporte a notificações!.");
	  return false;
	}

}

notificacoes = function(title, opt) {
	
	if (notificacoes_check()) {
		if (window.Notification.permission != 'granted') {
			console.log('aqui');
			window.Notification.requestPermission(function(){
				new Notification(title, opt);
			});
		} else {
			new Notification(title, opt);
		}
	}

}

notificacoes_request_permission = function(callback) {
	
	if (notificacoes_check()) {
		if (window.Notification.permission != 'granted') {
			window.Notification.requestPermission();
		}
	}

}