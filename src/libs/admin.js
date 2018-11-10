const fs = require('fs')
const path = require('path')
const admin = require('firebase-admin');

const fsa = JSON.parse(fs.readFileSync(path.resolve('.fsa')))

admin.initializeApp({
    credential: admin.credential.cert(fsa)
})

module.exports = admin
