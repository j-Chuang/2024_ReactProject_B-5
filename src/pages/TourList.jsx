import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"



export default function TourList () {

  const [tourList, setTourList] = useState([]);

  const getTours = async () => {
    const res = await axios.get(`http://localhost:3000/tours`)
    setTourList(res.data)
    console.log(tourList)
  }
  
  useEffect(() => {
    getTours();
  },[])



  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="banner-content mx-auto">
            <p className="text-grey-000 display-5 mb-4">探索你的下一個旅程</p>
            <div className="w-100">
              <span></span>
              <input type="text" placeholder="搜尋國家 / 地區等" className="w-100 py-2"/>
            </div>
          </div>
        </div>
      </div>
      <main className="bg-primary-000">
        <div className="container py-10">
          <div className="row">
            <section className="filters col-md-3 bg-grey-000 p-4">            
              <div className="mb-5">
                <h5 className="mb-3">目的地</h5>
                <hr/>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="taiwan"/>
                    <label className="form-check-label" htmlFor="taiwan">台灣</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="japan"/>
                    <label className="form-check-label" htmlFor="japan">日本</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="korea"/>
                    <label className="form-check-label" htmlFor="korea">韓國</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="europe"/>
                    <label className="form-check-label" htmlFor="europe">歐洲</label>
                </div>
              </div>

              <div className="mb-5">
                <h5 className="mb-3">出發日期</h5>
                <hr/>
                <input type="date" className="form-control"/>
              </div>
                        
              <div className="mb-5">
                <h5 className="mb-3">行程分類</h5>
                <hr/>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="nature"/>
                    <label className="form-check-label" htmlFor="nature">自然景點</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="culture"/>
                    <label className="form-check-label" htmlFor="culture">文化體驗</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="adventure"/>
                    <label className="form-check-label" htmlFor="adventure">戶外探險</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="food"/>
                    <label className="form-check-label" htmlFor="food">美食之旅</label>
                </div>
              </div>

              <h5 className="mb-3">費用</h5>
              <hr/>
              <p>NT$ <span>0</span> ~ <span>9999</span></p>
              <input type="range" className="form-range" min="0" max="9999"/>                  
            </section>                     
            <section className="col-md-9">
              <div className="mb-8 d-flex justify-content-between text-primary-900 align-items-center">
                <div className="d-flex justify-content-between gap-4">
                  <p>已選擇<span className="text-primary-800 px-2">2</span>個篩選條件</p>
                  <a href="#">清除</a>
                </div>
                <div className="d-flex justify-content-between align-items-center gap-4">
                  <span>排序方式</span>
                  <select name="sort" id="sort" className="text-primary-700 px-3 py-2">
                    <option value="">最新</option>
                    <option value="">熱門</option>
                    <option value="">價格低-高</option>
                  </select></div>
              </div>

              <ul className="row row-cols-sm-2 row-cols-1 g-4 mb-8">
                {tourList.map((tour) => {
                  return (
                  <li className="col">
                    <Link className="card p-0" target="_blank" to="/src/pages/tourInfo.html">
                      <img src={tour.imageUrl} className="card-img-top object-fit" alt=""/>
                      <div className="card-body d-flex flex-column p-4 text-primary-800">
                        <h2 className="card-title mb-3 text-primary-900">{tour.title}</h2>
                        <div className="card-subtitle mb-3 d-flex align-items-center"><span className="material-symbols-outlined me-2">
                          location_on
                          </span><span>{tour.area}</span><span> - </span><span>{tour.type}</span></div>
                        <p className="card-text mb-4">{tour.description}</p>
                        <span className="fs-5 text-secondary-700 fw-semibold mt-auto">{`NTD$ ${tour.price}`}</span>
                      </div>
                    </Link>
                  </li>
                  )
                })}

                {/* <li className="col-md-6">
                  <a className="card p-0" target="_blank" href="/src/pages/tourInfo.html">
                    <img src="./img/unsplash_UHcwyq05_Gk.png" className="card-img-top object-fit" alt=""/>
                    <div className="card-body p-4 text-primary-800">
                      <h2 className="card-title mb-3 text-primary-900">【冬季限定】銀山溫泉愜意3日遊：山形酒莊&銀山溫泉&狐...</h2>
                      <div className="card-subtitle mb-3 d-flex align-items-center"><span className="material-symbols-outlined me-2">
                        location_on
                        </span><span>日本</span><span> - </span><span>多日遊</span></div>
                      <p className="card-text mb-4">探案山形冬辱魅力！孕眼傅统清莊，品讓炖正清酒，深入了解 日本酒文化，漫步鷇山溫泉街，體驗木造老屋中的溫泉...</p>
                      <span className="fs-5 text-secondary-700 fw-semibold">NTD$ 16,800</span>
                    </div>
                  </a>
                </li>*/}
              
              {/*<li className="col-6">
                  
                    <a classNameName="card" target="_blank" href={item.link} >
                      <img src={item.imageUrl} classNameName="card-img-top object-fit" alt="toothbrush"/>
                      <div classNameName="card-body">
                        <span classNameName="text-dark">{item.title}</span>
                        <span classNameName="float-end">$ {item.price}</span>
                      </div>
                    </a>                 
                </li>*/}

              </ul>
              <nav aria-label="Search results pages">
                <ul className="pagination justify-content-center">
                  <li className="page-item"><a className="page-link" href="#">上一頁</a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">4</a></li>
                  <li className="page-item"><a className="page-link" href="#">5</a></li>
                  <li className="page-item"><a className="page-link" href="#">下一頁</a></li>
                </ul>
              </nav>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}