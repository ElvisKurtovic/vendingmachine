import Value from "./Models/Value.js"
import Money from "./Models/Money.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  money = 0;

  drinks = [
    {
      name: "Coke",
      price: 10,
      quantity: 50
    },
    {
      name: "Sprite",
      price: 10,
      quantity: 50
    },
    {
      name: "DrPepper",
      price: 10,
      quantity: 50
    }
  ]

  recentPurchase = [" "]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
