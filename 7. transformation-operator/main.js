// const { of, from } = rxjs;
// const { map } = rxjs.operators;

//map Operator
// of(1, 2, 3, 4, 5)
//   .pipe(map((x) => x * x))
//   .subscribe(console.log);

// from([
//   { name: "apple", price: 1200 },
//   { name: "carrot", price: 800 },
//   { name: "meat", price: 5000 },
//   { name: "milk", price: 2400 },
// ])
//   .pipe(map((item) => item.price))
//   .subscribe(console.log);

//pluck
// const { from } = rxjs;
// const { pluck } = rxjs.operators;

// const obs$ = from([
//   { name: "apple", price: 1200, info: { category: "fruit" } },
//   { name: "carrot", price: 800, info: { category: "vegetable" } },
//   { name: "pork", price: 5000, info: { category: "meet" } },
//   { name: "milk", price: 2400, info: { category: "drink" } },
// ]);

// //obs$.pipe(pluck("price")).subscribe(console.log);
// //obs$.pipe(pluck("info"), pluck("category")).subscribe(console.log);
// //obs$.pipe(pluck("info", "category")).subscribe(console.log);

// const { ajax } = rxjs.ajax;
// const { pluck } = rxjs.operators;

// const obs$ = ajax(`http://api.github.com/search/users?q=user:mojombo`).pipe(
//   pluck("response", "items", 0, "html_url")
// );
// obs$.subscribe(console.log);

//toArray Operator
// const { range } = rxjs;
// const { toArray, filter } = rxjs.operators;

// range(1, 50)
//   .pipe(
//     filter((x) => x % 3 === 0),
//     filter((x) => x % 2 === 1),
//     toArray()
//   )
//   .subscribe(console.log);

//scan Operator
// const { of } = rxjs;
// const { reduce, scan } = rxjs.operators;

// const obs$ = of(1, 2, 3, 4, 5);

// //reduce: 결과만 발행
// obs$
//   .pipe(
//     reduce((acc, x) => {
//       return acc + x;
//     }, 0)
//   )
//   .subscribe((x) => console.log("reduce: " + x));

// //reduce: 과정도 발행
// obs$
//   .pipe(
//     scan((acc, x) => {
//       return acc + x;
//     }, 0)
//   )
//   .subscribe((x) => console.log("scan: " + x));

//zip Operator
// const { from, interval, fromEvent, zip } = rxjs;
// const { pluck } = rxjs.operators;

// // const obs1$ = from([1, 2, 3, 4, 5, 6, 7]);
// // const obs2$ = from(["a", "b", "c", "d", "e"]);
// // const obs3$ = from([true, false, "F", [6, 7, 8], { name: "zip" }]);

// // zip(obs1$, obs2$, obs3$).subscribe(console.log);

// const obs1$ = from([1, 2, 3, 4, 5, 6, 7]);
// const obs4$ = interval(1000);
// const obs5$ = fromEvent(document, "click").pipe(pluck("x"));

// zip(obs4$, obs5$).subscribe(console.log);
