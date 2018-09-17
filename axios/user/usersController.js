import axios from 'axios'

const signup = (username, firstname, lastname, dob, email, password) => {
  axios.post('/api/signup', {
    username: username,
    firstname: firstname,
    lastname: lastname,
    dob: dob,
    email: email,
    password: password
  })
    .then(function (response) {
      console.log(response.data.error)
      console.log(response.data.message)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export { signup }
