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

// const { fromEvent, interval, of } = rxjs;
// const { ajax } = rxjs.ajax;
// const { timeoutWith, pluck, scan } = rxjs.operators;

// fromEvent(document, "click")
//   .pipe(
//     timeoutWith(3000, interval(1000)),
//     scan((acc, x) => {
//       return acc + 1;
//     }, 0)
//   )
//   .subscribe(console.log);

// ajax("http://127.0.0.1:3000/people/name/random")
//   .pipe(
//     pluck("response"),
//     timeoutWith(
//       500,
//       of({
//         id: 0,
//         first_name: "Hong",
//         last_name: "Gildong",
//         role: "substitute",
//       })
//     )
//   )
//   .subscribe(console.log, console.error);

// const { fromEvent } = rxjs;
// const { timeInterval, pluck, scan, tap } = rxjs.operators;

// const clicks$ = fromEvent(document, "click").pipe(
//   timeInterval(),
//   pluck("interval"),
//   scan((acc, i) => acc + i, 0),
//   tap((x) => console.log("CLICKED: " + x))
// );

//debounceTime: 일정시간동안 다음값이 나오지 않아야 마지막값을 출력
// const { debounceTime } = rxjs.operators;

// clicks$
//   .pipe(debounceTime(1000))
//   .subscribe((x) => console.log("OUTPUT: -------- " + x));

// clicks$.subscribe();

//auditTime : 특정 값이 발행되고 나서 시간이 지나면 그 값 또는 또는 시간이 지나기 전에 생성된 마지막값을 출력(시간이 지나면 무조건 출력)
// const { auditTime } = rxjs.operators;

// clicks$
//   .pipe(auditTime(1000))
//   .subscribe((x) => console.log("OUTPUT: -------- " + x));

//sampletime : 가장 가까운 시간내에 있는값 출력
// const { sampleTime } = rxjs.operators;

// clicks$
//   .pipe(sampleTime(1000), timeInterval())
//   .subscribe((x) =>
//     console.log("OUTPUT: -------- " + x.value + " :" + x.interval)
//   );

//throttlTime
//const { throttleTime } = rxjs.operators;

//leading:true 출력은 바로 되지만 정해진 시간동안에는 출력을 멈춤
// clicks$
//   .pipe(
//     throttleTime(1000, undefined, {
//       leading: true,
//       trailing: false,
//     })
//   )
//   .subscribe((x) => console.log("OUTPUT: -------- " + x));

//trailing:true : 정해진 시간마다 마지막값을 출력
// const { throttleTime } = rxjs.operators;

// clicks$
//   .pipe(
//     throttleTime(1000, undefined, {
//       leading: false,
//       trailing: true,
//     })
//   )
//   .subscribe((x) => console.log("OUTPUT: -------- " + x));

// clicks$
//   .pipe(
//     throttleTime(1000, undefined, {
//       leading: true,
//       trailing: true,
//     })
//   )
//   .subscribe((x) => console.log("OUTPUT: -------- " + x));

// const { fromEvent, interval, timer } = rxjs;
// const { debounce, audit, pluck } = rxjs.operators;

// fromEvent(document, "click")
//   .pipe(
//     pluck("y"),
//     debounce((y) => timer(y * 10))
//   )
//   .subscribe(console.log);

// const { BehaviorSubject, fromEvent, interval } = rxjs;
// const { debounce, tap } = rxjs.operators;

// const bs = new BehaviorSubject(1000);

// fromEvent(document, "click")
//   .pipe(
//     tap((_) => console.log(bs.getValue())),
//     debounce((e) => interval(bs.getValue())),
//     tap((_) => bs.next(bs.getValue() + 500))
//   )
//   .subscribe((_) => console.log("CLICK"));

// const { fromEvent, interval } = rxjs;
// const { sample } = rxjs.operators;

// interval(1000)
//   .pipe(sample(fromEvent(document, "click")))
//   .subscribe(console.log);
