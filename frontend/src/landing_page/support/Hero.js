import React from 'react'

const Hero = () => {
  return (
    <section className="container-fluid mb-5" id="supportHero">
      <div className="p-4 " id="supportWrapper">
        <h5 className="fs-4 mt-4">Support Portal</h5>
        <a href="" style={{color:"white"}} className="fs-5 mt-4">Track tickets</a>
      </div>

      <div className="row p-3  mb-5" >
      <div className="col-1"></div>
        <div className="col-5">
          <p className="fs-4">Search for an answer or browse help topics to create a ticket</p>
          
          <input className="p-3 my-3 mb-4" placeholder="Eg: how do i activate F&O , why is my order getting rejected" type="text" style={{border:"none" ,borderRadius:"10px" ,width:"90%",fontSize:"1.05em"}}/>
          <i className="fas fa-search" style={{ margin: '0 -35px', color: '#666' }}></i>
          <br/>
           <a href="#" style={{color:"white", margin:"7px" ,textDecoration:"none"}}>Track account opening</a>
           <a href="#" style={{color:"white",margin:"7px" ,textDecoration:"none"}}>Track segment activation</a>
           <a href="#" style={{color:"white",margin:"7px" ,textDecoration:"none"}}>Intraday margins</a><br/>
           <a href="#" style={{color:"white",margin:"7px" ,textDecoration:"none"}}>Kite user manual</a>
        </div>
        <div className="col-5 mb-5 mx-5 p-3">
        <p className="fs-4 mt-2 ">Featured</p><br/>
          <p> 1. <a href="#"  style={{color:"white",margin:"7px"}}>Latest Intraday leverages and Square-off timings</a></p>
          <p> 2. <a href="#" style={{color:"white",margin:"7px"}}>Surveillance measure on scrips - March 2025</a></p>
        </div>

        <div className="col-1"></div>
      </div>    
    </section>
  )
}

export default Hero
