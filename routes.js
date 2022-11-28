const express = require("express");
const routes = express.Router();

//--------select---------------
/*routes.get("/", (req, res) => {
  //res.send('Aqui si Ya viene el select')
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("select * from libros", (err, rows) => {
            if (err) return res.send(err);
            res.json(rows);
        });
    });
});*/

routes.get('/:table',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
 
        var ssql='select * from '+ req.params.table
 
        conn.query(ssql,(err,rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})


// //--------insert-----------------
/*routes.post("/", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("INSERT INTO libros SET ?", [req.body], (err, rows) => {
            if (err) return res.send(err);
            res.send("Add OK!!");
        });
    });
});*/

routes.post('/:table',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
 
        var ssql='INSERT INTO ' + req.params.table + ' SET ? '
 
        conn.query(ssql, [req.body], (err,rows)=>{
            if(err) return res.send(err)
            res.send('Add OK!!')
        })
    })
})

//--------delete-----------------
/*routes.delete("/:id", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("DELETE FROM libros WHERE lib_id = ?", [req.params.id], (err, rows) => {
            if (err) return res.send(err);
            res.send("Book delete OK!!");
        });
    });
});*/

routes.delete('/:table/:field/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
 
        var ssql='DELETE FROM ' + req.params.table + ' WHERE ' + req.params.field +' = ?'
 
        conn.query(ssql, [req.params.id], (err,rows)=>{
            if(err) return res.send(err)
            res.send("Book delete OK!!")
        })
    })
})

//--------update-----------------
/*routes.put("/:id", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("UPDATE libros set ? WHERE lib_id = ?", [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err);
            res.send("Book UPDATE OK!!");
        });
    });
});*/

routes.put('/:table/:field/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
 
        var ssql='UPDATE ' + req.params.table + ' set ? WHERE ' + req.params.field +' = ?'
 
        conn.query(ssql, [req.body, req.params.id], (err,rows)=>{
            if(err) return res.send(err)
            res.send("Book UPDATE OK!!")
        })
    })
})

module.exports = routes;
