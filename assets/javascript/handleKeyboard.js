export default text => {
  console.log('mount')
  // declare
  let positionCurrent = 0
  let countTextArray = 1

  const length = text.length
  let array = []
  for (let i = 0; i < length; i += 40) {
    array.push(text.substring(i, i + 40))
  }
  // set text change
  document.getElementById('text').innerHTML = array[0]

  let listText = getCharming()

  // global window keydown event from real keyboard
  window.addEventListener('keydown', function (e) {
    // FIXME: fix when turn 2  
    let positionCheck = positionCurrent + 2
    if (positionCheck % 40 === 0) {
      document.getElementById('text').innerHTML = array[++countTextArray]
      positionCurrent = 0
      listText = getCharming()
    }
    // check code space then prevent
    if (e.keyCode === 32) {
      e.preventDefault()
    }

    const code = e.keyCode.toString()
    const keyElement = document.querySelector(`kbd[data-key="${code}"]`)
    // check input of user
    let afterPositionCurrent = positionCurrent + 1
    listText[afterPositionCurrent].style.textDecoration = 'underline'
    listText[afterPositionCurrent].style.color = '#6f6f6f'
    if (keyElement.innerHTML.toUpperCase() === listText[positionCurrent].innerHTML.toUpperCase()) {
      listText[positionCurrent].style.color = '#27ff1b'
      listText[positionCurrent].style.textDecoration = ''
    } else {
      listText[positionCurrent].style.color = '#fd2020'
      listText[positionCurrent].style.textDecoration = ''
    }
    positionCurrent++
  })
}

// split pharagraph to span
function getCharming () {
  const charming = require('charming')
  const element = document.getElementById('text')
  charming(element, {
    tagName: 'span',
    classPrefix: 'letter'
  })

  // list text to change color
  return element.children
}
