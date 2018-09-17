export default text => {
  // declare
  let positionCurrent = 0
  let countTextArray = 0

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
    console.log(positionCurrent)
    if ((positionCurrent + 1) % 40 === 0 && positionCurrent !== 0) {
      console.log('true')
      positionCurrent = 0
      document.getElementById('text').innerHTML = array[++countTextArray]
      listText = getCharming()
      listText[0].style.textDecoration = 'underline'
      listText[0].style.color = '#6f6f6f'
      return
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
