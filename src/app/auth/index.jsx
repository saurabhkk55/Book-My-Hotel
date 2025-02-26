import AuthLayout from '@/components/layouts/auth.layout'
import React from 'react'
import Signin from './signIn'
import Signup from './signup'

const SigninPage = () => {
  return (
    <AuthLayout>
      <Signin />
    </AuthLayout>
  )
}

const SignupPage = () => {
  return (
    <AuthLayout>
      <Signup />
    </AuthLayout>
  )
}

export { SigninPage, SignupPage }
