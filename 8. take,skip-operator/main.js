// const { range, interval, fromEvent } = rxjs;
// const { take, filter, pluck } = rxjs.operators;

//range(1, 20).pipe(take(5)).subscribe(console.log);

// range(1, 20)
//   .pipe(
//     filter((x) => x % 2 === 0),
//     take(5)
//   )
//   .subscribe(console.log);

// range(1, 20)
//   .pipe(
//     take(5),
//     filter((x) => x % 2 === 0)
//   )
//   .subscribe(console.log);

// interval(1000)
//   .pipe(take(5))
//   .subscribe(
//     console.log,
//     (err) => console.error(err),
//     (_) => console.log("COMPLETE")
//   );

// fromEvent(document, "click")
//   .pipe(take(5), pluck("x"))
//   .subscribe(
//     console.log,
//     (err) => console.error(err),
//     (_) => console.log("COMPLETE")
//   );

// fromEvent(document, "click")
//   .pipe(
//     pluck("x"),
//     filter((x) => x < 200),
//     take(5)
//   )
//   .subscribe(
//     console.log,
//     (err) => console.error(err),
//     (_) => console.log("COMPLETE")
//   );

// const { range, interval, fromEvent } = rxjs;
// const { takeLast, take, pluck } = rxjs.operators;

//range(1, 20).pipe(takeLast(5)).subscribe(console.log);

// interval(1000)
//   .pipe(takeLast(5))
//   .subscribe(
//     console.log,
//     (err) => console.error(err),
//     (_) => console.log("COMPLETE")
//   );

// interval(1000)
//   .pipe(take(10), takeLast(5))
//   .subscribe(
//     console.log,
//     (err) => console.error(err),
//     (_) => console.log("COMPLETE")
//   );

// fromEvent(document, "click")
//   .pipe(takeLast(5), pluck("x"))
//   .subscribe(
//     console.log,
//     (err) => console.error(err),
//     (_) => console.log("COMPLETE")
//   );

// fromEvent(document, "click")
//   .pipe(take(10), takeLast(5), pluck("x"))
//   .subscribe(
//     console.log,
//     (err) => console.error(err),
//     (_) => console.log("COMPLETE")
//   );

//takeWhile : ~하는동안 선택
// const { range, interval, fromEvent } = rxjs;
// const { takeWhile, takeLast, filter, pluck } = rxjs.operators;
// range(1, 20)
//   .pipe(takeWhile((x) => x <= 10))
//   .subscribe(console.log);

// interval(1000)
//   .pipe(takeWhile((x) => x < 5))
//   .subscribe(
//     console.log,
//     (err) => console.error(err),
//     (_) => console.log("COMPLETE")
//   );

// fromEvent(document, "click")
//   .pipe(
//     pluck("x"),
//     takeWhile((x) => x < 200)
//   )
//   .subscribe(
//     console.log,
//     (err) => console.error(err),
//     (_) => console.log("COMPLETE")
//   );

//takeUntil : 기준이 되는 스트림이 발행하기까지
// const { interval, timer, fromEvent } = rxjs;
// const { ajax } = rxjs.ajax;
// const { takeUntil, pluck, tap } = rxjs.operators;

// obs1$ = interval(1000);
// obs2$ = fromEvent(document, "click");

// obs1$.pipe(takeUntil(obs2$)).subscribe(
//   console.log,
//   (err) => console.error(err),
//   (_) => console.log("COMPLETE")
// );

// obs1$ = fromEvent(document, "click");
// obs2$ = timer(5000);

// obs1$.pipe(pluck("x"), takeUntil(obs2$)).subscribe(
//   console.log,
//   (err) => console.error(err),
//   (_) => console.log("COMPLETE")
// );

// interval(50)
//   .pipe(
//     takeUntil(
//       ajax("http://127.0.0.1:3000/people/name/random").pipe(
//         pluck("response"),
//         tap(console.log)
//       )
//     )
//   )
//   .subscribe(console.log);

//skip
// const { range, interval, fromEvent } = rxjs;
// const { skip, filter, pluck } = rxjs.operators;

// range(1, 20).pipe(skip(5)).subscribe(console.log);

// interval(1000)
//   .pipe(skip(5))
//   .subscribe(
//     console.log,
//     (err) => console.error(err),
//     (_) => console.log("COMPLETE")
//   );

// fromEvent(document, "click")
//   .pipe(skip(5), pluck("x"))
//   .subscribe(
//     console.log,
//     (err) => console.error(err),
//     (_) => console.log("COMPLETE")
//   );

//skipLast : 뒤에서부터 N개 건너뛰기
// const { range, interval, fromEvent } = rxjs;
// const { skipLast, pluck } = rxjs.operators;

// range(1, 20).pipe(skipLast(5)).subscribe(console.log);
// interval(1000)
//   .pipe(skipLast(5))
//   .subscribe(
//     console.log,
//     (err) => console.error(err),
//     (_) => console.log("COMPLETE")
//   );
// fromEvent(document, "click")
//   .pipe(skipLast(5), pluck("x"))
//   .subscribe(
//     console.log,
//     (err) => console.error(err),
//     (_) => console.log("COMPLETE")
//   );

//skipWhile : ~하는동안 건너뛰기

// const { range, interval, fromEvent } = rxjs;
// const { skipWhile, filter, pluck } = rxjs.operators;

// range(1, 20)
//   .pipe(skipWhile((x) => x <= 10))
//   .subscribe(console.log);

// interval(1000)
//   .pipe(skipWhile((x) => x < 5))
//   .subscribe(
//     console.log,
//     (err) => console.error(err),
//     (_) => console.log("COMPLETE")
//   );

// fromEvent(document, "click")
//   .pipe(
//     pluck("x"),
//     skipWhile((x) => x < 200)
//   )
//   .subscribe(
//     console.log,
//     (err) => console.error(err),
//     (_) => console.log("COMPLETE")
//   );

//skipUntil : 기준이 되는 스트림이 발행하고부터

// const { interval, timer, fromEvent } = rxjs;
// const { skipUntil, pluck } = rxjs.operators;

// const obs1$ = interval(1000);
// const obs2$ = fromEvent(document, "click");

// obs1$.pipe(skipUntil(obs2$)).subscribe(
//   console.log,
//   (err) => console.error(err),
//   (_) => console.log("COMPLETE")
// );

// const obs1$ = fromEvent(document, "click");
// const obs2$ = timer(5000);

// obs1$.pipe(pluck("x"), skipUntil(obs2$)).subscribe(
//   console.log,
//   (err) => console.error(err),
//   (_) => console.log("COMPLETE")
// );
