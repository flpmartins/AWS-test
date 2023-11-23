const { Router } = require('express')

const { awsUrlSigendGenerate, awsUrlSigendQuery, awsUrlSigendUpload } = require('../controller/aws.controller')

const awsRouters = Router()

awsRouters.get('/', awsUrlSigendGenerate)
awsRouters.post('/signed-url-query', awsUrlSigendQuery)
awsRouters.post('/signed-url-upload', awsUrlSigendUpload)

module.exports = awsRouters