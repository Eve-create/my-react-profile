import React from 'react';

function SubmissionSuccess({ formData }) {
    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">Thank you, {formData.name}! Your message has been sent.</h2>
        <p className="text-center">
          <b>Name:   </b> {formData.name}
          <br />
          <b>Email:</b> {formData.email}
          <br />
          <b>Message:</b> {formData.message}
        </p>
      </div>
    );
  }

  export default SubmissionSuccess;