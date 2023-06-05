import AttackLogic from "./AttackLogic";

export default class Magician {
  constructor(name) {
    this.name = name;
    this._distance = 1;
    this._attack = 100;
    this._stoned = false;
  }

  get attack() {
    return AttackLogic.calculateAttack(
      this._attack,
      this._distance,
      this._stoned
    );
  }

  set attack(value) {
    this._attack = value;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = Boolean(value);
  }

  get distance() {
    return this._distance;
  }

  set distance(value) {
    this._distance = Math.max(1, Math.min(5, value));
  }
}
