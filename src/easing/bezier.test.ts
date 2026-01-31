import { describe, expect, it } from "vitest";
import { combinations, createBezierCurve } from "./bezier";

describe("combinations", () => {
  it.each([
    [5, 2, 10],
    [5, 3, 10],
  ])("%iC%i の組み合わせの数を返すこと", (n, r, expected) => {
    const result = combinations(n, r);
    expect(result).toEqual(expected);
  });

  it("nが0の場合、1を返すこと", () => {
    expect(combinations(0, 0)).toEqual(1);
  });

  it("rが0の場合、1を返すこと", () => {
    expect(combinations(5, 0)).toEqual(1);
  });

  it("rがnの場合、1を返すこと", () => {
    expect(combinations(5, 5)).toEqual(1);
  });

  it("rがnより大きい場合、0を返すこと", () => {
    expect(combinations(5, 6)).toEqual(0);
  });

  it("rが負の場合、0を返すこと", () => {
    expect(combinations(5, -1)).toEqual(0);
  });
});

describe("createBezierCurve", () => {
  it.each([
    [[0, 1], 0.5, 0.5],
    [[0, 1], 0, 0],
    [[0, 1], 1, 1],
    [[0, 1, 2], 0.5, 1],
  ])(
    "%iを制御点とするベジェ曲線のt=%iの点の値を返すこと",
    (points, t, expected) => {
      const result = createBezierCurve(points)(t);
      expect(result).toEqual(expected);
    },
  );
});
