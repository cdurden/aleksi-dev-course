// Exercise 1
var students = [
    { name: "Hannah", grade_average: 83 },
    { name: "Charlie", grade_average: 91 },
    { name: "Peter", grade_average: 85 },
    { name: "Rachel", grade_average: 79 },
    { name: "Lauren", grade_average: 92 },
];

// Exercise 1a
var names = students.map(function (element) {
    return element.name;
});

// Exercise 1b
var names = [];
for (let student of students) {
    names.push(student.name);
}

var names = [];
for (let student of students) {
    names[names.length] = student.name;
}

// Exercise 2
// The following solution is clear and concise
function partition1(p, elements) {
    function not(p) {
        return function (x) {
            return !p(x);
        };
    }
    return [elements.filter(p), elements.filter(not(p))];
}
// The following solutions are a bit verbose
function partition2(p, elements) {
    var predicateElementsMap = new Map([
        [true, []],
        [false, []],
    ]);
    elements.forEach(function (element) {
        predicateElementsMap.get(p(element)).push(element);
    });
    return Array.from(predicateElementsMap.values());
}
function partition3(p, elements) {
    var predicateTrueElements = [];
    var predicateFalseElements = [];
    elements.forEach(function (element) {
        p(element)
            ? predicateTrueElements.push(element)
            : predicateFalseElements.push(element);
    });
    return [predicateTrueElements, predicateFalseElements];
}
function partition4(p, elements) {
    var predicateTrueElements = [];
    var predicateFalseElements = [];
    elements.forEach(function (element) {
        if (p(element)) {
            predicateTrueElements.push(element);
        } else {
            predicateFalseElements.push(element);
        }
    });
    return [predicateTrueElements, predicateFalseElements];
}
// The following are difficult to understand because they use operations in ways other than how those operations are most commonly used
function partition5(p, elements) {
    var passes = [];
    var fails = [];
    function pass(element) {
        p(element) && passes.push(element);
    }
    function fail(element) {
        !p(element) && fails.push(element);
    }
    elements.forEach(function (element) {
        pass(element) || fail(element);
    });
    return [passes, fails];
}
function partition6(p, elements) {
    var result = [[], []];
    elements.forEach(function (element) {
        result[Number(p(element))].push(element);
    });
    return result;
}

// Exercise 3
function timesY(y) {
    return function (x) {
        return x * y;
    };
}

// Exercise 4
function conditional1(x, p, f) {
    if (p(x)) {
        return f(x);
    } else {
        return x;
    }
}
function conditional2(x, p, f) {
    return p(x) ? f(x) : x;
}
function conditional3(x, p, f) {
    const map = new Map([
        [true, f(x)],
        [false, x],
    ]);
    return map.get(p(x));
}
function conditional4(x, p, f) {
    var map = new Map([
        [true, (x) => f(x)],
        [false, (x) => x],
    ]);
    return map.get(p(x))(x);
}
function conditional5(x, p, f) {
    switch (p(x)) {
        case true:
            return f(x);
        case false:
            return x;
    }
}

module.exports = {
    conditional1,
    conditional2,
    conditional3,
    conditional4,
    conditional5,
    partition1,
    partition2,
    partition3,
    partition4,
    partition5,
    partition6,
};
