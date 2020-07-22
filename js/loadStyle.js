export function loadStyle(url) {
    const oldScript = document.querySelector('#dynamicStylesheet');
    oldScript?.remove();
    let styleTag = document.createElement("link");
    styleTag.setAttribute("rel", "stylesheet");
    styleTag.setAttribute("id", "dynamicStylesheet");
    styleTag.setAttribute("type", "text/css");
    styleTag.setAttribute("href", url);
    document.head.appendChild(styleTag);
}
//# sourceMappingURL=loadStyle.js.map