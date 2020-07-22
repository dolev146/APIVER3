export function loadContent(url, outlet) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        outlet.innerHTML = xhr.responseText;
    };
    xhr.send();
}
//# sourceMappingURL=loadContent.js.map