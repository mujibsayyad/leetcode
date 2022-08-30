let maxArea = function (h, w, horizontalCuts, verticalCuts) {
  // let M = BigInt(1e9 + 7); or below is alternative
  let M = BigInt(Math.pow(10, 9) + 7);

  verticalCuts.push(w);
  horizontalCuts.push(h);

  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);

  let horiCuts = 0;
  let vertiCuts = 0;

  for (let i = 0; i < verticalCuts.length; i++) {
    let temp = i > 0 ? verticalCuts[i] - verticalCuts[i - 1] : verticalCuts[i];
    vertiCuts = Math.max(vertiCuts, temp);
  }

  for (let i = 0; i < horizontalCuts.length; i++) {
    let temp =
      i > 0 ? horizontalCuts[i] - horizontalCuts[i - 1] : horizontalCuts[i];
    horiCuts = Math.max(horiCuts, temp);
  }
  return (BigInt(horiCuts) * BigInt(vertiCuts)) % M;
};

// 2

let maxAreaa = function (h, w, hc, vc) {
  hc.sort((a, b) => a - b);
  vc.sort((a, b) => a - b);

  let maxh = Math.max(hc[0], h - hc[hc.length - 1]),
    maxv = Math.max(vc[0], w - vc[vc.length - 1]);

  for (let i = 1; i < hc.length; i++) {
    maxh = Math.max(maxh, hc[i] - hc[i - 1]);
  }

  for (let i = 1; i < vc.length; i++) {
    maxv = Math.max(maxv, vc[i] - vc[i - 1]);
  }

  return (BigInt(maxh) * BigInt(maxv)) % 1000000007n;
};

// T.C: O(N * log(N) + M * log(M)) where N is the length of hc and M is the length of vc
// S.C: O(1): O(1)

// link :- https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/
