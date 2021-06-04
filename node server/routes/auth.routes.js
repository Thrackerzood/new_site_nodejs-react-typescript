const {Router} = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const config = require('config')
const router = Router()

router.post('/register',
   [
      check('email', 'Некорректный email').isEmail(),
      check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6,max: 56})
   ],
   async(req,res)=>{
   try{
      const errors = validationResult(req)
      if(!errors.isEmpty()){
         return res.status(400).json({errors: errors.array(), message: 'Некорректные данные при регистрации'})
      }

      const {email,password,confirm,login} = req.body
      const candidate = await User.findOne({email})
      if(password !== confirm){
         return res.status(400).json({message: 'Пароли не совпадают'})
      }
      if(candidate){
         return res.status(400).json({message:'Такой пользователь уже существует'})
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({email,password: hashedPassword,login,date_registration: Date.now()})

      await user.save()
      res.status(201).json({message: 'Пользователь создан'})
   }catch(e){
      res.status(500).json({massage: 'Что-то пошло не так, попробуйте снова'})
   }
})

router.post('/login',
[
   check('email', 'Введите корректный email').normalizeEmail().isEmail(),
   check('password', 'Введите пароль').exists()
],
async(req,res)=>{
   try{
      const errors = validationResult(req)
      if(!errors.isEmpty()){
         return res.status(400).json({errors: errors.array(), message: 'Некорректные данные при входе'})
      }
   
   const {email,login,password} = req.body
   const user =  await User.findOne({email,login})

      if(!user){
         return res.status(404).json({message: 'Пользователь не найден'})
      }

      const isMatch = await bcrypt.compare(password,user.password)

      if(!isMatch){
         return res.status(400).json({message: 'Неверный логин или пароль'})
      }

      const token = jwt.sign(
         {userId: user.id },
         config.get('jwtToken'),
         {expiresIn: '1h'}
      )

      res.json({token,userId: user.id})


   }catch(e){
      res.status(500).json({massage: 'Что-то пошло не так, попробуйте снова'})
   }
})

module.exports = router