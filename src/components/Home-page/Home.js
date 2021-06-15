import React from 'react'
import './home.scss'
const Home = () => {
  return (
    <div id='home-page'>
      <main className='pt-4 '>
        <aside className="d-none d-xl-block " >
          <img src="/images/images/Group%20161.png" className="img-fluid" alt="g161" />
          <img src="/images/images/Group%20159.png" className="img-fluid" alt="g159" />
        </aside>
       
        <div className="container ">
          <footer className='d-none d-xl-block'>
            Elektron tijoratning samarali yechimlari
        </footer>
          <div id='img' className='d-none d-xl-block'><img src='/images/homeimage/Group 14.png' /></div>
          <div className='row'>
            <div className='col-12 px-lg-0 px-3 col-xl-6 '>
              <div className='row'>
                <div className='col-12 col-lg-9 col-xl-9'>
                  <header>Biz biznesingizni internet orqali rivojlantirishga yordam beramiz</header>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquid debitis vitae</p>
                  <form>
                    <input type='text' placeholder='  +998 (__) __-__-__  ' />
                    <button type='submit' onClick={(e) => e.preventDefault() } >Menga qo’ng’roq qoling</button>
                  </form>

                </div>
              </div>
           
            </div>
            <div className='col-12 col-xl-6'>
              <div className='row'>
                <div className='col-xl-10  col-10 offset-1 pt-4 mt-5 pt-xl-0 mt-xl-0 offset-xl-2'>
                  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item   active">
                        <div className='d-flex justify-content-center'>
                          <img src="/images/homeimage/3426525 1.png" id='imgg' alt="..." />
                        </div>
                        
                      </div>
                      <div className="carousel-item ">
                        <div className='d-flex justify-content-center'>
                          <img src="/images/homeimage/3426525 1.png" id='imgg' alt="..." />
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className='d-flex justify-content-center'>
                          <img src="/images/homeimage/3426525 1.png" id='imgg' alt="..." />
                        </div>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                  <div className='col-12 mt-2'>
                    <header><span>Veb dasturlash</span></header>
                    <p>XIZMATI</p>
                    <div id='list' className='mt-3 '>
                      <ul>
                        <li><img src='/images/homeimage/Rectangle 6.png' className='img-fluid' /></li>
                        <li><img src='images/homeimage/Rectangle 7.png' className='img-fluid' /></li>
                        <li><img src='images/homeimage/Rectangle 7.png' className='img-fluid' /></li>
                        <li><img src='images/homeimage/Rectangle 7.png' className='img-fluid' /></li>
                        <li><img src='images/homeimage/Rectangle 7.png' className='img-fluid' /></li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

  
 

export default Home
