export const solution = function (isBadVersion: (version: number) => boolean) {
  return function (n: number): number {
    /**
     * Bad version -> 6
     *               👇
     * [1, 2, 3, ..., 6, ..., 12]
     * lowestVersion = 1
     * highestVersion = 12
     * midpPoint -> (highestVersion {12} + lowestVersion {1}) / 2 -> 6
     * IF isBadVersion(midpPoint {6}) is TRUE
     *    highestVersion = midpPoint {6} = 6
     *
     * lowestVersion = 1
     * highestVersion = 6
     * midpPoint -> (highestVersion {6} + lowestVersion {1}) / 2 -> 3 (floor)
     * IF isBadVersion(midpPoint {3}) is FALSE
     *    lowestVersion = midpPoint {3} + 1 = 4
     *
     * lowestVersion = 4
     * highestVersion = 6
     * midpPoint -> (highestVersion {6} + lowestVersion {4}) / 2 -> 5 (floor)
     * IF isBadVersion(midpPoint {5}) is FALSE
     *    lowestVersion = midpPoint {5} + 1 = 6
     *
     * lowestVersion = 6
     * highestVersion = 6
     *
     * IF lowestVersion === highestVersion
     *    return lowestVersion
     */

    let lowestVersion = 1;
    let highestVersion = n;

    do {
      const midPoint = Math.floor((highestVersion + lowestVersion) / 2);

      if (isBadVersion(midPoint)) {
        highestVersion = midPoint;
      } else {
        lowestVersion = midPoint + 1;
      }
    } while (lowestVersion !== highestVersion);

    return lowestVersion;
  };
};
