import React from 'react'
import Link from 'next/link'
import confetti from 'canvas-confetti'

const Success = () => {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
  }, 250)

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