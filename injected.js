document.addEventListener("contextmenu", handleContextMenu, false);
safari.self.addEventListener("message", handleMessage, false);

function handleContextMenu(event) {
    safari.self.tab.setContextMenuEventUserInfo(event, {
        'element': event.target.nodeName,
        'url': event.target.currentSrc
    });
}

function handleMessage(msgEvent) {
    var messageName = msgEvent.name;
    var messageData = msgEvent.message;
    if (messageName === "qr_helper_qrCode") {
        displayModal(messageData)
    }
}

vex.defaultOptions.className = 'vex-theme-os';

function displayModal(data) {
    var re = /.*:\/\/.*/;
    if (re.test(data)) {
        data = '<a target="_blank" href="' + data + '">' + data + '</a>';
    }
    vex.dialog.alert({ unsafeMessage: 'QR code content:<br>' + data});
}
