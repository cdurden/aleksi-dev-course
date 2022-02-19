# Functional javascript exercises
Exercises 3 and 4 are from O’Reilly Functional Programming - Chapter 5

## Exercises
1. Use the map method to return an array of just the student names.
```javascript
var students = [
  {"name": "Hannah", "grade_average": 83},
	{"name": "Charlie", "grade_average": 91},
	{"name": "Peter", "grade_average": 85},
	{"name": "Rachel", "grade_average": 79},
	{"name": "Lauren", "grade_average": 92}
]
```
2. Write a function partition that takes a boolean function p and an array and partitions the array into the elements that satisfy the predicate p and the ones that do not satisfy the predicate.
For example, if p is the boolean function below, the partition function should take an array of numbers and return two lists: one containing the numbers which are greater than 5, and the other containing the numbers less than or equal to 5. 
```javascript
function p(element) {
    return element > 5;
}
```
3. Write a higher-order function that takes an integer and returns a function. The returned function should take a single integer argument (say, “x”) and return the product of x and the integer passed to the higher-order function. *Hint:* Nest the two functions (See an example of nested functions here).
4. Write a function called conditional that takes a value x and two functions, p and f. The p function is a predicate, taking the value x and returning a boolean b. The f function also takes the value x. Your conditional function should only invoke the function f(x) if p(x) is true, and otherwise return x.
