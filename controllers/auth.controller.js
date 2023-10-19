const AuthService = require('../services/auth.service')
const { CustomError } = require('../utils/helpers')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const authService = new AuthService()

const logIn = async (request, response, next) => {
    
  try {
    
    const { email, password } = request.body    
    const user = await authService.checkUsersCredentials(email, password)
    
    const token = jwt.sign({
      id: user.id,
      email: user.email,
    }, process.env.JWT_SECRET_WORD,
    { expiresIn: '24h' })

    return response.status(200).json({
      message: 'Correct Credentials',
      token
    })
  }
  catch (error) {
    next(error)
  }
}



const restorePassword = async (request, response, next) => {
  const { password } = request.body
  try {
    let tokenInfo
    try {
      tokenInfo = JSON.parse(atob((request.params.token).split('.')[1]))
    } catch (error) {
      throw new CustomError('Something went wrong deserializing the token', 401, 'Unauthorized')
    }
    await authService.changePassword(tokenInfo, password, request.params.token)
    response.status(200).json({results: {message: 'update success'} })
  } catch (error) {
    next(error)
  }
}

const userToken = async (request, response, next) => {
  try {    
    let id = request.user.id
    let user = await authService.userToken(id)
    return response.json({results:user})    
  } catch (error) {
    next(error)
  }
}


module.exports = {
  logIn,
  restorePassword,
  userToken
}