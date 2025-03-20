const session = require("express-session")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy;

const pool = require("../db/pool")
passport.use(new LocalStrategy(async(username, password, done)=>{

    try {

        const {rows} = await pool.query("SELECT * FROM users WHERE username = $1 RETURNING *",[username])

        const user = rows[0]

        if(!user){
            return done(null, false, {message:"Incorrect username"})
        }

        if( user.password !==  password){
            return done(null, false, {message: "Incorrect password"})
        }
        
        return done(null, user);
    } catch (error) {
    
        return done(error)
    }


}))

passport.serializeUser((user, done) =>{
done(null, user.id)
})

passport.deserializeUser(async(id, done)=>{
    try {
        const {rows} = await pool.query("SELECT * FROM users where id = $1", [id]);

        user = rows[0]
    
        done(null, user)
        
    } catch (error) {
        done(error)
    }
 

})

module.exports = passport