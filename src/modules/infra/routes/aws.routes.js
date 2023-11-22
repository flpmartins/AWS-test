const { Router } = require('express')

const { awsUrlSigendGenerate, awsUrlSigendUpload } = require('../controller/aws.controller')

const awsRouters = Router()

awsRouters.get('/', awsUrlSigendGenerate)

awsRouters.post('/signed-url-upload', awsUrlSigendUpload)

module.exports = awsRouters