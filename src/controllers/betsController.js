import Bet from '../models/Bet.js';
import asyncHandler from 'express-async-handler';  



const getAllBetsController = (req, res) => {
  res.send('getAllBetssController')
}

const createNewBetController = asyncHandler( async (req, res) => {
  const { user_id, bet_amount, bet_type } = req.body;
  if(!user_id || !bet_amount || !bet_type){
    return res.status(404).json({ message: 'user_id, bet_amount, bet_type are required' });
  }

  const bet = await Bet.createBet(user_id, bet_amount, bet_type);
  if(!bet){
    return res.status(400).json({ message: 'db cannot create bet' });
  }

  res.status(201).json(bet)
});

export { getAllBetsController, createNewBetController }