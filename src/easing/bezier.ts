import { range } from "../array/range";

/**
 * ベジェ曲線を生成する
 * @param points - ベジェ曲線の制御点の配列
 * @returns 0から1の間の数値をとり、その点での曲線の値を返す関数
 */
export function createBezierCurve(points: number[]) {
  if (points.length < 2) {
    throw new Error("points must have at least 2 elements");
  }
  return (t: number): number => {
    // 次数
    const n = points.length - 1;
    return points.reduce((acc, cur, index) => {
      return (
        acc +
        combinations(n, index) *
          Math.pow(t, index) *
          Math.pow(1 - t, n - index) *
          cur
      );
    }, 0);
  };
}

export function combinations(n: number, r: number): number {
  if (r < 0 || r > n) {
    return 0;
  }

  if (r === 0 || r === n) {
    return 1;
  }

  const numerator = range(n, 1, -1)
    .slice(0, r)
    .reduce((a, b) => a * b, 1);
  const denominator = range(r, 1, -1).reduce((a, b) => a * b, 1);
  return numerator / denominator;
}
