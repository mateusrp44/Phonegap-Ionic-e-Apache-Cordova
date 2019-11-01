var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        //document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    alert: function () {

        function alertDismissed() {
            alert('Usuário clicou no botão OK');
        }

        navigator.notification.alert(
            'Registro salvo com sucesso!',  // message
            alertDismissed,         // callback
            'Sucesso!',            // title
            'OK'                  // buttonName
        );
    },

    confirm: function () {

        function onConfirm(buttonIndex) {
            alert('Usuário clicou no botão ' + buttonIndex);
        }

        navigator.notification.confirm(
            'Erro ao salvar registro. Deseja tentar novamente?', // message
            onConfirm,            // callback to invoke with index of button pressed
            'Erro!',           // title
            ['Sim', 'Não']     // buttonLabels
        );
    },

    prompt: function () {

        function onPrompt(results) {
            alert('Usuário clicou no botão ' +
                results.buttonIndex +
                " e digitou " + results.input1);
        }

        navigator.notification.prompt(
            'Informe seu nome',  // message
            onPrompt,                  // callback to invoke
            'Registro',            // title
            ['Ok', 'Cancelar'],             // buttonLabels
            'seu nome'                 // defaultText
        );
    },

    beep: function () {
        navigator.notification.beep(3);
    }
};