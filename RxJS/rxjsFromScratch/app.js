// Event callback
const element = document.querySelector('#elementID')

function callback(e){
  console.log('clicked', e)
}

element.addEventListener('click', callback)