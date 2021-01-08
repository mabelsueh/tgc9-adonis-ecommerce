// read from env file
const Env = use ('Env')

module.exports = {
  // make sure no spelling error
  name: Env.get('CLOUDINARY_NAME', ''),
  api_key: Env.get('CLOUDINARY_API_KEY', ''),
  api_secret: Env.get('CLOUDINARY_API_SECRET', ''),
  preset: Env.get('CLOUDINARY_UPLOAD_PRESET', ''),
}
