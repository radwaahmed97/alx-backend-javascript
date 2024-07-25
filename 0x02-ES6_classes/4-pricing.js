import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amountinput) {
    if (typeof amountinput !== 'number') throw TypeError('amount must be a number');
    this._amount = amountinput;
  }

  set currency(currencyinput) {
    if (!(currencyinput instanceof Currency)) throw TypeError('currency must be a Currency');
    this._currency = currencyinput;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
