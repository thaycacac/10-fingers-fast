export default () => {
  // split text to array
  const getText = document.querySelector('.__text')
  const listText = getText.innerHTML.split('')
  console.log(listText)

  // parent of text
  const parentText = getText.parentElement
  console.log(parentText)

  // create one text
  const element = document.createElement('span')
  const content = document.createTextNode('abcd')
  element.appendChild(content)
  parentText.appendChild(element)
}
