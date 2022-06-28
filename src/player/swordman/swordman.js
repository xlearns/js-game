// import state from "./state";
let test = [
  { x: 190, y: 219 },
  { x: 190, y: 218 },
  { x: 180, y: 211 },
  { x: 187, y: 212 },
  { x: 190, y: 219 },
  { x: 190, y: 218 },
  { x: 180, y: 211 },
  { x: 187, y: 212 },
];
//中心点
let m_center = { x: -230, y: -330 };

function updateFn(a, b, c, w, h, x, y) {
  if (this.direction > 0) {
    this.body.setFlipX(false);
  } else {
    this.body.setFlipX(true);
  }
  this.body.setOrigin(this.direction > 0 ? 0 : 1, 0);
  this.body.body.width = w;
  this.body.body.height = h;
  c.frame.x = x + m_center.x;
  c.frame.y = y + m_center.y;
  this.body.setOffset(this.direction * c.frame.x, c.frame.y);
}
class Swordman {
  constructor(phaser, { name = "swordman", x = 200, y = 200, asset = "" }) {
    if (!asset) return console.warn("asset is required");
    this.phaser = phaser;
    this.asset = asset;
    this.name = name;
    this.x = x;
    this.y = y;
    this.direction = 1;
    this.draw();
  }
  setPostion(x, y) {
    this.body.setVelocity(x, y);
  }
  draw() {
    this.body = this.phaser.physics.add.sprite(this.x, this.y, this.asset);
    this.body.anims.play("idle", true);
    let { w, h, x, y } = this.body.frame.customData.spriteSourceSize;
    this.body.on("animationstart", (a, b, c) => {
      updateFn.call(this, a, b, c, w, h, x, y);
    });
    this.body.on("animationupdate", (a, b, c) => {
      updateFn.call(this, a, b, c, w, h, x, y);
    });
  }
  update() {
    if (this.keycode.cursors.left.isDown) {
      this.direction = -1;
      this.body.anims.play("move", true);
    } else if (this.keycode.cursors.right.isDown) {
      this.body.anims.play("move", true);
      this.direction = 1;
    } else {
      this.body.anims.play("idle", true);
    }
  }
}

export function createSwordman(option = {}) {
  return new Swordman(this, option);
}
export default Swordman;
