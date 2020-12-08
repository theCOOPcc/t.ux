import { updateUser } from '../../services/userService'

handleTest = async () => {
  const user = {
    name: "Cory Test 2",
    email: "jt@dog.com",
    password: "abc123",
    assignments: [],
    _id: "5fc5428eed9ce66e6246e158"
  }
  const banana = await userService.updateUser(user)
  console.log(banana)
  const taco = await userService.getAllUsers()
  console.log(taco)
}