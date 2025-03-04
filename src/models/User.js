import { pool as db } from '../config/db.js';

export default class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  async save (){

    const sql = `INSERT INTO users (username, email) VALUES (?,?)`;

    const result = await db.execute(sql, [this.username, this.email]);

    return result;
  }

  static async getAllUsers() {
    const sql = `SELECT * FROM users`;

    const [rows] = await db.query(sql);

    return rows
  }

  static async getUserById(id) {
    const sql = `SELECT * FROM users WHERE id = ?`;

    const [rows] = await db.execute(sql, [id]);
   
    return rows
  }

  static async updateUserById(username , email , id) {
    
    const sql = `UPDATE users SET username = COALESCE(?, username),email = COALESCE(?, email) WHERE id = ?`;

    const [rows] = await db.execute(sql, [username ?? null, email ?? null, id]);
    console.log(rows)
   
    return rows
  }

  static async getAllBetsUser(id){
    const sql = `SELECT * FROM bets WHERE user_id = ?`;

    const [rows] = await db.execute(sql, [id]);
    console.log(rows)
   
    return rows
  }
}