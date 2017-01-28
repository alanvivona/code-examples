

// 1
/*
Rx.Observable.timer(0,1000)
  .map(v => 'Seconds elapsed: '+ v)
  .subscribe(
    text => {
      const container = document.querySelector('#app')
      container.textContent = text
    }
)
*/


// 2 Separate logic from effects
/*
function main(){
  return Rx.Observable.timer(0,1000)
    .map(v => 'Seconds elapsed: '+ v)
}

function DOMEffect(text$){
  text$.subscribe(
    text => {
      const container = document.querySelector('#app')
      container.textContent = text
    }
  )
}

function consoleLogEffect(msg$){
  msg$.subscribe(msg => console.log(msg))
}

const sink = main()
DOMEffect(sink())
consoleLogEffect(sink())
*/

// 3 - Different streams for each effect
/*
function main(){
  return {
    DOM: Rx.Observable.timer(0,1000).map(v => 'Seconds elapsed: '+ v),
    Log: Rx.Observable.timer(0,1000).map(v => 2*v)
  }
}

function DOMEffect(text$){
  text$.subscribe(
    text => {
      const container = document.querySelector('#app')
      container.textContent = text
    }
  )
}

function consoleLogEffect(msg$){
  msg$.subscribe(msg => console.log(msg))
}

const sinks = main()
DOMEffect(sinks.DOM)
consoleLogEffect(sinks.Log)
*/

// 4 - "Run" function
/*
function main(){
  return {
    DOM: Rx.Observable.timer(0,1000).map(v => 'Seconds elapsed: '+ v),
    Log: Rx.Observable.timer(0,1000).map(v => 2*v)
  }
}

function DOMEffect(text$){
  text$.subscribe(
    text => {
      const container = document.querySelector('#app')
      container.textContent = text
    }
  )
}

function consoleLogEffect(msg$){
  msg$.subscribe(msg => console.log(msg))
}

const effecsFunctions = {
  DOM: DOMEffect,
  // Log: consoleLogEffect we can enable and disable effects
}

function run(mainFN, effects){
  const sinks = mainFN()
  Object.keys(effects).forEach(key => {
    effects[key](sinks[key])
  });
}

run(main, effecsFunctions)
*/

// 5 - Drivers
function main(){
  return {
    DOM: Rx.Observable.timer(0,1000).map(v => 'Seconds elapsed: '+ v),
    Log: Rx.Observable.timer(0,1000).map(v => 2*v)
  }
}

function DOMDriver(text$){
  text$.subscribe(
    text => {
      const container = document.querySelector('#app')
      container.textContent = text
    }
  )
}

function consoleLogDriver(msg$){
  msg$.subscribe(msg => console.log(msg))
}

const drivers = {
  DOM: DOMDriver,
  // Log: consoleLogDriver we can enable and disable effects
}

function run(mainFN, effects){
  const sinks = mainFN()
  Object.keys(effects).forEach(key => {
    effects[key](sinks[key])
  });
}

run(main, drivers)