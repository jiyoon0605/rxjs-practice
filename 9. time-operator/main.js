//delay : 주어진 시간만큼 지연 발행
// const { interval, fromEvent } = rxjs;
// const { delay, tap, take } = rxjs.operators;

// interval(1000)
//   .pipe(
//     take(5),
//     tap((x) => console.log(x + " 발행시작")),
//     delay(1500)
//   )
//   .subscribe((x) => console.log(x + " 발행완료"));

// fromEvent(document, "click")
//   .pipe(
//     tap((e) => console.log(e.x + " 발행시작")),
//     delay(1500)
//   )
//   .subscribe((e) => console.log(e.x + " 발행완료"));

//timestamp : 타임스탬프 발행이 된 시점

// const { fromEvent } = rxjs;
// const { timestamp, pluck, map } = rxjs.operators;

// // fromEvent(document, "click")
// //   .pipe(pluck("x"), timestamp())
// //   .subscribe(console.log);

// fromEvent(document, "click")
//   .pipe(
//     pluck("x"),
//     timestamp(),
//     map((x) => {
//       x.timestamp = new Date(x.timestamp).toString();
//       return x;
//     })
//   )
//   .subscribe(console.log);

//timeinterval : 이전 발행물과의 시간차

// const { fromEvent, interval } = rxjs;
// const { timeInterval, pluck } = rxjs.operators;

// fromEvent(document, "click")
//   .pipe(pluck("x"), timeInterval())
//   .subscribe(console.log);
// interval(1000).pipe(timeInterval()).subscribe(console.log);

//timeout : 주어진 시간 내 다음 값 미발행 시 오류
// const { fromEvent } = rxjs;
// const { ajax } = rxjs.ajax;
// const { timeout, pluck } = rxjs.operators;

// // fromEvent(document, "click")
// //   .pipe(timeout(3000))
// //   .subscribe(
// //     (_) => console.log("OK"),
// //     (err) => console.error(err)
// //   );

// ajax("http://127.0.0.1:3000/people/name/random")
//   .pipe(pluck("response"), timeout(500))
//   .subscribe(console.log, console.error);

const { fromEvent, interval, of } = rxjs;
const { ajax } = rxjs.ajax;
const { timeoutWith, pluck, scan } = rxjs.operators;

// fromEvent(document, "click")
//   .pipe(
//     timeoutWith(3000, interval(1000)),
//     scan((acc, x) => {
//       return acc + 1;
//     }, 0)
//   )
//   .subscribe(console.log);

ajax("http://127.0.0.1:3000/people/name/random")
  .pipe(
    pluck("response"),
    timeoutWith(
      500,
      of({
        id: 0,
        first_name: "Hong",
        last_name: "Gildong",
        role: "substitute",
      })
    )
  )
  .subscribe(console.log, console.error);
