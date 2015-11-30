var User       = require('../models/user');
var config     = require('../../config');



module.exports = function(app, express) {
    var apiRouter = express.Router();

    // on routes that end in /users
    // ----------------------------------------------------
    apiRouter.route('/users')


        // create a user (accessed at POST http://localhost:8080/users)
        .post(function(req, res) {

            var user = new User();		// create a new instance of the User model
            user.f_name     = req.body.f_name;  // set the users name (comes from the request)
            user.m_name     = req.body.m_name;  // set the users middle name
            user.l_name     = req.body.l_name;  // set the users last name
            user.pID        = req.body.pID;     // set the users panther ID
            user.username   = req.body.username;  // set the users username (comes from the request)
            user.password   = req.body.password;  // set the users password (comes from the request)
            user.email      = req.body.email;   // sets the users email
            user.project    = req.body.project; // sets the users project
            user.cell       = req.body.cell;    // set the users cell phone #
            user.Rank       = req.body.Rank;    // set the users Rank within the program
            user.Major      = req.body.Major;   // sets the users Major
            user.Ethnicity  = req.body.Ethnicity;   // sets the users ethnicity
            user.visaStatus = req.body.visaStatus;  // sets the users visa status


            user.save(function(err) {
                if (err) {
                    // duplicate entry
                    if (err.code == 1100)
                        return res.json({ success: false, message: 'A user with that username already exists. '});
                    else
                        return res.send(err);

                }

                // return a message

                res.json({ message: 'User created!' });
            });

        })

        // get all the users (accessed at GET http://localhost:8080/api/users)
        .get(function(req, res) {
            console.log("Here come the users!!!")
            User.find({}, function(err, users) {
                if (err) res.send(err);

                // return the users
                res.json(users);
            });
        })

        // remove the user from the project
        .put(function(req, res){

            User.findById(req.body.userId, function(err, user){
                    console.log("HAHA bitch! your put request is working!!!")
                    if(err) res.send(err);

                    if(!req.body.project){

                        user.project = "Unassigned"
                    }
                    else{
                        user.project= req.body.project;
                    }

                // save the user
                user.save(function(err) {
                    if (err) res.send(err);

                    // return a message
                    res.json({ message: 'User updated!' });
                });

            })
        });



    // on routes that end in /users/:user_id
    // ----------------------------------------------------
    apiRouter.route('/users/:user_id')

        //// get the user with that id
        //.get(function(req, res) {
        //    User.findById(req.params.user_id, function(err, user) {
        //        if (err) res.send(err);
        //
        //        // return that user
        //        res.json(user);
        //    });
        //})

        //// update the user with this id
        //.put(function(req, res) {
        //    User.findById(req.params.user_id, function(err, user) {
        //
        //        if (err) res.send(err);
        //
        //        // set the new user information if it exists in the request
        //        if (req.body.name) user.name = req.body.name;
        //        if (req.body.username) user.username = req.body.username;
        //        if (req.body.password) user.password = req.body.password;
        //
        //        // save the user
        //        user.save(function(err) {
        //            if (err) res.send(err);
        //
        //            // return a message
        //            res.json({ message: 'User updated!' });
        //        });
        //
        //    });
        //})

        // delete the user with this id
        .delete(function(req, res) {
            User.remove({
                _id: req.params.user_id
            }, function(err, user) {
                if (err) res.send(err);

                res.json({ message: 'Successfully deleted' });
            });
        });

    //// api endpoint to get user information
    //apiRouter.get('/me', function(req, res) {
    //    res.send(req.decoded);
    //});

    return apiRouter;
};