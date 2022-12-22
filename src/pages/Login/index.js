import React from 'react'
import { LoginBg } from '../../assets';
import { Gap, Input } from '../../components';
import Button from '../../components/atoms/Button';
import Link from '../../components/atoms/Link';

export const Login = () => {
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={LoginBg} className="bg-image" alt='hh'/>
      </div>
      <div className='right'>
        <p>Form Login</p>
        <Input label='Email' placeholder="EMail" />
        <Gap height={18} />
        <Input label='Password' placeholder="Password" />
        <Gap height={50} />
        <Button title='Login' />
        <Gap height={18} />
        <Link title='Belum Punya Akun? Daftar Disini' />
      </div>
    </div>
  )
}

export default Login