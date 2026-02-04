import { describe, expect, it } from "vitest";
import { pipe } from "./pipe";

describe("pipe", () => {
  it("第1引数で渡した値を元に、第2引数の関数を実行した結果を返すこと", () => {
    const double = (x: number) => x * 2;
    const result = pipe(2, double);
    expect(result).toBe(4);
  });
  it("複数の関数をパイプできること", () => {
    const add1 = (x: number) => x + 1;
    const double = (x: number) => x * 2;
    const toString = (x: number) => x.toString();

    const result = pipe(1, add1, double, toString);
    expect(result).toBe("4");
  });
});
