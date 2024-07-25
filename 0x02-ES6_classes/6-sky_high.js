import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._sqft = sqft;
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqftInput) {
    this._sqft = sqftInput;
  }

  get floors() {
    return this._floors;
  }

  set floors(floorsInput) {
    this._floors = floorsInput;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
