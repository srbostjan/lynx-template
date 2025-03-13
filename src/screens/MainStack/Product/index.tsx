import React from 'react'
import { useParams } from 'react-router';
import './styles.css';

export default function Product() {
  const { id } = useParams();

  return (
    <view className="container">
      <text className="Title">id: {id}</text>
    </view>
  )
}
