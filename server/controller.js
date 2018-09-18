
const Authors = require("./models.js")

module.exports ={
    allAuthors: (req,res)=>Authors.find({})
                                .then(data=>console.log(data)||res.json(data))
                                .catch(errs=>res.json(errs)),

    getAuthor: (req,res)=>Authors.find(req.params)
                                .then(data=> {
                                    console.log(req.params.id)
                                    res.json(data)})
                                .catch(errs=>console.log(JSON.stringify(req.params.id))||res.json(errs)),
                                                            
    makeAuthor: (req,res)=>{ console.log("make author")
                                Authors.create(req.body)
                                .then(data=>res.json(data))
                                .catch(errs=>res.json(errs))},

    updateAuthor: (req,res)=>Authors.update({_id:req.params.id},req.body)
                                .then(data=>res.json(data))
                                .catch(errs=>res.json(errs)),

    deleteAuthor: (req,res)=>Authors.remove({_id:req.params.id})
                                .then(data=>res.json(data))
                                .catch(errs=>res.json(errs)),
    
}