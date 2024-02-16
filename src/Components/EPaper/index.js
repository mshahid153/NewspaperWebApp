import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const EPaper = () =>
  <div className='carousel slide d-flex justify-content-around align-items-center'>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bg-black p-4 p-md-5 rounded" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <div id="carouselExampleIndicators" className="carousel slide w-auto ">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://i.postimg.cc/YCWpb6v3/Screenshot-2024-02-16-050918.png" className="d-block w-100" alt="epaper-img"/>
        </div>
        <div className="carousel-item">
          <img src="https://i.postimg.cc/d0XQB5B4/Screenshot-2024-02-16-051629.png" className="d-block w-100" alt="epaper-img"/>
        </div>
        <div className="carousel-item">
          <img src="https://i.postimg.cc/HnzcPM3S/Screenshot-2024-02-16-081901.png" className="d-block w-100" alt="epaper-img"/>
        </div>
        <div className="carousel-item">
          <img src="https://i.postimg.cc/m2rtgtms/Screenshot-2024-02-16-082144.png" className="d-block w-100" alt="epaper-img"/>
        </div>
      </div>
    </div>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-black p-4 p-md-5 rounded" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
    </button>
  </div>


export default EPaper