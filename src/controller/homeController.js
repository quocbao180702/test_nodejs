import pool  from "../config/connectDB";

let getHomepage = async (req, res) => {
    // simple query
    let data = [];
    /*connection.query(
        'SELECT * FROM `account`',
        function(err, results, fields) {
            results.map((row) => {
                data.push({
                    id: row.id,
                    username: row.username,
                    pass: row.pass
                })
        });
        
    });*/

    const [rows, fields] = await pool.execute('SELECT * FROM `account`');
    return res.render('index.ejs', {dataUser:   rows})
}

let getDetailPage = async (req,res) => {
    let id =  req.params.id;
    let [user] = await pool.execute(`select * from account where id = ?`,[id])
    return res.send(JSON.stringify(user))
}

let createUser =  async (req, res) => { 
    try{
        console.log('check req: ', req.body)  
        let {username, pass} = req.body;
       await pool.execute('insert into account(username, pass) values (?,?)',[username, pass]);
    } catch(err){
        console.log(err);
    }
    return res.redirect('/')
}

let deleteUser = async (req, res) => {
    let userId = req.body.id;
    await pool.execute('delete from account where id = ?',[userId]);
    return res.redirect('/')
}

let geteditUser = async(req, res) =>{
    //return res.send("Hello world!!");
    let id = req.params.id;
    let [user] = await  pool.execute('select * from account where id = ?', [id]);
    return res.render('update.ejs',{dataUser: user[0]});
}
let updateUser = async(req, res) =>{
    let {username, pass, id} = req.body;
    await pool.execute('update account set username = ?, pass = ? where id = ?',[username, pass, id]);
    //console.log('Check: ',req.body);
    return res.redirect('/')
}

//export một object 
module.exports = {
    getHomepage, getDetailPage, createUser,  deleteUser, geteditUser, updateUser
}