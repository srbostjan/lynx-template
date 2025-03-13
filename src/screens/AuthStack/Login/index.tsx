import { useNavigate } from 'react-router';
import './styles.css';
import { useEffect } from 'react';

const Login = () => {
  const nav = useNavigate();

  const onBack = () => {
    nav('/');
  }

  const onProduct = () => {
    nav('/product/1');
  }

  return (
    <view className="container">
      <text bindtap={onBack} className='Title'>React</text>
      <text bindtap={onProduct} className='Title'>Product</text>
    </view>
  );
};

export default Login;
