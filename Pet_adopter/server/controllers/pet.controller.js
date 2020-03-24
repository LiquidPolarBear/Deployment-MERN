const { Pet } = require('../models/pet.model')

module.exports.findPet = (req, res) => {
    Pet.findOne({_id:req.params.id})
    .then(Pet => res.json(Pet))
    .catch(err => res.json(err))
}

module.exports.findAllPets = (req, res) => {
    Pet.find()
    .then(Pets => res.json(Pets))
    .catch(err => res.json(err))
}

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
    .then(newPet => res.json(newPet))
    .catch(err => res.status(400).json(err))
}

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedPet => res.json({ pet: updatedPet}))
    .catch(err => res.status(400).json(err))
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id:req.params.id})
    .then(deletePet => res.json(deletePet))
    .catch(err => res.json(err))
}
