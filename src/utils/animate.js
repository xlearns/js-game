export default function ({ source, start, end, status, rate }) {
  let frames = this.anims.generateFrameNames(source, {
    start: start,
    end: end,
  });
  this.anims.create({
    key: status,
    frames: frames,
    frameRate: rate,
    repeat: -1,
  });
}

export function animation(obj, direction, offset, m_center) {
  obj.on("animationstart", (a, b, c) => {
    if (direction.face > 0) {
      obj.setFlipX(false);
    } else {
      obj.setFlipX(true);
    }
    let { textureKey } = b;
    let index = Number(textureKey.match(/\d/g).join(""));
    let { width, height, x } = c;
    obj.body.width = width;
    obj.body.height = height;
    c.frame.x = Number(offset[index - 1][0]) + m_center.x;
    c.frame.y = Number(offset[index - 1][1]) + m_center.y;
    obj.setOrigin(direction.face > 0 ? 0 : 1, 0);
    obj.setOffset(direction.face * c.frame.x, c.frame.y);
  });
  obj.on("animationupdate", (a, b, c) => {
    if (direction.face > 0) {
      obj.setFlipX(false);
    } else {
      obj.setFlipX(true);
    }
    obj.setOrigin(direction.face > 0 ? 0 : 1, 0);
    let { textureKey } = b;
    let index = Number(textureKey.match(/\d/g).join(""));
    let { width, height, x } = c;
    obj.body.width = width;
    obj.body.height = height;
    c.frame.x = Number(offset[index - 1][0]) + m_center.x;
    c.frame.y = Number(offset[index - 1][1]) + m_center.y;
    obj.setOffset(direction.face * c.frame.x, c.frame.y);
  });
}
