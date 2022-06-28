import anima from "@/utils/animate";

const list = [
  {
    source: "秋叶落",
    start: 177,
    end: 180,
    rate: 3,
    status: "idle",
  },
  {
    source: "秋叶落",
    start: 181,
    end: 188,
    rate: 10,
    status: "move",
  },
];
export default function (self) {
  const cAnima = (...option) => {
    anima.call(self, ...option);
  };
  list.forEach((item) => {
    cAnima(item);
  });
}
