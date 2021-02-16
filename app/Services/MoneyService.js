import { ProxyState } from "../AppState.js";
import Money from "../Models/Money.js";

class MoneyService {
    constructor() {
        console.log("You purchased Cola")
    }
    addValue() {
        ProxyState.money += 10
    }
    buyCoke() {
        if (ProxyState.money >= ProxyState.drinks[0].price && ProxyState.drinks[0].quantity > 0) {
            ProxyState.money -= ProxyState.drinks[0].price
            ProxyState.drinks[0].quantity--
            ProxyState.drinks = ProxyState.drinks
            ProxyState.recentPurchase.push(ProxyState.drinks[0].name).toString()
        }
    }

    buySprite() {
        if (ProxyState.money >= ProxyState.drinks[1].price && ProxyState.drinks[1].quantity > 0) {
            ProxyState.money -= ProxyState.drinks[1].price
            ProxyState.drinks[1].quantity--
            ProxyState.drinks = ProxyState.drinks
            ProxyState.recentPurchase.push(ProxyState.drinks[1].name).toString()
        }
    }

    buyDrpepper() {
        if (ProxyState.money >= ProxyState.drinks[2].price && ProxyState.drinks[2].quantity > 0) {
            ProxyState.money -= ProxyState.drinks[2].price
            ProxyState.drinks[2].quantity--
            ProxyState.drinks = ProxyState.drinks
            ProxyState.recentPurchase.push(ProxyState.drinks[2].name).toString()
        }
    }
}

export const moneyService = new MoneyService();