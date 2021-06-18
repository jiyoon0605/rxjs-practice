const { fromEvent, interval, iif, empty, merge, BehaviorSubject } = rxjs;
const {
  map,
  tap,
  startWith,
  scan,
  takeUntil,
  take,
  pluck,
  switchMap,
  throttleTime,
  mergeMap,
} = rxjs.operators;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 3;
ctx.strokeStyle = "dodgerblue";
ctx.font = "16px sans-serif";

const whichMap = rxjs.operators.mergeMap;

fromEvent(canvas, "click")
  .pipe(
    map((e) => {
      return { x: e.x, y: e.y };
    }),
    startWith({ x1: null, y1: null, x2: null, y2: null }),
    scan((acc, cur) => {
      return { x1: acc.x2, y1: acc.y2, x2: cur.x, y2: cur.y };
    }),
    whichMap((xy) =>
      iif(
        (_) => xy.x1 === null,
        empty(),
        interval(10).pipe(
          startWith({ x1: xy.x1, y1: xy.y1, x2: xy.x1, y2: xy.y1 }),
          scan((acc, cur) => {
            return {
              x1: acc.x1,
              y1: acc.y1,
              x2: acc.x2 + (xy.x2 - xy.x1) / 100,
              y2: acc.y2 + (xy.y2 - xy.y1) / 100,
            };
          }),
          take(100)
        )
      )
    )
  )
  .subscribe(drawLine);

function drawLine(xy) {
  ctx.beginPath();
  ctx.moveTo(xy.x1, xy.y1);
  ctx.lineTo(xy.x2, xy.y2);
  ctx.closePath();
  ctx.stroke();
}
