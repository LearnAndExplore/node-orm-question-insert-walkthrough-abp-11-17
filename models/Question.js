const db = require("../config/db")

class Question{
  static CreateTable() {
    return new Promise(function(resolve){
      const sql = `CREATE TABLE questions (
        id INTEGER PRIMARY KEY,
        content TEXT
      )`

      db.run(sql, function(){
        resolve("questions table created")
      })
    })
  }


  constructor(content){
    this.content = content
  }

  insert(self){
    return new Promise(function(resolve){
      const sql = `INSERT INTO questions(content) VALUES (?)`
      db.run(sql,[this.content],function(){resolve(self)})

    })
  }

}

module.exports = Question;
