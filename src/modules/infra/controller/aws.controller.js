const AWSService = require('../../service/AWSService')
const S3UploadService = require('../../service/AWSUploadsService')

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

  async awsUrlSigendQuery(request, response) {
    try {
      const { key, bucket } = request.query

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

  async awsUrlSigendUpload(request, response) {
    try {
      const { key, bucket, text } = request.query

      if (!text) {
        return response.status(400).json({ error: 'Nenhum arquivo enviado' })
      }

      const uploadResponse = await S3UploadService.uploadFile(text, key, bucket)

      return response.json({ uploadResponse })
    } catch (error) {
      console.error('Erro durante o upload do arquivo:', error)
      return response.status(500).json({ error: 'Erro interno do servidor' })
    }
  },
}



