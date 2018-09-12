export default text => {
  // declare
  let positionCurrent = 0

  // set text change
  document.getElementById('text').innerHTML = text

  // split pharagraph to span
  const charming = require('charming')
  const element = document.getElementById('text')
  charming(element, {
    tagName: 'span',
    classPrefix: 'letter'
  })

  // list text to change color
  const listText = element.children

  // global window keydown event from real keyboard
  window.addEventListener('keydown', function (e) {
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
