```

1. 구독자 만들기
 const { from } = rxjs;
 const observable$ = from([1, 2, 3, 4, 5]);

 const observer = {
   next: console.log,
   error: (err) => console.error("발행중 오류", err),
   complete: () => console.log("발행물 완결"),
 };

 observable$.subscribe(observer);

 observable$.subscribe(
   console.log,
   err => console.error('발행중 오류', err),
   _ => console.log('발행물 완결')
 )


2. Error와 Complete 살펴보기

error
 const { Observable } = rxjs;

 const obs$ = new Observable((subscriber) => {
   subscriber.next(1);
   subscriber.next(2);
   subscriber.next(3)(null)[0];
   subscriber.next(4);
 });

 obs$.subscribe(
   console.log,
   (err) => console.error("발행중 오류", err),
   (_) => console.log("발행물 완결")
 );

complete
 const { Observable } = rxjs;

 const obs$ = new Observable((subscriber) => {
   subscriber.next(1);
   subscriber.next(2);
   subscriber.next(3);
   subscriber.complete();
   subscriber.next(4);
 });

 obs$.subscribe(
   console.log,
   (err) => console.error("발행중 오류", err),
   (_) => console.log("발행물 완결")
 );

3. 구독 해제하기
const { interval } = rxjs;

const obs$ = interval(1000);
const subscription = obs$.subscribe(console.log);

setTimeout((_) => subscription.unsubscribe(), 5500);

```
