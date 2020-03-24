
const PetController = require('../controllers/pet.controller')

module.exports = (app) => {
    app.get('/api/pet/:id', PetController.findPet);
    app.get('/api/allpets', PetController.findAllPets);
    app.post('/api/pet', PetController.createPet);
    app.put('/api/pet/:id/edit', PetController.updatePet);
    app.delete('/api/pet/:id', PetController.deletePet);
}
