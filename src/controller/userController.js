import User from "../models/User.js";


const getAllUsersController = async (req, res) => {
  const users = await User.getAllUsers();

  res.status(200).json(users)
}

const signupUsersController = async (req, res) => {
  const { username, email } = req.body;
  const user = new User(username, email);
  const result = await user.save();

  res.status(201).json(result)
}

const updateUsersController = async(req, res) => {
  const userId = req.params.id;
  console.log(userId)
  if(!userId){
    return res.status(404).json({ message: 'userId is required' });
  }

  const { username, email } = req.body;

  const updateUser = await User.updateUserById(username, email, userId)
  console.log(updateUser)

  res.status(200).json(updateUser)
}

const getAllBetsUserController = async (req, res) => {
  const userId = req.params.id;

  const bets = await User.getAllBetsUser(userId);

  res.status(200).send(bets)
}


export { getAllUsersController, signupUsersController, updateUsersController, getAllBetsUserController }