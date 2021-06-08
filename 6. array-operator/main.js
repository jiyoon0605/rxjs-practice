//산수
//const { of } = rxjs;
const { count, max, min, reduce } = rxjs.operators;

// const obs$ = of(4, 2, 6, 10, 8);
// obs$.pipe(count()).subscribe((x) => console.log("count: " + x));
// obs$.pipe(max()).subscribe((x) => console.log("max: " + x));
// obs$.pipe(min()).subscribe((x) => console.log("min: " + x));
// obs$
//   .pipe(
//     reduce((acc, x) => {
//       return acc + x;
//     }, 0)
//   )
//   .subscribe((x) => console.log("reduce: " + x));

//선택
const { from } = rxjs;
const { first, last, elementAt, filter, distinct } = rxjs.operators;

const obs$ = from([
  9, 3, 10, 5, 1, 10, 9, 9, 1, 4, 1, 8, 6, 2, 7, 2, 5, 5, 10, 2,
]);
// obs$.pipe(first()).subscribe((x) => console.log("first: " + x));
// obs$.pipe(last()).subscribe((x) => console.log("last: " + x));
// obs$.pipe(elementAt(5)).subscribe((x) => console.log("elementAt: " + x));
// obs$.pipe(distinct()).subscribe((x) => console.log("distinct: " + x)); //중복포함X
// obs$
//   .pipe(filter((x) => x % 2 === 1))
//   .subscribe((x) => console.log("filter: " + x));

//짝수들 중에서 가장 큰 수
// obs$
//   .pipe(
//     filter((x) => x % 2 === 0),
//     first()
//   )
//   .subscribe(console.log);

//5보다 큰 3번째 짝수
// obs$
//   .pipe(
//     filter((x) => x > 5),
//     filter((x) => x % 2 === 0),
//     elementAt(2)
//   )
//   .subscribe(console.log);

//한 번 이상 나온 홀수들의 갯수, 합
// obs$
//   .pipe(
//     filter((x) => x % 2 === 0),
//     distinct(),
//     count()
//   )
//   .subscribe(console.log);
// obs$
//   .pipe(
//     filter((x) => x % 2 === 0),
//     distinct(),
//     reduce((acc, x) => acc + x)
//   )
//   .subscribe(console.log);
