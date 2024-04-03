const express = require('express')
const router = express.Router()
const {
    getAllSuggestions, 
    createSuggestion,
    getSingleSuggestion,
    updateSuggestion,
    deleteSuggestion

} = require('./controller/suggestionsController')

router.get('/all-suggestions', getAllSuggestions)

router.post('/create-suggestion', createSuggestion)

router.get('/single-suggestion/:id', getSingleSuggestion)

router.put('/update-suggestion/:id', updateSuggestion)

router.delete('/delete-suggestion', deleteSuggestion)

module.exports = router