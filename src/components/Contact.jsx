import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='container mb-5'>
        <div className='row'>
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Questions</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5">
            <img src={process.env.PUBLIC_URL + "/assets/images/contactus.png"} alt="contact"  width='60%' height= '70%'/>
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label for="exampleForm" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullName" placeholder="John Doe"/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact