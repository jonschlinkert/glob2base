#1: basic-glob
  glob-parent x 1,350,571 ops/sec ±1.61% (95 runs sampled)
  glob2base x 19,285 ops/sec ±4.86% (74 runs sampled)

#2: brace-range
  glob-parent x 307,976 ops/sec ±1.56% (98 runs sampled)
  glob2base x 4,707 ops/sec ±6.55% (71 runs sampled)

#3: brace-set
  glob-parent x 445,186 ops/sec ±1.44% (99 runs sampled)
  glob2base x 13,964 ops/sec ±2.82% (79 runs sampled)

#4: char-class
  glob-parent x 468,201 ops/sec ±1.50% (98 runs sampled)
  glob2base x 15,930 ops/sec ±3.03% (79 runs sampled)

#5: compile-brace
  glob-parent x 101,450 ops/sec ±1.24% (97 runs sampled)
  glob2base x 7,738 ops/sec ±14.09% (65 runs sampled)

#6: extglob
  glob-parent x 438,018 ops/sec ±1.31% (99 runs sampled)
  glob2base x 6,438 ops/sec ±6.11% (72 runs sampled)

#7: globstar
  glob-parent x 406,589 ops/sec ±20.09% (90 runs sampled)
  glob2base x 7,106 ops/sec ±9.63% (63 runs sampled)

#8: normal-filepath
  glob-parent x 1,058,398 ops/sec ±23.12% (92 runs sampled)
  glob2base x 330 ops/sec ±26.77% (31 runs sampled)
