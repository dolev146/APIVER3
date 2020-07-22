import getAjax from "./Ajax.js";
import { loadContent } from "./loadContent.js"
import { getOutlet } from "./getoutlet.js"
import { loadStyle } from "./loadStyle.js"
import { create100coins } from "./ui.js"
import { gethomeContainer } from "./getoutlet.js"
export function homebtnPress(homebtn: any) {
    const oldContent = gethomeContainer()
    oldContent?.remove();
    let outlet: Element | null | any = getOutlet();
    if (homebtn) {
        loadContent('../components/home/home.component.html', outlet)
        loadStyle("../components/home/home.component.css")
        homebtn.addEventListener("click", () => {
            getAjax(
                "https://api.coingecko.com/api/v3/coins/list",
                create100coins
            );
        });
    }
}

