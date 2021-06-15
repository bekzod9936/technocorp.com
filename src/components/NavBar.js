import React from 'react';
import { Button , Navbar , NavDropdown , Nav , Container} from 'react-bootstrap';
import './nav.scss';
import { Modal } from 'bootstrap'
import { useState, useEffect, useRef } from 'react'
import { VscChromeClose } from "react-icons/vsc";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  const [modal, setModal] = useState(null)
  const [modal1, setModal1] = useState(null);
  const [ran, setRan] = useState(50)
  const exampleModal = useRef()
  const exampleModal1 = useRef()
  useEffect(() => {
    setModal(
      new Modal(exampleModal.current)
    )
  }, [])
  useEffect(() => {
    setModal1(
      new Modal(exampleModal1.current)
    )
  }, [])
 

  return (
    <div className="hh">
      <nav>
        <Container className="px-0" >
          <Navbar expand="xl px-lg-0 px-3 ">
            <Navbar.Toggle className="border-0 p-0" ><img src="/images/Group%201%20(2).png" className="img-fluid" /></Navbar.Toggle>
            <button type="button" onClick={() => modal1.show()} className="bg-transparent border-0 px-0">
              <img src="/images/Group%201%20(2).png" className="img-fluid d-none d-xl-block" />
      </button>
           
            <Navbar.Brand className="m-0"> <NavLink id='brand' to='/'><img src="/images/TechnoCorp_Logo2%201.png" className="img-fluid" alt="tg" /></NavLink>
            </Navbar.Brand>
            <Navbar.Collapse className="text-xl-right text-center d-xl-flex justify-content-between" id="basic-navbar-nav">
              <Nav className="mr-auto first">
                <NavLink className='nav-link' to='/Services' exact >Xizmatlar</NavLink>
                <NavLink className='nav-link' to='/News' exact >Yangliklar</NavLink>
                <NavLink  exact className='nav-link'  to='/About'>Biz haqimizda</NavLink>
                <Nav.Link href="#" className="" ><img src="/images/play-button%201.png" className="img-fluid" alt="v2" /></Nav.Link>

              </Nav>
              <Nav className="mr-auto second">
                <Nav.Link href="#">+998 (71) 299-86-88</Nav.Link>
                <Nav.Link href="#"> <img src="/images/search.png" /></Nav.Link>
                <Nav.Link type="button"  onClick={() => modal.show()}   > <span>Savol berish</span></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </nav>
   
      {/* Modal menu*/}

        <div className="modal  fade" ref={exampleModal1} id="mod22" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
          <div className="modal-dialog  modal-fullscreen">
            <div className="modal-content">
              <div className="modal-body" >
                <div className="container">
                  <div id="side11" className="bg-primary"></div>
                  <div className="row">
                    <aside className="col-4 px-0">
                      <div>
                        <nav className="row">
                          <div className="col-2"><button type="button" onClick={() => modal1.hide()} aria-label="Close" className="border-0 px-0"><img src="./images/Group%201%20(1).png" className="img-fluid" alt="x" /></button></div>
                          <div className="col-7"><img src="./images/TechnoCorp_Logo2%201.png" className="img-fluid" alt="Tech" /></div>
                        </nav>
                        <article>
                          <div className="section1">
                            <div className="d-flex justify-content-between">
                              <h6>MARKAZ</h6>
                              <h6>YANGILIKLAR</h6>
                            </div>
                            <ul >
                              <li><a href="#">Markaz haqida</a></li>
                              <li><a href="#">Rahbariyat</a></li>
                              <li><a href="#">Markaz bo’limlari</a></li>
                              <li><a href="#">Markaz tuzilishi</a></li>
                            </ul>
                          </div>
                          <div className="section2">
                            <div className="d-flex justify-content-between">
                              <h6>HUJJATLAR</h6>
                              <h6>BOG’LANISH</h6>
                            </div>
                            <ul>
                              <li><a href="#">O‘zbekiston Respublikasining qonuni</a></li>
                              <li><a href="#">O‘zbekiston Respublikasi Prezidentining qarori</a></li>
                              <li><a href="#">O’zbekiston Respublikasi Vazirlar Mahkamasining Qarori</a></li>
                              <li><a href="#">O‘zbekiston Respublikasi Davlat standartlari</a></li>
                            </ul>
                          </div>
                        </article>
                      </div>
                      <p>Til : <a href="#" className="border-0 bg-transparent">O’zbekcha</a>, <a href="#" >Русский</a>, <a href="#"  >English</a></p>
                      <footer>
                        <div className="px-0">
                          <div className="row px-0 overflow-hidden">
                            <div className="col-4">
                              <p>Sayt ko'rinishi</p>
                              <div className="group-btn">
                                <button className="border-0 ">A</button>
                                <button className="border-0">A</button>
                                <button className="border-0">A</button>
                              </div>
                            </div>
                            <div className="col-8">
                              <p>Shrift o'lchami</p>
                              <div className="row">
                                <div className="col-7 ">
                                  <div>
                                    <p>Kattalashtirish <span id="demo">{ran}</span>%</p>
                                    <div className="slidecontainer">
                                      <input type="range" min="1" max="100" value={ran} onChange={(e)=> { setRan(e.target.value)}} className="slider" id="myRange" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-5">
                                  <button className="border-0 bg-transparent px-0"><img src="./images/reduced-volume%201.png" alt="rv" /></button>
                                  <button className="border-0 bg-transparent px-0"><img src="./images/Group%2038.png" alt="rv" /></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </footer>
                    </aside>

                    <main className="col-6 px-0 ">
                      <div className="row">
                        <a href="#" className="text-end"><img src="./images/Vector.png" className="img-fluid" alt="email" /> info@technocorp.uz</a>
                      </div>
                      <div className="row">
                        <header className="col-12"><span>Xizmatlar</span></header>
                        <div className="col-6 aaaaa">
                          <ul>
                            <li><a href="#" className="text-decoration-none">Veb Dasturlash xizmati</a></li>
                            <li><a href="#" className="text-decoration-none">Mobil ilovalarni ishlab chiqish xizmati</a></li>
                            <li><a href="#" className="text-decoration-none">Dizayn xizmati</a></li>
                            <li><a href="#" className="text-decoration-none">Audit xizmati</a></li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <ul>
                            <li><a href="#" className="text-decoration-none">BPR xizmati</a></li>
                            <li><a href="#" className="text-decoration-none">Texnik hujjat ishlab chiqish xizmati</a></li>
                            <li><a href="#" className="text-decoration-none">Infograrika tayyorlash xizmati</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="row">
                        <header className="col-12"><span>Bog’lanish</span></header>
                        <div className="col-6">
                          <h6>Bizning manzil:</h6>
                          <p>Toshkent shahar, Mirobod tumani, Tolimarjon ko’chasi, 6-uy. 100105</p>
                        </div>
                        <div className="col-6 d-block">
                          <h6>Ish vaqti</h6>
                          <p>Dushanba-Juma | 9:00-18:00</p>
                        </div>
                        <div className="col-6">
                          <h6>Pochta indeksi: </h6>
                          <p>100105</p>
                        </div>
                        <div className="row">
                          <span className="col-5">+998 (71) 299-86-88</span>
                          <div className="col-3 justify-content-between d-flex">
                            <a href="#" className="text-decoration-none"><img src="./images/f%201.png" alt="facebook" className="img-fluid" /></a>
                            <a href="#" className="text-decoration-none"><img src="./images/instagram%20(1)%201.png" className="img-fluid" alt="instagram" /></a>
                            <a href="#" className="text-decoration-none"><img src="./images/telegram%201.png" className="img-fluid" alt="telegram" /></a>
                          </div>

                        </div>
                      </div>
                    </main>
                  </div>
                </div>
                <div className="bside">
                  <div className="col-12">
                    <div className="up1">
                      <div className="context1 text-center">
                        <div>
                          <div className="wrapper">
                            <p>Savollaringiz bo’lsa marhamat!</p>
                            <p>Biz sizni tinglashdan aslo charchamaymiz, qo’ldan kelgancha yordam beramiz! </p>
                          <button type="button" onClick={() => modal.show()}  classNameName="btn bg-transparent nav-link " >Savol berish</button>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="up2 ">
                      <div className="context2 text-center">
                        <div >
                          <div className="wrapper">
                            <p>Bizning jamoada ishlashni xohlaysizmi?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquid debitis vitae</p>
                            <a href="../index.html" id="btn2">Vakansiya</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>





  

      {/* Modal */}
      <div className="modal fade" id="mod1" ref={exampleModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row mb-3">
                <div className="col-1 offset-11 d-flex justify-content-end">
                  <button type="button" className="p-2 d-flex align-content-center"  onClick={() => modal.hide()} aria-label="Close"><VscChromeClose /></button>
                </div>
              </div>
              <div className="container">
                <div className="row ">
                  <div className="col-12 col-lg-6 px-0">
                    <h3>Loyihangizni tavsiflab bering</h3>
                    <p className="mb-5">Tez orada bizning mutaxassislarimiz siz bilan bog'lanishadi</p>
                    <form action="">
                      <div className="mb-3 ">
                        <label for="name1" className="form-label ">Sizning ismingiz *</label>
                        <input type="text" className="form-control py-2" id="name1" />
                                </div>
                        <div className="row">
                          <div className="mb-3 col  ">
                            <label for="tel1" className="form-label ">Telefon raqamingiz*</label>
                            <input type="tel" className="form-control py-2 " id="tel1" />
                                    </div>
                            <div className="mb-3 col ">
                              <label for="email1" className="form-label">E-mail manzilingiz*</label>
                              <input type="email" className="form-control py-2" id="email1" />
                                    </div>
                            </div>
                            <div className="mb-3 ">
                              <label for="exampleFormControlTextarea11" className="form-label">O’zingiz haqida ma’lumot *</label>
                              <textarea className="form-control py-4" id="exampleFormControlTextarea11" rows="3"></textarea>
                            </div>
                            <button type="submit" className="my-4 px-3 py-2">Baholash uchun yuborish</button>
                            </form>
                        </div>
                        <div className="col-12 my-lg-0 my-3 col-lg-6 align-content-center  d-grid">
                          <div className="row">
                            <div className="col-12 col-lg-9 offset-lg-3 ">
                              <div className="row my-4">
                                <div className="col-4"><img src="./images/Rectangle%2038.png" className="img-fluid" alt="rec38" /></div>
                                  <div className="col-8 d-grid align-content-center">
                                    <p className="m-0 ">Sizning menejeringiz</p>
                                    <h5>Odilov Umidjon</h5>
                                  </div>
                                </div>
                                <div>
                                  <h5>So'rov yuborish orqali siz quyidagilarni qabul qilasiz:</h5>
                                  <ul >
                                    <li>Menejerimizdan xat yoki qo'ng'iroq</li>
                                    <li>Loyihangizni baholash</li>
                                    <li>Agar kerak bo'lsa, shaxsiy uchrashuv</li>
                                    <li>Maxfiylik kafolatlanadi!</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}




export default NavBar;
