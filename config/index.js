export const game_width = 680 * window.devicePixelRatio;
export const game_height = 465 * window.devicePixelRatio;

export const game_config = (preload, create, update) => {
  return {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: game_width,
    height: game_height,
    antialias: true,
    physics: {
      default: "arcade",
      arcade: {
        debug: true,
      },
    },
    scene: {
      preload: preload,
      create: create,
      update: update,
    },
  };
};
