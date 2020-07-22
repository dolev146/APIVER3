import { gethomeContainer } from "./getoutlet.js";
import getAjax from "./Ajax.js";
export function create100coins() {
    let coins = this.response.slice(0, 100);
    let cards = coins.map((coin) => `
        <div class="card bg-light mb-3" style="max-width: 20rem; color:grey;">
                   <div class="card-header">${coin.name.toUpperCase()}</div>
                   <div class="card-body" style="text-align: center;">
                   <div>
                     <h4 class="card-title">${coin.symbol}</h4>
                     <p class="card-text">id: ${coin.id}.</p>
                   </div>
                 <div>

                 <div class="LiveReportsAndMoreInfoContainer" >

                 <button type="button" class="btn btn-info disabled" id=${coin.id}>Info</button>

                <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch1" checked="">
                <label class="custom-control-label" for="customSwitch1">LiveReport</label>
                </div>

        
        
                </div>
                <div class="Moreinfo"></div>
        
                </div>
        </div>
        </div>
        `);
    let homeContainer = gethomeContainer();
    if (homeContainer) {
        homeContainer.innerHTML = cards.join("");
    }
    homeContainer?.addEventListener("click", function () {
        let Coinid = event?.target?.id;
        let infoContainer = event.target.parentNode.nextSibling.nextSibling;
        if (infoContainer.className === "Moreinfo") {
            let link = "https://api.coingecko.com/api/v3/coins/" + (Coinid);
            getAjax(link, CreateMoreInfoFunction(infoContainer));
            // ShowHideinfo(infoContainer);
            // infoDiv.style.display = 'block';
        }
        else {
            ShowHideinfo(infoContainer);
            infoContainer.style.display = 'none';
        }
    });
}
export function CreateMoreInfoFunction(infoContainer) {
    let CoinData = this.response;
    let moreInfoELEMENT = document.getElementById(CoinData.id);
    console.log(CoinData);
    const info = ` 
                  <img src =   ${CoinData.image.small} width = 50px > <br>
                   USD Value: ${CoinData.market_data.current_price.usd}&#36; <br>
                   EUR Value: ${CoinData.market_data.current_price.eur}&#8364 <br>
                   ILS Value: ${CoinData.market_data.current_price.ils}&#8362; <br>
                    `;
    moreInfoELEMENT.nextElementSibling.innerHTML = info;
}
//# sourceMappingURL=ui.js.map