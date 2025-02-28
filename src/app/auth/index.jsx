import AuthLayout from '@/components/layouts/auth.layout'
import React from 'react'
import Signin from './signIn'
import Signup from './signup'

const SigninPage = () => {
  return (
    <AuthLayout 
      pageTitle="Welcome Back"
      pageDescription="Please enter your details to Sign in"
    >
      <Signin />
    </AuthLayout>
  )
}

const SignupPage = () => {
  return (
    <AuthLayout
      pageTitle="Create Account"
      pageDescription="Please fill the form to Sign up"
    >
      <Signup />
    </AuthLayout>
  )
}

export { SigninPage, SignupPage }
