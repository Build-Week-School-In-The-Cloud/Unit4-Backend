const api = require('./api/server');



const PORT = process.env.PORT || 5001;
api.listen(PORT, () => {
    console.log(`Server API listening on port ${PORT}`)
})
