const express = require("express")
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Kittisak Kraiudom!'))
app.get('/about', (req, res) => res.send('หน้า about'))
app.get('/contact', (req, res) => res.send('น้องแนท676 tell: 0841891343(ได้ทุกที่ยกเว้นข้างหลัง)' ))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
