import asyncHandler from 'express-async-handler';  
import User from "../models/User.js";


const getAllUsersController = asyncHandler (async (req, res) => {
  const users = await User.getAllUsers();

  res.status(200).json(users)
})

const signupUsersController = asyncHandler(async (req, res) => {
  const { username, email } = req.body;
  if(!username || !email){
    return res.status(404).json({ message: 'username and email are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)){
    return res.status(400).json({ message: 'Invalid email format' });
  }

  const user = await User.createUser(username, email);
  if(!user){
    return res.status(400).json({ message: 'db cannot create user' });
  }

  res.status(201).json(user)
});

const updateUsersController = asyncHandler(async(req, res) => {
  const userId = req.params.id;
  if(!userId){
    return res.status(404).json({ message: 'userId is required' });
  }

  const { username, email } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(email && !emailRegex.test(email)){
    return res.status(400).json({ message: 'Invalid email format' });
  }

  const updateUser = await User.updateUserById(username, email, userId)

  res.status(200).json(updateUser)
});

const getAllBetsUserController = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  if(!userId){
    return res.status(404).json({ message: 'userId is required' });
  }

  const bets = await User.getAllBetsUser(userId);

  res.status(200).send(bets)
});


export { getAllUsersController, signupUsersController, updateUsersController, getAllBetsUserController }