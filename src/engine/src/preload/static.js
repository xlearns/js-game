import player_png from "@/assets/phaser/秋叶落.png";
import player_json from "@/assets/phaser/秋叶落.json";
import weapon_png from "@/assets/phaser/血剑.png";
import weapon_json from "@/assets/phaser/血剑.json";
import shoe_png from "@/assets/test/测试/鞋子.png";
import shoe_json from "@/assets/test/测试/鞋子.json";

const assets = [
  {
    name: "秋叶落",
    src: player_png,
    json: player_json,
  },
  {
    name: "血剑",
    src: weapon_png,
    json: weapon_json,
  },
  {
    name: "鞋子",
    src: shoe_png,
    json: shoe_json,
  },
];
export default function () {
  assets.forEach((item) => {
    this.load.atlas(item.name, item.src, item.json);
  });
}
