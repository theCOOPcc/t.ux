import userService from '../../services/userService'

const info = userService.getAllUsers() 

console.log('users', info)