export default () => { 
  // keys
  let keyboardElement = document.getElementsByClassName('keyboard')
  let keys = document.querySelectorAll('kbd')

  // audio 
  let keyAudio = document.getElementById('keyAudio')

  // toggle class on a lock key element
  function toggleLockClass (element) {
    element.classList.toggle('on')
  };

  // toggle function for caps, num, and scroll lock keys
  function toggleKey (code) {
    var el
    // detect el based on keyCode
    switch (code) {
      case '20':
        el = document.getElementById('clk')
        toggleLockClass(el)
        break
      case '123':
        keyboardElement[0].classList.toggle('light-off')
        break
      case '144':
        el = document.getElementById('nlk')
        toggleLockClass(el)
        break
      case '145':
        el = document.getElementById('slk')
        toggleLockClass(el)
        break
      default:
        keyAudio.currentTime = 0
        keyAudio.play()
        break
    }
  };

  // on screen keyboard keypress event
  function keyPress (e) {
    let keyAttribute = e.target.dataset.key
    if (e.target.localName === 'i' || e.target.localName === 'span') {
      // get data-key of kbd which is a parent of <i>
      keyAttribute = e.target.parentNode.dataset.key
    }
    toggleKey(keyAttribute)
  };

  // virtual keyboard key event
  keys.forEach(key => key.addEventListener('click', keyPress))

  // color themes button events

  let themeFourElement = document.getElementById('t-4')

  let customeElement = document.getElementById('c-t')
  let customToggle = false

  function toggleCustomThemeContent () {
    customToggle = !customToggle
    if (customToggle) {
      customeElement.style.display = 'block'
    } else {
      customeElement.style.display = 'none'
    }
  }

  // toggle key-press class on keys when real keyboard key is clicked
  function toggleKeyPress (el) {
    if (el.classList.contains('key-press')) {
      el.classList.remove('key-press')
    } else {
      keys.forEach(key => key.classList.remove('key-press'))
      el.classList.add('key-press')
    }
  }

  // global window keydown event from real keyboard
  window.addEventListener('keydown', function (e) {
    let code = e.keyCode.toString()
    let keyElement = document.querySelector(`kbd[data-key="${code}"]`)
    toggleKey(code)
    toggleKeyPress(keyElement)
  })
}
