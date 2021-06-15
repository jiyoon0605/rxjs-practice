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
const { range } = rxjs;
const { groupBy, mergeMap, toArray } = rxjs.operators;

range(1, 50)
  .pipe(
    groupBy((x) => x % 3),
    mergeMap((groups$) => groups$.pipe(toArray()))
  )
  .subscribe(console.log);
