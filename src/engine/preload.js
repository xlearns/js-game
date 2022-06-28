import progress from "./../utils/progress";
import asset_static from "./src/preload/static";
export default function () {
  progress.apply(this);
  asset_static.apply(this);
}
