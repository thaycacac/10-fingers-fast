export default text => {
  // declare variable
  let positionCurrent = 0
  let countTextArray = 0
  let countNumberInput = 0
  let countNumberCorrect = 0
  let countNumberIncorrect = 0
  let checkStart = false
  const listPositionFinger = ['AQZ', 'WSX', 'EDC', 'RTFVGB', ' ', ' ', 'YUHJMN', 'IK', 'OL', 'P;']

  // setup number total leng
  setNumberTotal(text)

  // plit text to have length = 40
  let array = splitText(text)

  // get list text and use charming to split each character is span
  document.getElementById('text').innerHTML = array[0]
  let listText = getCharming()

  // catch event when user enter keyboard
  showPositionFinger(listText[0].innerHTML.toUpperCase(), listPositionFinger)
  window.addEventListener('keydown', function (e) {
    // check done string
    if (countNumberInput === text.length) {
      document.getElementById('text').innerHTML = 'DONE!!!'
      return
    }

    // set nummber input
    document.getElementById('__number-input').innerHTML = ++countNumberInput

    // check the first time to count time
    checkStart = !checkStart
    if (checkStart) {
      let countTime = 0
      setInterval(() => {
        if (countNumberInput === text.length) {
          return
        } else {
          countTime++
        }
        let seconds = countTime % 60
        let minute = parseInt(countTime / 60)
        document.getElementById('__number-time').innerHTML = ('0' + minute).slice(-2) + ':' + ('0' + seconds).slice(-2)
        document.getElementById('__number-speed').innerHTML = parseInt(60 * countNumberInput / countTime) + ' Từ/Phút'
      }, 1000)
    }

    checkStart = true

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
    hiddenPositionFinger(listText[positionCurrent].innerHTML.toUpperCase(), listPositionFinger)
    showPositionFinger(listText[positionCurrent + 1].innerHTML.toUpperCase(), listPositionFinger)

    // check code space then prevent scrolling
    if (e.keyCode === 32) {
      e.preventDefault()
    }

    // show text need input
    updateTextAfter(positionCurrent, listText)
    if (e.key.toUpperCase() === listText[positionCurrent].innerHTML.toUpperCase()) {
      // when input correct
      updateInputCorrect(listText, positionCurrent, ++countNumberCorrect, countNumberInput)
    } else {
      // when input incorrect
      updateInputIncorrect(listText, positionCurrent, ++countNumberIncorrect)
    }
    positionCurrent++
  })
}

// split text to array have length is 40
function splitText(textOrigin) {
  const length = textOrigin.length
  let array = []
  for (let i = 0; i < length; i += 40) {
    array.push(textOrigin.substring(i, i + 40))
  }
  return array
}

// hidden position finger in hand when enter new keyboard

function hiddenPositionFinger(textCheck, listPositionFinger) {
  let positionFinger
  // get index of list include character have key input
  const map = listPositionFinger.map(text => text.indexOf(textCheck))
  let indexInList = map.findIndex(number => {
    return number !== -1
  })
  if (indexInList === 4) {
    const positionFingerSpace = document.getElementsByClassName('position-finger')[5]
    positionFingerSpace.setAttribute('style', 'visibility: hidden;')
  }
  // check user input keyboard then show position finger
  positionFinger = document.getElementsByClassName('position-finger')[indexInList]
  if (positionFinger) {
    positionFinger.setAttribute('style', 'visibility: hidden;')
  } else {
    console.log('thaycacac')
  }
}

// show position finger in hand
function showPositionFinger(textCheck, listPositionFinger) {
  let positionFinger
  // get index of list include character have key input
  const map = listPositionFinger.map(text => text.indexOf(textCheck))
  let indexInList = map.findIndex(number => {
    return number !== -1
  })
  // check user input keyboard then show position finger
  positionFinger = document.getElementsByClassName('position-finger')[indexInList]
  if (indexInList === 4) {
    const positionFingerSpace = document.getElementsByClassName('position-finger')[5]
    positionFingerSpace.setAttribute('style', 'visibility: visible;')
  }
  positionFinger = document.getElementsByClassName('position-finger')[indexInList]
  if (positionFinger) {
    positionFinger.setAttribute('style', 'visibility: visible;')
  } else {
    console.log('thaycacac')
  }
}

// set up number total leng
function setNumberTotal(text) {
  document.getElementById('__number-total').innerHTML = text.length
}

// check input of user
function updateTextAfter(positionCurrent, listText) {
  let afterPositionCurrent = positionCurrent + 1
  listText[afterPositionCurrent].style.textDecoration = 'underline'
  listText[afterPositionCurrent].style.color = '#6f6f6f'
}

// update when user input correct
function updateInputCorrect(listText, positionCurrent, countNumberCorrect, countNumberInput) {
  // update color text
  listText[positionCurrent].style.color = '#0abf00'
  listText[positionCurrent].style.textDecoration = ''
  // update percent
  const percent = countNumberCorrect / countNumberInput * 100
  document.getElementById('__number-percent').innerHTML = parseFloat(Math.round(percent * 100) / 100).toFixed(2)
}

// update when user input incorrect
function updateInputIncorrect(listText, positionCurrent, countNumberIncorrect) {
  listText[positionCurrent].style.color = '#fd2020'
  listText[positionCurrent].style.textDecoration = ''
  document.getElementById('__number-incorrect').innerHTML = countNumberIncorrect
}

// split pharagraph to span
function getCharming() {
  const charming = require('charming')
  const element = document.getElementById('text')
  charming(element, {
    tagName: 'span',
    classPrefix: 'letter'
  })
  // list text to change color
  return element.children
}
