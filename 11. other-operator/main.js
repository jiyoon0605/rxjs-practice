// const { from, fromEvent } = rxjs;
// const { sequenceEqual, mergeMap, map, take } = rxjs.operators;

// const num$ = from([3, 1, 4, 7, 5, 8, 2]);

// //sequenceEqual : 타이밍에 관계없이, 두 스트림 발행물들의 순서와 값 동일 여부 반환
// const key$ = fromEvent(document, "keyup")
//   .pipe(
//     map((e) => Number(e.code.replace("Digit", ""))),
//     take(7),
//     sequenceEqual(num$)
//   )
//   .subscribe(console.log);

//distinctUntilChanged : 같은 값이 연속되는 것만 제외
// const { of } = rxjs;
// const { distinctUntilChanged } = rxjs.operators;

// of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 3, 4, 4, 1)
//   .pipe(distinctUntilChanged())
//   .subscribe(console.log);

// const { from } = rxjs;
// const { distinctUntilChanged } = rxjs.operators;

// const students = [
//   { name: "홍길동", sex: "male" },
//   { name: "전우치", sex: "male" },
//   { name: "아라치", sex: "female" },
//   { name: "성춘향", sex: "female" },
//   { name: "임꺽정", sex: "male" },
// ];
// from(students)
//   .pipe(distinctUntilChanged((a, b) => a.sex === b.sex))
//   .subscribe(console.log);

//combineLatest Operator : 두 스트림을 각 최신 값들끼리 결합

// const { combineLatest, interval, fromEvent } = rxjs;
// const { pluck } = rxjs.operators;

// combineLatest(
//   interval(2000),
//   fromEvent(document, "click").pipe(pluck("x"))
// ).subscribe(console.log);

//buffer Operator : 주어진 스트림을 두번째 스트림이 발행할때마다 끊어서 내보냄
// const { interval, fromEvent } = rxjs;
// const { buffer } = rxjs.operators;

// interval(1000)
//   .pipe(buffer(fromEvent(document, "click")))
//   .subscribe(console.log);

//bufferCount Operator :
// const { range } = rxjs;
// const { bufferCount } = rxjs.operators;

// range(1, 100).pipe(bufferCount(10, 10)).subscribe(console.log);
// 클릭 3번중 한 번만 반응하기
// const { fromEvent } = rxjs;
// const { bufferCount } = rxjs.operators;

// fromEvent(document, "click")
//   .pipe(bufferCount(3))
//   .subscribe((_) => console.log("FIRE"));

//bufferTime Operator
// const { interval } = rxjs;
// const { bufferTime } = rxjs.operators;

// interval(200).pipe(bufferTime(2000)).subscribe(console.log);

//groupBy Operator
// const { range } = rxjs;
// const { groupBy, mergeMap, toArray } = rxjs.operators;

// range(1, 50)
//   .pipe(
//     groupBy((x) => x % 3),
//     mergeMap((groups$) => groups$.pipe(toArray()))
//   )
//   .subscribe(console.log);

//startWith/endWith : 맨 앞/뒤에 1~N개 요소 추가
// const { of } = rxjs;
// const { startWith, endWith } = rxjs.operators;

// const obs$ = of(1, 2, 3);

// obs$.pipe(startWith(0)).subscribe(console.log);
// // obs$.pipe(startWith(-2, -1, 0)).subscribe(console.log);

// obs$.pipe(endWith(4)).subscribe(console.log);

//every : 모든 발행물들이 주어진 조건에 부합하는가 여부
// const { of } = rxjs;
// const { every } = rxjs.operators;

// of(1, 3, 5, 7, 9, 11, 13, 15)
//   .pipe(every((x) => x % 2 !== 0))
//   .subscribe(console.log);

//defaultIfEmpty : 발행물이 없을 시 기본값 발행
// const { fromEvent, timer } = rxjs;
// const { defaultIfEmpty, pluck, takeUntil } = rxjs.operators;

// fromEvent(document, "click")
//   .pipe(takeUntil(timer(5000)), pluck("x"), defaultIfEmpty("NO CLICK"))
//   .subscribe(console.log);

//retry : 발행 실패시 N회 재시도
// const { range } = rxjs;
// const { ajax } = rxjs.ajax;
// const { mergeMap, pluck, retry } = rxjs.operators;

// range(1, 20)
//   .pipe(
//     mergeMap((keyword) =>
//       ajax(`http://127.0.0.1:3000/people/quarter-error/${keyword}`).pipe(
//         pluck("response", "first_name"),
//         retry(3)
//       )
//     )
//   )
//   .subscribe(console.log);

//defer : 조건에 따라 스트림 발행
// const { defer, fromEvent, of } = rxjs;
// const { pluck } = rxjs.operators;

// fromEvent(document.querySelector("#check"), "change")
//   .pipe(pluck("target", "checked"))
//   .subscribe((checked) => {
//     defer((_) => (checked ? of("CHECKED") : of("UNCHECKED"))).subscribe(
//       console.log
//     );
//   });

//iif : 단순화된 defer: 조건에 따라 두 스트림 중 하나 발행
// const { iif, fromEvent, of } = rxjs;
// const { pluck } = rxjs.operators;

// fromEvent(document.querySelector("#check"), "change")
//   .pipe(pluck("target", "checked"))
//   .subscribe((checked) => {
//     iif((_) => checked, of("CHECKED"), of("UNCHECKED")).subscribe(
//       console.log,
//       (err) => console.log(err),
//       (_) => console.log("COMPLETE")
//     );
//   });

//empty
// const { empty } = rxjs;

// empty().subscribe(console.log, console.error, (_) => console.log("COMPLETE"));

//throwError
// const { throwError } = rxjs;

// throwError("ERROR").subscribe(console.log, console.error, (_) =>
//   console.log("COMPLETE")
// );

//share : 스트림을 여러 구독자들간 공유, 스트림의 부작용(tap 등)이 한 번만 발생
// const { interval } = rxjs;
// const { take, tap, takeLast, share } = rxjs.operators;

// const obs$ = interval(1000).pipe(
//   take(20),
//   tap((x) => console.log(`side effect: ${x}`)),
//   share()
// );

// obs$.subscribe((x) => console.log(`subscriber 1: ${x}`));

// setTimeout((_) => {
//   obs$.subscribe((x) => console.log(`subscriber 2: ${x}`));
// }, 5000);
// setTimeout((_) => {
//   obs$.subscribe((x) => console.log(`subscriber 3: ${x}`));
// }, 10000);

//shareReplay : share 된 스트림의 마지막 N개 발행물을 새 구독자에게 발행
// const { interval } = rxjs;
// const { take, tap, takeLast, shareReplay } = rxjs.operators;

// const obs$ = interval(1000).pipe(
//   take(20),
//   tap((x) => console.log(`side effect: ${x}`)),
//   shareReplay(3)
// );

// obs$.subscribe((x) => console.log(`subscriber 1: ${x}`));

// setTimeout((_) => {
//   obs$.subscribe((x) => console.log(`subscriber 2: ${x}`));
// }, 5000);
// setTimeout((_) => {
//   obs$.subscribe((x) => console.log(`subscriber 3: ${x}`));
// }, 10000);
