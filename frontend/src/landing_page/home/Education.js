import React from 'react'

const Education = () => {
  return (
    <div className="container mt-5">
      <div className="row">
      <div className="col-6 mt-5 mb-5">
          <img src="images/education.svg" alt="education_image" />
        </div>
    
        <div className="col-6">
          <h1 className="mb-4 fs-2 mt-5">Free and Open Market Education</h1>
          <p>Varsity, the largest online stock market education book in the world covering everything form basics to advanced trading .</p>
          <a href='' style={{textDecoration:"none"}}>Varsity <i  class="fa-solid fa-arrow-right"></i></a>

          <h1 className="mb-4 fs-2 mt-4">Unbeateable  pricing</h1>
          <p >Trading Q&A , the most active trading and investments community in India  for all your market related queries.</p>
          <a href='' style={{textDecoration:"none"}}>Trading Q&A<i  class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education