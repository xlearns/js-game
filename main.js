import Phaser from "phaser";
import { preload, create, update } from "./src/engine";
import { game_config } from "./config";
new Phaser.Game(game_config(preload, create, update));
