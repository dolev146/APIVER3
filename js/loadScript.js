export function loadScript(url) {
    const oldScript = document.querySelector('#dynamicScript');
    oldScript?.remove();
    const scriptTag = document.createElement('script');
    scriptTag.id = "dynamicScript";
    scriptTag.src = url;
    document.body.appendChild(scriptTag);
    // document.body.insertAdjacentElement('beforeend',scriptTag)   
}
//# sourceMappingURL=loadScript.js.map