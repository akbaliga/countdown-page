function Counter(element, value) {
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset')
    this.increaseBtn = element.querySelector('.increase')
    this.decreaseBtn = element.querySelector('.decrease')
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;

    this.increaseBtn.addEventListener('click', () => {
        this.increase();
    })
    this.decreaseBtn.addEventListener('click', this.decrease.bind(this));
    this.resetBtn.addEventListener('click', () => this.reset())
}

Counter.prototype.increase = function() {
    this.value++;
    this.valueDOM.textContent = this.value;
}

Counter.prototype.decrease = function() {
    this.value--;
    this.valueDOM.textContent = this.value;
}


Counter.prototype.reset = function() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
}


const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);

function getElement(selector) {
    const element = document.querySelector(selector);
    if (element ) {
        return element
    } 
    throw new Error(`${selector}, no such element exists`) 
}