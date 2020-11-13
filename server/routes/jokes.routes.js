const JokeController = require('../controllers/jokes.controller')

module.exports = (app) => {
    //Index route to get to all the widgets
    app.get('/api/jokes',JokeController.index);

    //Create route to create a widget
    app.post('/api/jokes/create',JokeController.create);

    //Show route to show a widget
    app.get('/api/jokes/:id',JokeController.show);

    //Update route to update a widget
    app.put('/api/jokes/update/:id', JokeController.update);

    //Delete route to delete a widget
    app.delete('/api/jokes/delete/:id',JokeController.destroy)
}