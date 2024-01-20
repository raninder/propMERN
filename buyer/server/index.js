const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const PropertyModel = require('./Models/Properties')

mongoose.connect('mongodb://127.0.0.1:27017/property')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{

	PropertyModel.find()
	.then(result => res.json(result) )
	.catch(err =>console.log(err))
})

app.get('/:id',(req,res)=>{
	const pid = parseInt(req.params.id.trim());
	// console.log("pid.......",pid)
	PropertyModel.findOne({id:pid})
	.then(result => {
		// console.log("resssuuulllttt", result)
		res.json(result)
	}
)
	.catch(err =>console.log(err))
})

app.listen(8000, ()=>console.log("server is running"))
