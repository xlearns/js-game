import { ref, reactive } from "@vue/reactivity";

export const state = reactive({
  state: "idle",
  x: 200,
  y: 200,
});
export default {};
