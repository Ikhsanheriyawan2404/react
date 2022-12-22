import React from 'react'
import './register.scss';
import { RegisterBg } from '../../assets';
import { Gap, Input } from '../../components';
import Button from '../../components/atoms/Button';
import Link from '../../components/atoms/Link';

const Register = () => {
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={RegisterBg} className="bg-image" alt='hh'/>
      </div>
      <div className='right'>
        <p>Form Register</p>
        <Input label='Full Name' placeholder="Full Name" />
        <Gap height={18} />
        <Input label='Email' placeholder="EMail" />
        <Gap height={18} />
        <Input label='Password' placeholder="Password" />
        <Gap height={50} />
        <Button title='Register' />
        <Gap height={18} />
        <Link title='Kembali Ke Login' />
      </div>
    </div>
  )
}

export default Register