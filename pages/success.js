import React from 'react';
import Link from 'next/link';

const Success = () => {
  return (
    <div className="success-wrapper" >
      <div className="success">
        <img className="icon" src="/images/emails.png" alt="emails icon" />
        <h2>Email sent successfully !</h2>
        <p className="description">Thank you, I will reply you asap</p>
        <Link href="/">
          <button type="button" width="300px" className="success-btn">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success