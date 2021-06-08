//1. Pipable operators:
// const { range } = rxjs;

// const { filter, map } = rxjs.operators;
// const observable$ = range(1, 10);

// const observer = {
//   next: (x) => console.log(x + " 발행"),
//   error: (err) => console.error("발행중 오류", err),
//   complete: () => console.log("발행물 완결"),
// };

// observable$
//   .pipe(
//     filter((x) => x % 2 === 0),
//     map((x) => x * x)
//   )
//   .subscribe(observer);

//2. 시간, 이벤트에 의한 발행물에 적용해보기
// const { interval } = rxjs;

// const { tap, filter, map } = rxjs.operators;
// const observable$ = interval(1000);

// const observer = {
//   next: (x) => console.log(x + " 발행"),
//   error: (err) => console.error("발행중 오류", err),
//   complete: () => console.log("발행물 완결"),
// };

// observable$
//   .pipe(
//     tap(console.log),
//     filter((x) => x % 2 === 0),
//     map((x) => x * x)
//   )
//   .subscribe(observer);
const { fromEvent } = rxjs;

const { map } = rxjs.operators;
const observable$ = fromEvent(document, "click");

const observer = {
  next: (x) => console.log(x + " 발행"),
  error: (err) => console.error("발행중 오류", err),
  complete: () => console.log("발행물 완결"),
};

observable$.pipe(map((e) => e.x + " " + e.y)).subscribe(observer);
