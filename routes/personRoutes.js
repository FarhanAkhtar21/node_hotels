const express = require('express');
const router = express.Router();
const person = require('./../models/person');


// post route to add a person

router.post('/', async (req, res) =>{
    try{
        const data = req.body  // Assuming the request body contains the person data

        // Create a new person documnet using the Mongoose model
        const newPerson = new person(data);

        // Save the new person to the database
        const response = await newPerson.save();
        console.log('data saved');

        res.status(200).json(response);
    }

    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }

});


// Get method to get the person
router.get('/', async(req, res) =>{
    try{
        const data = await person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }

    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
});


router.get('/:workType', async(req, res) => {
    try{
        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response);
        }

        else{
            res.status(404).json({error: 'Invaild work type'});
        }
    }

    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'})
    }
});

router.put('/:id', async(req, res) =>{
    try{
    const personId = req.params.id;  // Extract the Id from the URL parameter
    const updatedPersonData = req.body; // Updated data for the person

    const response = await person.findByIdAndUpdate(personId, updatedPersonData, {
        new: true, // Return the updated documnet
        runValidators: true,  // Run Mongoose validation

    });

    if(!response) {
        return res.status(404).json({error: 'Person not found'});
    }

    console.log('data updated');
    res.status(200).json(response);

    }

    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server error'});
    }
})


router.delete('/:id', async(req, res) =>{
    try{
        const personId = req.params.id; // Extract the person's Id from the URL parameter

        // Assuming you have a person model
        const response = await person.findOneAndDelete({ _id: personId });
        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }

        console.log('data deleted');
        res.status(200).json({message: 'Person deleted successfully'});

    }

    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})


module.exports = router;