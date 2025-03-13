import React from 'react'
import './styles.css'

interface LoadingProps {
  message?: string;
}

function Loading({ message = 'Getting session...' }: LoadingProps) {
  return (
    <view className="loading-container">
      <view className="loading-spinner"></view>
      <text className="loading-message">{message}</text>
    </view>
  )
}

export default Loading