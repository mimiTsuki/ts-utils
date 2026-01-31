import { describe, expect, it } from "vitest";
import { range } from "./range";

describe("range", () => {
  it.each([
    [0, 10, 2, [0, 2, 4, 6, 8]],
    [0, 10, 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
    [0, 10, 3, [0, 3, 6, 9]],
    [10, 0, -2, [10, 8, 6, 4, 2]],
    [5, 2, -1, [5, 4, 3]],
  ])(
    "%iから%iの範囲かつ%iごとの間隔で配列の要素が生成されること",
    (start, end, step, expected) => {
      const result = range(start, end, step);
      expect(result).toEqual(expected);
    },
  );
});
