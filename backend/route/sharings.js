const router = require('express').Router();
let Sharing = require('../model/sharing.model');

router.route('/').get((req,res)=>{
    Sharing.find()
    .then(
        sharings => res.json(sharings)
    )
    .catch(
        err => res.status(400).json('Error: '+ err)
    );
})

router.route('/add').post((req, res)=>{
    const username = req.body.username;
    const title = req.body.title;
    const date = Date.parse(req.body.date);
    const time = req.body.time;

    const newSharing = new Sharing({
        username,
        title,
        date,
        time
    });
    newSharing.save()
    .then(() => res.json('Sharing added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;