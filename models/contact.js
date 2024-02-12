const pool = require('../config/dbConnection');

class Contact{
    static async create(name,email){
        return new Promise((resolve,reject) =>{
            pool.getConnection((err,connection) => {
                if(err){
                    reject(err);
                    return;
                }

                const sql = 'INSERT INTO contact (name,email) VALUES (?,?)';
                connection.query(sql,[name,email], (err, result)=>{
                    if(err){
                        reject(err);
                        return;
                    }

                    resolve(result.insertId);
                });
            });
        });
    }

    static async getAll(){
        return new Promise((resolve,reject) => {
            pool.getConnection((err,connection) => {
                if(err){
                    reject(err);
                    return;
                }

                const sql = 'SELECT * FROM contact';
                connection.query(sql,(err,result) =>{
                    connection.release();
                    if(err){
                        reject(err);
                        return;
                    }
                    resolve(result);
                });
            });
        });
    }

    static async getById(id){

        return new Promise((resolve, reject) => {

            pool.getConnection((err,connection) => {
                if(err){
                    reject(err);
                    return;
                }

                const sql = 'SELECT * FROM contact where id=?';
                connection.query(sql,[id], (err,results) =>{
                    
                    connection.release();
                    if(err){
                        reject(err);
                        return;
                    }

                    if(results.length === 0){
                        resolve(null);
                    }else{
                        resolve(results[0]);
                    }

                });
            });
        });
    }
}

module.exports = Contact;