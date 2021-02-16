import { ProxyState } from "../AppState.js";
import Value from "../Models/Value.js";

class ValuesService {
  constructor() {
    console.log("You purchased Cola")
  }
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
}

export const valuesService = new ValuesService();

