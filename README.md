Demo of <https://github.com/arsnebula/classx/issues/1>.

To repro, run app with `meteor run --production`, hit with a web browser and
look at the browser's developer console.

Expected:

    name in constructor is MyClass
    name just past constructor is MyClass

Actual:

    name in constructor is o
    name just past constructor is o

I'm not sure if minification is deterministic. Your actual browser console
output may vary.

The "Expected" output is seen during `meteor run` (development mode).
