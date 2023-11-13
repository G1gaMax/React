import React from 'react'

const Location = () => {
  return (
    <div className='location'>
      <h1>Meet us</h1>
      <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.3262125124857!2d-58.45233832346546!3d-34.54529505441655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb43ae6018ddf%3A0x3d7f60a75bfa308a!2sEstadio%20M%C3%A2s%20Monumental!5e0!3m2!1ses-419!2sar!4v1699813001889!5m2!1ses-419!2sar"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
    </div>
  )
}

export default Location


