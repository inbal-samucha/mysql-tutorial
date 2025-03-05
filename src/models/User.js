import { pool as db } from '../config/db.js';

export default class User {


  static async createUser (username, email){

    try{
      const sql = `INSERT INTO users (username, email) VALUES (?,?)`;
      const [result] = await db.execute(sql, [username, email]);

      return { id: result.insertId, username, email };

    }catch(err){
      console.error("Error fetching user by ID:", err.message);
      throw err;
    }
  }

  static async getAllUsers() {
    const sql = `SELECT * FROM users`;

    const [rows] = await db.query(sql);

    return rows
  }

  static async getUserById(id) {
    
    try{
      const sql = `SELECT * FROM users WHERE id = ?`;
  
      const [rows] = await db.execute(sql, [id]);

      if(rows.length === 0){
        const error = new Error ('User not found');
        error.statusCode = 404;
        throw error;
      }
     
      return rows[0];

    }catch(err){
      console.error("Error fetching user by ID:", err.message);
      throw err;
    }
  }

  static async updateUserById(username , email , id) {

    try{
        const sql = `UPDATE users SET username = COALESCE(?, username),email = COALESCE(?, email) WHERE id = ?`;
      
        const [rows] = await db.execute(sql, [username ?? null, email ?? null, id]);
        if(rows.affectedRows === 0){
          const error = new Error ('User not found');
          error.statusCode = 404;
          throw error;
        }
         
        return rows;

    }catch(err){
      console.error("Error update user by ID:", err.message);
      throw err;
    }
  }

  static async getAllBetsUser(id){

    try{
      const sql = `SELECT * FROM bets WHERE user_id = ?`;
  
      const [rows] = await db.execute(sql, [id]);

      if(rows.length === 0){
        const error = new Error ('No bets found for this user');
        error.statusCode = 404;
        throw error;
      }
  
      return rows

    }catch(err){
      console.error("Error get all user bets:", err.message);
      throw err;
    }
  }
}