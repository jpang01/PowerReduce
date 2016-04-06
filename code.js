
"use strict";

let log = console.log;
let result;

result = [0,1,2,3,4,5,6,7,8,9,10].reduce((p,c,i,a)=>{log(" " + p +':'+ c+':'+i+':  :'+a); return p}, 0);

let x = 10;
var y = [0,1,2,3,4,5,6,7,8,9,10].reduce((p,c,i)=>{p[c%2].push(c);return p}, [[],[]]);
console.log(y);

y = [0,1,2,3,4,5,6,7,8,9,10].reduce((p,c,i,a)=> {log(" " + p +':'+ c+':'+i+':  :'+a);p=p+c;return p}, 1);
console.log('y= '+y);

y = [2,3,4,5,6,7,8,9,10].reduce((p,c,i,a)=> {log(" " + p +':'+ c+':'+i+':  :'+a);p=p+c*c;return p});
console.log('y= '+y);

y = [3,3,3,3,3].reduce((p,c)=>p+=c);
log("y= " + y);

y = [3,3,3,3,3].reduce((p,c)=>{p+=c*c; return p}, 0);
log("yy= " + y);

result = [0,1,2,3,4,5,6,7,8,9,10].reduce((p,c)=>{if(c>0) p++}, 0);
log('result = '+result);

result = [0,1,2,3,4,5,6,7,8,9,10].reduce((p,c)=>{p.push(c*c); return p}, []);
log(result);

result = [0,1,2,3,4,5,6,7,8,9,10].map((e)=>e*e);
log(result);

x=100; result = [0,1,2,3,4,5,6,7,8,9,10].reduce((p,c, i)=>{if(i==0) x= 0; x+=c; p.push(x); return p}, []);
log(result);

result = [0,1,2,3,4,5,6,7,8,9,10].reduce((p,c)=>{p[c%2].push(c); return p}, [[],[]]);
log(result);


result = [0,1,2,3,4,5,6,7,8,9,10].reduce((p,c)=>{if(c%2) { p.odd.push(c)} else {p.even.push(c)}; return p}, { odd: [], even: []});
log(result);


var docs = [{name: "apple", count: 10}, 
            {name: "orange", count: 30},
            {name: "peach", count: 50}
           ];

result = docs.reduce((p,c)=>{p[c.name]=c.count; return p},{});
log(result);

y = [0,0,0,0,0,0,0,0,0,0,0].reduce((p,e,i)=>{if(i<=1){p.push(i)} else { p.push(p[i-1]+p[i-2])}; return p}, []);
log(y);

var cl = () => {
    let x = 0;
    return (p,c,i) => {if(i==0) x=0; x+=c; p.push(x); return p};
}();

result = [0,1,2,3,4,5,6,7,8,9,10].reduce(
    () => {
        let x = 0;
        return (p,c,i) => { x+=c; p.push(x); return p}
    }()
    , []);

log(result);
