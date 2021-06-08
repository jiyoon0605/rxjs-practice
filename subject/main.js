// const { Subject } = rxjs;
// const subject = new Subject();

// subject.subscribe(console.log);

// subject.next(1);
// subject.next(3);
// subject.next(5);

// const { Subject } = rxjs;
// const subject = new Subject();

// setTimeout((_) => {
//   let x = 0;
//   setInterval((_) => {
//     subject.next(x++);
//   }, 2000);
// }, 5000);

// subject.subscribe((x) => console.log("바로구독: " + x));

// setTimeout((_) => {
//   subject.subscribe((x) => console.log("3초 후 구독: " + x));
// }, 3000);
// setTimeout((_) => {
//   subject.subscribe((x) => console.log("10초 후 구독: " + x));
// }, 10000);
// setTimeout((_) => {
//   subject.subscribe((x) => console.log("14초 후 구독: " + x));
// }, 14000);

// const { interval, Subject } = rxjs;

// const subject = new Subject();
// const obs$ = interval(1000);

// obs$.subscribe(subject);

// subject.subscribe((x) => console.log("바로구독: " + x));
// setTimeout((_) => {
//   subject.subscribe((x) => console.log("3초 후 구독: " + x));
// }, 3000);
// setTimeout((_) => {
//   subject.subscribe((x) => console.log("5초 후 구독: " + x));
// }, 5000);
// setTimeout((_) => {
//   subject.subscribe((x) => console.log("10초 후 구독: " + x));
// }, 10000);

//BehaviorSubject
// const { BehaviorSubject } = rxjs;
// const subject = new BehaviorSubject(0); // 초기값이 있음

// subject.subscribe((x) => console.log("A: " + x));

// subject.next(1);
// subject.next(2);
// subject.next(3);

// subject.subscribe((x) => console.log("B: " + x));

// subject.next(4);
// subject.next(5);

//const lastValue = subject.getValue() 서브젝트가 마지막으로 발행한 값을 얻을 수 있습니다.

//ReplaySubject
// const { ReplaySubject } = rxjs;
// const subject = new ReplaySubject(3); // 마지막 3개 값 저장

// subject.subscribe((x) => console.log("A: " + x));

// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);
// subject.next(5);

// subject.subscribe((x) => console.log("B: " + x));

// subject.next(6);
// subject.next(7);

//AsyncSubject Complete 후의 마지막 값만 발행
// const { AsyncSubject } = rxjs;
// const subject = new AsyncSubject();

// subject.subscribe((x) => console.log("A: " + x));

// subject.next(1);
// subject.next(2);
// subject.next(3);

// subject.subscribe((x) => console.log("B: " + x));

// subject.next(4);
// subject.next(5);

// subject.subscribe((x) => console.log("C: " + x));

// subject.next(6);
// subject.next(7);
// subject.complete();
