var express = require("express")
var router = express.Router();

router.get("/",function(req,res,next){
    res.send("Get Method Working")
})

module.export = router;