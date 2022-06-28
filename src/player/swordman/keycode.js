export default function () {
  let res = {};
  res.cursors = this.input.keyboard.createCursorKeys();
  res.keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
  res.keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
  res.keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
  res.keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
  res.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  res.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  res.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  res.keyF1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F1);
  return res;
}
