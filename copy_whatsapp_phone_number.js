function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function copyToClipboard(text) {
    dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
phone_no = getElementByXpath('//*[@title="Profile Details"]/..//*[contains(text(), "+60")]').innerText.replace(/[^\d]+/ig, '');
copyToClipboard(phone_no);
