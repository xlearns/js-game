import { createSwordman, animaSwordman, keyboardSwordman } from "@/player";
export default function () {
  const cSwordman = (option) => {
    let res = createSwordman.call(this, option);
    res.keycode = keyboardSwordman.call(this);
    return res;
  };

  animaSwordman(this);
  this.phayer1 = cSwordman({ asset: "秋叶落", x: 400, y: 300 });
  // this.phayer2 = cSwordman({ asset: "秋叶落", x: 300, y: 200 });
  // this.phayer3 = cSwordman({ asset: "秋叶落", x: 100, y: 200 });
}
