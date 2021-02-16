import { ProxyState } from "../AppState.js";
import { moneyService } from "../Services/MoneyService.js";

function _draw() {
    // let money = ProxyState.money;
    let template = ''
    // money.forEach(v => template += v.Template)
    let moneyElem = document.getElementById("my-money")
    moneyElem.innerText = ProxyState.money.toString()
    let cokeElem = document.getElementById("cokeInv")
    cokeElem.innerText = `Quantity: ${ProxyState.drinks[0].quantity}`
    let spriteElem = document.getElementById("spriteInv")
    spriteElem.innerText = `Quantity: ${ProxyState.drinks[1].quantity}`
    let drpElem = document.getElementById("drpInv")
    drpElem.innerText = `Quantity: ${ProxyState.drinks[2].quantity}`

    let mostRecent = document.getElementById("purchaseInv")
    mostRecent.innerText = `${ProxyState.recentPurchase[ProxyState.recentPurchase.length - 1]}`
    document.getElementById("app").innerHTML = /*html*/`
    <button className="btn btn-info" onclick="app.moneyController.addValue()">Add Money</button>  
    <div className="card-columns money">
        ${template}
    </div>
    `
}

export default class MoneyController {
    constructor() {
        ProxyState.on("money", _draw);
        ProxyState.on("drinks", _draw);
        _draw()
    }

    addValue() {
        moneyService.addValue()
    }

    buyCoke() {
        moneyService.buyCoke()
        _draw()
    }

    buySprite() {
        moneyService.buySprite()
        _draw()
    }

    buyDrpepper() {
        moneyService.buyDrpepper()
        _draw()
    }

}