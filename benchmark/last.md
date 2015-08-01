#1: basic-glob
  glob-parent x 1,382,367 ops/sec ±1.82% (95 runs sampled)
  glob2base x 21,507 ops/sec ±4.08% (77 runs sampled)

#2: brace-range
  glob-parent x 378,046 ops/sec ±1.46% (99 runs sampled)
  glob2base x 3,981 ops/sec ±5.88% (75 runs sampled)

#3: brace-set
  glob-parent x 451,011 ops/sec ±1.25% (97 runs sampled)
  glob2base x 9,592 ops/sec ±3.33% (80 runs sampled)

#4: char-class
  glob-parent x 482,870 ops/sec ±1.65% (99 runs sampled)
  glob2base x 12,429 ops/sec ±3.90% (77 runs sampled)

#5: compile-brace
  glob-parent x 136,871 ops/sec ±10.83% (85 runs sampled)
  glob2base x 6,408 ops/sec ±2.36% (83 runs sampled)

#6: extglob
  glob-parent x 404,945 ops/sec ±3.31% (97 runs sampled)
  glob2base x 17,533 ops/sec ±10.83% (59 runs sampled)

#7: globstar
  glob-parent x 420,375 ops/sec ±1.60% (93 runs sampled)
  glob2base x 19,291 ops/sec ±13.45% (58 runs sampled)

#8: normal-filepath
  glob-parent x 862,945 ops/sec ±1.42% (97 runs sampled)
  glob2base x 200 ops/sec ±23.99% (27 runs sampled)
