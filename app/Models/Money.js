export default class Money {
    constructor(data) {
        this.title = data.title
    }

    get Template() {

        return /*html*/`
        <div class="card p-2 money">
            ${this.title}
        </div>
        `
    }
}