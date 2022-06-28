import { game_width } from "./../../config";
export default function () {
  let progress = this.add.graphics();

  this.load.on("progress", function (value) {
    progress.clear();
    progress.fillStyle(0x00ff0b, 1);
    progress.fillRect(0, 202.5, game_width * value, 60);
  });

  //完成
  this.load.on("complete", function () {
    console.log("ok");
    progress.destroy();
  });
}
