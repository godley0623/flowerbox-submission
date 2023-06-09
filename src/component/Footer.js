import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="logo">
            <img src="https://i.imgur.com/KxfWH9J.png"/>
            <p className="pink-text">FLOWERBOX / EST. 2019</p>
            <ion-icon name="logo-twitter"></ion-icon>
        </div>
        <div className="customer-service">
            <p className='blue-text'>customer service</p>
            <p className="cs-text">SATISFACTION COMMITMENT</p>
            <p className="cs-text">DELIVERY POLICIES</p>
            <p className="cs-text">CANCELLATIONS</p>
            <p className="cs-text">RETURN POLICY</p>
        </div>
        <div className="flowerbox">
            <p className='blue-text'>flowerbox</p>
            <p className="cs-text">TERMS OF SERVICE</p>
            <p className="cs-text">PRIVACY POLICIES</p>
            <p className="cs-text">CAREER OPPORTUNITIES</p>
            <p className="cs-text">MORE INFORMATION</p> 
        </div>
    </footer>
  )
}
