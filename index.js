import express, { application } from 'express'
import { pool } from './databases'

const app = express()

app.get('/pregunta', async (req, res) => {
    const [result] = await pool.query('SELECT 1 + 1 AS result')
    res.json(result[0])
});



app.get('/employees', (req, res) => res.send('obteniendo cuenta de empleados'));
app.post('/employees', (req, res) => res.send('creando cuenta de empleados'));
app.put('/employees', (req, res) => res.send('actualizando datos de empleado'));
app.delete('/employees', (req, res) => res.send('eliminando datos de empleado'));


app.listen(3000);
console.log('Server running on port 3000');