var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    listContacts: function(){
        function onSuccess(contacts) {
            alert('Found ' + contacts.length + ' contacts.');
        }

        function onError(contactError) {
            alert('onError!');
        }

        var options = new ContactFindOptions();
        options.multiple = true;
        options.desiredFields = [navigator.contacts.fieldType.id];
        var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];

        navigator.contacts.find(fields, onSuccess, onError, options);
    },

    createContact: function(){
        function onSuccess(contact) {
            alert("Save Success");
        };

        function onError(contactError) {
            alert("Error = " + contactError.code);
        };

        // create a new contact object
        var contact = navigator.contacts.create();
        contact.displayName = "AAAA";
        contact.nickname = "Test Phonegap";            // specify both to support all devices

        // populate some fields
        var name = new ContactName();
        name.givenName = "AAAAA";
        name.familyName = "Phonegap";
        contact.name = name;

        // save to device
        contact.save(onSuccess,onError);
    },

    pickContact: function(){
        navigator.contacts.pickContact(function(contact){
            alert('The following contact has been selected:' 
                + JSON.stringify(contact));
        },function(err){
            alert('Error: ' + err);
        });
    }    
};