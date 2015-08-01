```sh
#1: basic-glob
  glob-parent x 6,228,334 ops/sec ±2.11% (96 runs sampled)
  glob2base x 16,130 ops/sec ±3.64% (80 runs sampled)

#2: brace-range
  glob-parent x 7,592,005 ops/sec ±1.60% (99 runs sampled)
  glob2base x 3,917 ops/sec ±6.58% (74 runs sampled)

#3: brace-set
  glob-parent x 6,492,041 ops/sec ±1.94% (97 runs sampled)
  glob2base x 12,206 ops/sec ±1.95% (82 runs sampled)

#4: char-class
  glob-parent x 6,090,165 ops/sec ±1.55% (98 runs sampled)
  glob2base x 12,254 ops/sec ±2.87% (78 runs sampled)

#5: compile-brace
  glob-parent x 6,278,464 ops/sec ±1.45% (96 runs sampled)
  glob2base x 7,070 ops/sec ±11.96% (82 runs sampled)

#6: extglob
  glob-parent x 6,217,479 ops/sec ±1.57% (97 runs sampled)
  glob2base x 17,132 ops/sec ±11.54% (59 runs sampled)

#7: globstar
  glob-parent x 6,452,519 ops/sec ±1.41% (98 runs sampled)
  glob2base x 11,748 ops/sec ±11.08% (60 runs sampled)

#8: normal-filepath
  glob-parent x 6,264,496 ops/sec ±1.39% (99 runs sampled)
  glob2base x 249 ops/sec ±87.80% (23 runs sampled)
```
