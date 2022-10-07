const axios = require('axios')
const signupApi = 'http://localhost:3001/api/user/signup'

const admin = {
  email: 'admin@gmail.com',
  password: 'adminadmin',
}



axios.post(signupApi, admin)
  .then(response => console.log(response))
  .catch(error => console.log(error))
