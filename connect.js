// const sqlite3 = require('sqlite3').verbose()
// const md5 = require('bcryptjs')
// const DBSOURCE = "db.sqlite"

// const db = new sqlite3.Database(DBSOURCE, (err) => {
//     if (err) {
//         console.log(err.message)
//         throw err
//     } else {
//         console.log('Connected to the Sqlite db')
//         db.run(`CREATE TABLE user (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name text,
//             email text UNIQUE,
//             password text,
//             CONSTRAINT email_unique UNIQUE  (email)
//         )`,
//         (err) => {
//             if (err) {
//                 console.log('Table already exists')
//             } else {
//                 const insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
//                 db.run(insert, ['admin', 'admin@sitc.cloud', md5('asskpassme') ])
//                 db.run(insert, ['user', 'user@sitc.cloud', md5('userpassmeasked')])
//             }

//         });
//     }
// })

// module.exports = db;