const asyncHandler = require("express-async-handler");


//@desc Get all Contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async(req,res) => {
    const contacts = await db.Contact.findMany();
    res.status(200).json({message:"get all contacts"});
});


//@desc Create new Contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async(req,res) => {
    console.log(req.body);
    const {name,email,phone} = req.body;

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const contact = await db.contact.create({
        data:{
            name:name,
            email:email
        }
    });
    res.status(200).json({message:"create contact"});
});

//@desc Get Contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async(req,res) => {
    res.status(200).json({message:`get contact for ${req.params.id}`});
});

//@desc Update Contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async(req,res) => {
    res.status(200).json({message:`update contact for ${req.params.id}`});
});


//@desc Delete Contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async(req,res) => {
    res.status(200).json({message:`delete contact for ${req.params.id}`});
});

module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};