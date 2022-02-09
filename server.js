const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser")
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
let db = new sqlite3.Database('webhook.db');
const app = express()
const PORT = 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


app.get('/', (request, response) => {
    response.send('Webhook Test by Anand Venkataraman!')
})

app.post("/event", (req, res) => {
    console.log('Received webhook request:', JSON.stringify(req.body));

    data = req.body;
    id_a = (data.id) ? data.id : data.payload.id;
    filetype = (data.payload?.file_type) ? data.payload?.file_type : 'NULL'
    modifiedfields = (data.modified_fields) ? data.modified_fields : 'NULL';

    record =
        $action = data.action
        $entity_type = data.entity_type
        $time = data.time
        $modified_fields = modifiedfields
        $id = id_a
        $u_name = data.payload?.name
        $file_type = filetype


    const result = db.run('INSERT INTO "record" (r_action, r_entity_type, r_time, r_modified_fields, r_id, r_name, r_file_type) VALUES ($action, $entity_type, $time, $modified_fields, $id, $u_name, $file_type)', { $action, $entity_type, $time, $modified_fields, $id, $u_name, $file_type }, (err) => {
        if (err) {
            console.log(err)
        }
    });

    db.run("DELETE FROM record WHERE created_at <= date('now','-7 day')", [])
    res.status(200).json({
        status: "Recorded successfully"
    });

})



app.get('/track', (req, res) => {
    // let sql = 'SELECT * FROM record order by id desc limit 4'
    let sql = 'SELECT * FROM record'
    let params = []
    data_out = ''
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "err": err.message })
            return
        }
        JSON.stringify(rows)
        res.render("list", { results: rows });
    })
})

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));