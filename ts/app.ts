// Home button on click 

import { homebtnPress } from './presshome.js'

let homebtn: Element | null = document.querySelector("#navbarColor03 > ul > li:nth-child(1) > a");
homebtnPress(homebtn)

window.onload = (e) => homebtn.click() 

