const _ = require("lodash");
const fpeChris = require("./fpe-chris.js");
var jsc = require("jsverify");

var conditional = jsc.forall(
    "integer",
    "integer -> bool",
    "integer -> integer",
    function (x, p, f) {
        return (
            fpeChris.conditional1(x, p, f) === fpeChris.conditional2(x, p, f)
        );
    }
);
jsc.assert(conditional, { quiet: false });

var partition = jsc.forall(
    "integer -> bool",
    "array nat",
    function (p, elements) {
        return _.isEqual(
            fpeChris.partition1(p, elements),
            fpeChris.partition2(p, elements)
        );
    }
);
jsc.assert(partition, { quiet: false });
