const passport = require('passport');
const { Strategy } = require('passport-local');
const { Pool } = require('pg');
const helpers =require('./helpers')

const config={
  
  user:'postgres',
    host:'localhost',
    password:'123',
    database:'sql'
};
  
  const pool = new Pool(config); 
  
  const LocalStrategy = new Strategy(
  {
    usernameField: 'username',
    passwordField: 'password',
  },
  async (username, password, done) => {
    try {
      
      const user={
        username:username,
        clave:password
      }
      const result= await pool.query('SELECT* FROM usuarios WHERE username=$1',[user.username])
      if(result.rows.length>0){
         const newuser =result.rows[0];
         const validpassword= await helpers.compararclave(user.clave,newuser.clave) 
        
         if(validpassword){
          
          done(null,newuser,console.log('welcome'))
          user.id=newuser.id_usuario
          passport.serializeUser((user,done)=>{
            done(null,user.id)
          })


         }else{
              done(null,false,console.log('password incorrect'))
              
         }
      }else{
        return done(null, false,console.log('user no exist'))   
        
      }
      
    } catch (e) {
      console.log(e);
      return done(null, false);
    }
  }
);



module.exports={
  LocalStrategy
}