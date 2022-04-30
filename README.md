# gka
- 通过gka生成帧动画
- 需要git clone 下来才能安装到全局
  - `git clone https://github.com/gkajs/gka.git`
  - `git install -g`

# 进行图片去重、空白裁剪、合图优化，使用 canvas 模板，输出 canvas 动画文件
- `gka E:\img -ucs -t canvas`


# 解决帧动画大小不统一得问题 通过修改offet
- canvas 可以通过translate 来解决【需要配合save、restore】