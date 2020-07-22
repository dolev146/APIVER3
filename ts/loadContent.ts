
export function loadContent(url: any, outlet: any) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url)
    xhr.onload = function () {
        outlet.innerHTML = xhr.responseText;
    }
    xhr.send()

}