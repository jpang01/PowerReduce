# Examples to use Node.js Javascript Array#reduce

## Syntax
```js
  arr.reduce(function (previousValue, currentValue, currentIndex, array) { ... }, initialValue);

```
The currrentIndex, array, and initalValue are optional.
Let's test the parameters first.

### The different behaviors to set or not set the initialValue.

In the following example, the parameter initialValue is not set. 


```js
"use strict";

let log = console.log;
let result;

result = [0,1,2,3,4,5,6,7,8,9,10].reduce((p,c,i,a)=>{log(" " + p +':'+ c+':'+i+':  :'+a); return p});
```
Here is the output.
```
 0:1:1:  :0,1,2,3,4,5,6,7,8,9,10
 0:2:2:  :0,1,2,3,4,5,6,7,8,9,10
 0:3:3:  :0,1,2,3,4,5,6,7,8,9,10
 0:4:4:  :0,1,2,3,4,5,6,7,8,9,10
 0:5:5:  :0,1,2,3,4,5,6,7,8,9,10
 0:6:6:  :0,1,2,3,4,5,6,7,8,9,10
 0:7:7:  :0,1,2,3,4,5,6,7,8,9,10
 0:8:8:  :0,1,2,3,4,5,6,7,8,9,10
 0:9:9:  :0,1,2,3,4,5,6,7,8,9,10
 0:10:10:  :0,1,2,3,4,5,6,7,8,9,10
 ```
 From the output, we notice the index is start from 1 instead of 0. The previousValue is initialized by the first elemt of the array.
 
  Now, we set the initialValue to zero.
 
 ```js
"use strict";

let log = console.log;
let result;

result = [0,1,2,3,4,5,6,7,8,9,10].reduce((p,c,i,a)=>{log(" " + p +':'+ c+':'+i+':  :'+a); return p}, 0);
```

Here is the out.
 ```
 0:0:0:  :0,1,2,3,4,5,6,7,8,9,10
 0:1:1:  :0,1,2,3,4,5,6,7,8,9,10
 0:2:2:  :0,1,2,3,4,5,6,7,8,9,10
 0:3:3:  :0,1,2,3,4,5,6,7,8,9,10
 0:4:4:  :0,1,2,3,4,5,6,7,8,9,10
 0:5:5:  :0,1,2,3,4,5,6,7,8,9,10
 0:6:6:  :0,1,2,3,4,5,6,7,8,9,10
 0:7:7:  :0,1,2,3,4,5,6,7,8,9,10
 0:8:8:  :0,1,2,3,4,5,6,7,8,9,10
 0:9:9:  :0,1,2,3,4,5,6,7,8,9,10
 0:10:10:  :0,1,2,3,4,5,6,7,8,9,1
 ```
 
 From this output, we see the index is started from 0 instead of 1 as previous example. The previousValue is initialized with the value we given, which is 0. It is an important difference to initialize or not initialize the previousValue. It may cause bug if we are not careful.
 
 In the following example, we intend to sum all the elements.
 
```js
 y = [3,3,3,3,3].reduce((p,c)=>p+=c);
log("y= " + y);

output: y = 15
```
Now, let's sum up the square of all the elements.
```js
 y = [3,3,3,3,3].reduce((p,c)=>p+=c*c);
log("y= " + y);

output: y = 39
```

Here, we get a wrong answer of 39 instead of 45. The reason is the previousValue p is initialized to 3, instead of 9.

Now, let's initialize the previousValue p to 0.
```js
 y = [3,3,3,3,3].reduce((p,c)=>p+=c*c, 0);
log("y= " + y);

output: 45
```

Now we got the right answer. For this reason, my personal preferrence is alway initialize a variable.

### count all elements which is larger than zero.

```js
result = [0,1,2,3,4,5,6,7,8,9,10].reduce((p,c)=>{if(c>0) p++; return p}, 0);
log('result = '+result);

output: result = 10
```

### be a map
```js
result = [0,1,2,3,4,5,6,7,8,9,10].reduce((p,c)=>{p.push(c*c); return p}, []);
log(result);

output: [ 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]

with map:  result = [0,1,2,3,4,5,6,7,8,9,10].map((e)=>e*e);
```

### use a help variable in outer scope to calulate the sum of previous elements.

```js
x=100; result = [0,1,2,3,4,5,6,7,8,9,10].reduce((p,c,i)=>{if(i==0) x= 0; x+=c; p.push(x); return p}, []);
log(result);

output: [ 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
```

### select all odd numbers.

```js
result = [0,1,2,3,4,5,6,7,8,9,10].reduce((p,c)=>{if(c%2)p.push(c); return p}, []);
log(result);
output: [ 1, 3, 5, 7, 9 ]
```

### select into even group and odd group.

```js
result = [0,1,2,3,4,5,6,7,8,9,10].reduce((p,c)=>{p[c%2].push(c); return p}, [[],[]]);
log(result);
output: [ [ 0, 2, 4, 6, 8, 10 ], [ 1, 3, 5, 7, 9 ] ]
```

### select into even group and odd group 2
```js
result = [0,1,2,3,4,5,6,7,8,9,10].reduce((p,c)=>{if(c%2) { p.odd.push(c)} else {p.even.push(c)}; return p}, { odd: [], even: []});
log(result);

output: { odd: [ 1, 3, 5, 7, 9 ], even: [ 0, 2, 4, 6, 8, 10 ] }
```

### convert a document array into a hashtable
```js
var docs = [{name: "apple", count: 10}, 
            {name: "orange", count: 30},
            {name: "peach", count: 50}
           ];

result = docs.reduce((p,c)=>{p[c.name]=c.count; return p},{});
log(result);

output: { apple: 10, orange: 30, peach: 50 }
```
### calculate Fibonacci sequence

```js
y = [0,0,0,0,0,0,0,0,0,0,0].reduce(
  (p,e,i)=>{if(i==0){p.push(0)} else if (i==1) {p.push(1)} else { p.push(p[i-1]+p[i-2])}; return p}, 
  []);
log(y);
output:  [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
```
