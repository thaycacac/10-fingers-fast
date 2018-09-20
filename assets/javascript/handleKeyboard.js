export default text => {
  // declare variable
  let positionCurrent = 0
  let countTextArray = 0
  const listPositionFinger = ['AQZ', 'WSX', 'EDC', 'RTFVB', ' ', ' ', 'YUJMN', 'IK', 'OL', 'P;']

  // plit text to have length = 40
  let array = splitText(text)

  // get list text and use charming to split each character is span
  document.getElementById('text').innerHTML = array[0]
  let listText = getCharming()

  // catch event when user enter keyboard
  showPositionFinger(listText[0].innerHTML.toUpperCase())
  window.addEventListener('keydown', function (e) {
    // if end  string have 40 character
    if ((positionCurrent + 1) % 40 === 0 && positionCurrent !== 0) {
      positionCurrent = 0
      document.getElementById('text').innerHTML = array[++countTextArray]
      listText = getCharming()
      listText[0].style.textDecoration = 'underline'
      listText[0].style.color = '#6f6f6f'
      return
    }

    // show position next and remove position enter
    hiddenPositionFinger(listText[positionCurrent].innerHTML.toUpperCase())
    showPositionFinger(listText[positionCurrent + 1].innerHTML.toUpperCase())

    // check code space then prevent scrolling
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
      // when true
      listText[positionCurrent].style.color = '#27ff1b'
      listText[positionCurrent].style.textDecoration = ''
    } else {
      // when false
      listText[positionCurrent].style.color = '#fd2020'
      listText[positionCurrent].style.textDecoration = ''
    }
    positionCurrent++
  })

  // show position finger in hand
  function showPositionFinger (textCheck) {
    let positionFinger
    // get index of list include character have key input
    const map = listPositionFinger.map(text => text.indexOf(textCheck))
    const indexInList = map.findIndex(number => {
      return number !== -1
    })
    // check user input keyboard then show position finger
    positionFinger = document.getElementsByClassName('position-finger')[indexInList]
    if (indexInList === 4) {
      const positionFingerSpace = document.getElementsByClassName('position-finger')[5]
      positionFingerSpace.setAttribute('style', 'visibility: visible;')
    }
    positionFinger.setAttribute('style', 'visibility: visible;')
  }

  // hidden position finger in hand when enter new keyboard
  function hiddenPositionFinger (textCheck) {
    let positionFinger
    // get index of list include character have key input
    const map = listPositionFinger.map(text => text.indexOf(textCheck))
    const indexInList = map.findIndex(number => {
      return number !== -1
    })
    if (indexInList === 4) {
      const positionFingerSpace = document.getElementsByClassName('position-finger')[5]
      positionFingerSpace.setAttribute('style', 'visibility: hidden;')
    }
    // check user input keyboard then show position finger
    positionFinger = document.getElementsByClassName('position-finger')[indexInList]
    positionFinger.setAttribute('style', 'visibility: hidden;')
  }

  // split text to array have length is 40
  function splitText (textOrigin) {
    const length = textOrigin.length
    let array = []
    for (let i = 0; i < length; i += 40) {
      array.push(text.substring(i, i + 40))
    }
    return array
  }
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
