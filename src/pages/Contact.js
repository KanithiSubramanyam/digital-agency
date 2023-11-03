import React from 'react';
import './page__css/style.css';

const Contact = () => {
  return (
    <section className='contact'>
      <div className='contact__container'>
        <div className='contact__wrapper'>
          <div className='contact__content'>
            <h2>Leave a message</h2>
            <p className="lead">Just fill up this simple form below and our call centre representatives will take care of the rest.
            </p>
          </div>

          <div classNameName='contact__form'>
          <form action="" className='form'>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
                <input name="contact-name" type="text" required=""/>
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input name="contact-email" type="email" placeholder="you@yoursite.com" className="form-control" required=""/>
              </div>
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input name="contact-company" type="text" required=""/>
            </div>
            <div className="form-group">
              <label>Contact Number</label>
              <input name="contact-phone" type="tel" required=""/>
            </div>
            <div className="form-group full-width">
              <label>Message:</label>
              <textarea name="contact-message" rows="10" placeholder="How can we help?"></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="secondary__btn" data-loading-text="Sending">
                <i className="ri-arrow-right-s-line"></i>
                <span>Send Enquiry</span>
              </button>
            </div>
          </form>

          </div>
        </div>
        <div className='side__form'>
          <div className=" side__content">
                    <div class="card">
                      <h3 className="h2">Visit</h3>
                      <p>Street 1/</p>
                    </div>
                    <div className="card">
                      <h3 className="h2">Email</h3>
                      <a
                      href="mailto:sravsb@gmail.com">contactus@gmail.com</a>
                    </div>
                    <div className="card ">
                      <h3 className="h2">Call</h3>
                      <a
                      href="tel:6304324414">6304324414</a>
                    </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact