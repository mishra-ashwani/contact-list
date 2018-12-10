const express=require('express');
const router=express.Router();


const Contact = require('../models/contacts');

//Fetch all records
router.get('/contacts',(req,res,next)=>{
	Contact.find({},function(err,contacts){
		res.json(contacts);
	});
});


router.post('/contact',(req,res,next)=>{
	let newContact=new Contact({
		first_name:req.body.first_name,
		last_name:req.body.last_name,
		contact_number:req.body.contact_number,
	})
	newContact.save((err,contact)=>{
		if(err){
			console.log(err)
			res.json({msg:"Error Occured"});
		}else{
			res.json({msg:"Data Saved"});
		}
	});
});
//delete contact
router.delete('/delete/:id',(req,res,next)=>{

})


module.exports=router;