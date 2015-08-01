#1: basic-glob
  glob-parent x 1,374,510 ops/sec ±1.22% (96 runs sampled)
  glob2base x 22,276 ops/sec ±4.36% (81 runs sampled)

#2: brace-range
  glob-parent x 362,704 ops/sec ±1.34% (99 runs sampled)
  glob2base x 4,033 ops/sec ±7.78% (79 runs sampled)

#3: brace-set
  glob-parent x 452,773 ops/sec ±1.06% (98 runs sampled)
  glob2base x 14,758 ops/sec ±1.30% (86 runs sampled)

#4: char-class
  glob-parent x 483,961 ops/sec ±1.40% (96 runs sampled)
  glob2base x 18,236 ops/sec ±2.29% (83 runs sampled)

#5: compile-brace
  glob-parent x 106,781 ops/sec ±0.91% (98 runs sampled)
  glob2base x 7,781 ops/sec ±10.81% (72 runs sampled)

#6: extglob
  glob-parent x 377,644 ops/sec ±1.27% (99 runs sampled)
  glob2base x 4,536 ops/sec ±11.32% (60 runs sampled)

#7: globstar
  glob-parent x 417,956 ops/sec ±1.49% (98 runs sampled)
  glob2base x 17,618 ops/sec ±12.98% (58 runs sampled)

#8: normal-filepath
  glob-parent x 670,291 ops/sec ±1.86% (94 runs sampled)
  glob2base x 209 ops/sec ±16.29% (28 runs sampled)
