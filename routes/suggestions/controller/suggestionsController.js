const Suggestion = require('../model/Suggestion')

async function getAllSuggestions(req, res, next){
    try {
        const foundAllSuggestions = await Suggestion.find({})
        res.json({message: "Success", foundAllSuggestions})
    } catch (error) {
        res.json({message: "error", error: error.message})
    }
}

async function createSuggestion(req, res, next){
    try {
        const savedSuggestion = new Suggestion ({
                 title : req.body.title,
                 author : req.body.author,
                 suggestion : req.body.suggestion,
                 likes: req.body.likes,
                 anonymous: req.body.anonymous,
                 timeCreated: req.body.timeCreated
        })
        await savedSuggestion.save()
        res.json({message: "successfully created suggestion", savedSuggestion})
    } catch (error) {
        res.json({message: error, error: error.message})
    }
}

async function getSingleSuggestion(req, res, next){
    try {
        const {id} = req.params
        const singleSuggestion = await Suggestion.find({_id:id}) 
        res.json({message: "Successful", singleSuggestion})
    } catch (error) {
        res.json({message: "error", error: error.message})
    }
}

async function updateSuggestion(req, res, next){
   try {
    const suggestionUpdated = await Suggestion.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true})
    res.json({message: "Suggestion updated", suggestionUpdated})
   } catch (error) {
        res.json({message: "error", error: error.message})
   } 

}

async function deleteSuggestion(req, res, next){
    try {
        const {id} = req.params
    const suggestionDeleted = await Suggestion.findByIdAndDelete(id)
    res.json({message: "Suggestion deleted", suggestionDeleted})
    }catch (error){
        res.json({message: error, error: error.message})
    }
}

module.exports = {
    getAllSuggestions,
    createSuggestion,
    getSingleSuggestion,
    updateSuggestion,
    deleteSuggestion
}