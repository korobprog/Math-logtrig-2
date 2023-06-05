export class AttackLogic {
  static calculateAttack(attack, distance, stoned) {
    let attackPower = attack;
    if (stoned) {
      attackPower -= Math.log2(distance) * 5;
    }
    return Math.round(Math.max(0, attackPower - 10 * (distance - 1)));
  }
}
