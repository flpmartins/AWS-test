const AWSService = require('../../service/AWSService')

module.exports = {
  async awsUrlSigendGenerate(request, response) {
    try {
      const key = 'rio.jpeg'
      const bucket = 'flpmartins'

      const signedUrl = await AWSService.generateSignedUrl(key, bucket)
      return response.json({ signedUrl })
    } catch (error) {
      console.error('Erro ao gerar URL assinada:', error)
      return response.status(500).json({ error: 'Erro interno do servidor' })
    }
  },

  async awsUrlSigendUpload(request, response) {
    try {
      const { key, bucket } = request.body

      if (!key || !bucket) {
        return response.status(400).json({ error: 'Parâmetros key e bucket são necessários.' })
      }
      const signedUrl = await AWSService.generateSignedUrl(key, bucket)

      return response.json({ signedUrl })
    } catch (error) {
      console.error('Erro ao gerar URL assinada:', error)
      return response.status(500).json({ error: 'Erro interno do servidor' })
    }
  },
};


