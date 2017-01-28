
// multiple clicks stram example

const btnElement = document.querySelector('#btn')

const clicks$ = Rx.Observable.fromEvent(btnElement, 'click')
const clickGroups$ = clicks$.buffer(clicks$.throttleTime(250))
const clickGroupsQuantity$ = clickGroups$.map(e => e.length)

const multipleClicks$ = clickGroupsQuantity$.filter(e => e > 1).subscribe(
  val => {
    console.log('multiple click: ', val)
  },
  err => {
    console.log('multiple click error: ', err)
  },
  () => {
    console.log('multiple click completed')
  }
)


