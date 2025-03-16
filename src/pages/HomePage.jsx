import { HashLink } from 'react-router-hash-link';

const searchSectionItem = {
  area: ["台灣", "日本", "亞洲", "歐洲"],
  type: ["體驗活動", "一日遊", "多日遊"],
  theme: ["春夏推薦", "秋冬推薦", "戶外運動", "文化體驗", "獨旅推薦", "情人約會", "家族/團體旅遊"]
}

function HomePage () {


  return (
    <>
    {/* <!-- banner區塊 --> */}
    <div className="home-banner">
        <div className="container h-100 d-flex justify-content-center align-items-center">
          <div className="home-banner-content d-flex flex-column align-items-center text-grey-000">
            <h1 className="mb-3 h1">旅途時光</h1>
            <p className="mb-4 h3">It’s TIME for your journey</p>
            <HashLink id="start" smooth to="#search"><input type="button" defaultValue="開始探險" className="btn btn-primary-700 text-primary-100 px-4 py-3 fs-6"/></HashLink>         
          </div>
        </div>
      </div>

      {/* <!-- 搜尋區塊 --> */}
      <div id="search" className="bg-primary-200">
        <div className="container py-8">
          <ul className="row justify-content-between align-items-center g-4">
            <li className="col-lg-3">
              <select className="form-select text-primary-900" defaultValue="" aria-label="Default select example">
                <option value="" disabled>地區</option>
                {searchSectionItem.area.map((item,i) => <option value={item} key={i}>{item}</option>)}               
              </select>
            </li>
            <li className="col-lg-3">
              <select className="form-select text-primary-900" defaultValue="" aria-label="Default select example">
                <option value="" disabled>類型</option>
                {searchSectionItem.type.map((item,i) => <option value={item} key={i}>{item}</option>)} 
              </select>
            </li>
            <li className="col-lg-3">
              <select className="form-select text-primary-900" defaultValue="" aria-label="Default select example">
                <option value="" disabled>主題</option>
                {searchSectionItem.theme.map((item,i) => <option value={item} key={i}>{item}</option>)}                
              </select>
            </li>
            <li className="col-lg-3">
              <button className="btn btn-primary-700 text-primary-100 text-center py-2 w-100" type="submit">搜尋</button>
            </li>
          </ul>

          
        </div>
      </div>

      {/* <!-- 旅程行程 --> */}
      <main className='bg-primary-000'>
        <div className='bg-dark-mount'>
          <div className="container">
            <section className='py-10'>
              <div className='d-flex justify-content-between mb-7 mb-lg-10'>
                <h2 className="align-middle">旅遊行程</h2>
                <button className="more-info-btn btn btn-grey-000 text-primary-700">查看更多</button>
              </div>
              <div className="row">
                <div className="col-lg-2">
                <nav className="nav flex-lg-column justify-content-center text-primary-700 gap-4 mb-8">
                  <a className="nav-link active" aria-current="page" href="#">當季最新行程</a>
                  <a className="nav-link" href="#">當季最熱門</a>
                </nav>
                </div>
                <div className="col-lg-10">
                <div className="card card-horizontal mb-4">
                  <div className="row g-0 h-100">
                    <div className="col-lg-6">
                      <img src="./img/unsplash_nYVEhJUajas.png" className="img-fluid object-fit" alt="..."/>
                    </div>
                    <div className="col-lg-6">
                      <div className="card-body p-5 d-flex flex-column h-100">
                        <h3 className="card-title text-primary-900 lh-sm fs-9 mb-3 truncate-multiline">台東賞楓團</h3>
                        <div className="card-subtitle mb-3 d-flex align-items-center text-primary-800"><span className="material-symbols-outlined me-2">location_on</span>
                          <span>台東</span><span> - </span><span>一日遊</span></div>
                        <p className="card-text text-primary-800 mb-4 truncate-multiline truncate-2">踏上台東的賞楓之旅，感受秋天的絢爛與靜謐魅力。在山谷與林間，楓葉層層疊疊，將整個大地染成金黃與火紅，彷彿一幅大自然的絕美畫卷。從台東的 鹿野高台 出發，遠眺楓紅點綴的壯麗山景，讓秋風拂過臉龐，感受季節交替的詩意。沿途探訪 池上鄉 的稻田步道，稻穗與紅葉交織，呈現秋日特有的田園景色。中午享用當地特色農家菜，品味來自土地的純粹美味。午後前往 初鹿牧場，感受滿山楓葉與藍天的完美映襯，還能體驗手作乳製品的樂趣，為旅程增添趣味。結束一天行程前，在 知本溫泉 放鬆身心，泡在溫暖的泉水中欣賞夜幕降臨，遠山的楓林在夕陽餘暉下更顯迷人。這是一場結合自然、文化與放鬆的秋日美景之旅，台東賞楓團將帶給你難以忘懷的秋天記憶。</p>
                        <div className="text-secondary-700 fw-semibold lh-sm fs-9 mb-4">NTD$ 4980</div>
                        <button className="btn btn-primary-700 text-primary-100 w-100 mt-auto"><span className="me-6 align-baseline">+</span>加入購物車</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-1 row-cols-lg-3 justify-content-between">
                  <div className="col">
                    <div className="card card-home">
                      <img src="./img/unsplash_QmY9xLIyhsI.png" className="card-img-top" alt="台東賞楓團"/>
                      <div className="card-body p-4">
                        <h3 className="card-title text-primary-900 lh-sm fs-9 mb-3 truncate-multiline">台東賞楓團</h3>
                        <div className="card-subtitle mb-3 d-flex align-items-center text-primary-800"><span className="material-symbols-outlined me-2">location_on</span>
                          <span>台東</span><span> - </span><span>一日遊</span></div>
                          <p className="card-text text-primary-800 mb-4 truncate-multiline truncate-2">路上會有的景點、感受秋天的楓葉與壯麗的山脈景色，將帶給你無窮的美麗。</p>
                          <div className="text-secondary-700 fw-semibold lh-sm fs-9 mb-4">NTD$ 4980</div>
                          <button className="btn btn-primary-700 text-primary-100 w-100 mt-auto"><span className="me-6 align-baseline">+</span>加入購物車</button>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-home">
                      <img src="./img/unsplash_QmY9xLIyhsI.png" className="card-img-top" alt="台東賞楓團"/>
                      <div className="card-body p-4">
                        <h3 className="card-title text-primary-900 lh-sm fs-9 mb-3 truncate-multiline">台東賞楓團</h3>
                        <div className="card-subtitle mb-3 d-flex align-items-center text-primary-800"><span className="material-symbols-outlined me-2">location_on</span>
                          <span>台東</span><span> - </span><span>一日遊</span></div>
                          <p className="card-text text-primary-800 mb-4 truncate-multiline truncate-2">路上會有的景點、感受秋天的楓葉與壯麗的山脈景色，將帶給你無窮的美麗。</p>
                          <div className="text-secondary-700 fw-semibold lh-sm fs-9 mb-4">NTD$ 4980</div>
                          <button className="btn btn-primary-700 text-primary-100 w-100 mt-auto"><span className="me-6 align-baseline">+</span>加入購物車</button>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-home">
                      <img src="./img/unsplash_QmY9xLIyhsI.png" className="card-img-top" alt="台東賞楓團"/>
                      <div className="card-body p-4">
                        <h3 className="card-title text-primary-900 lh-sm fs-9 mb-3 truncate-multiline">台東賞楓團</h3>
                        <div className="card-subtitle mb-3 d-flex align-items-center text-primary-800"><span className="material-symbols-outlined me-2">location_on</span>
                          <span>台東</span><span> - </span><span>一日遊</span></div>
                          <p className="card-text text-primary-800 mb-4 truncate-multiline truncate-2">路上會有的景點、感受秋天的楓葉與壯麗的山脈景色，將帶給你無窮的美麗。</p>
                          <div className="text-secondary-700 fw-semibold lh-sm fs-9 mb-4">NTD$ 4980</div>
                          <button className="btn btn-primary-700 text-primary-100 w-100 mt-auto"><span className="me-6 align-baseline">+</span>加入購物車</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
      {/* <!-- 拾光活動 --> */}
      <section className='py-10'>
        <div className='d-flex justify-content-between mb-7 mb-lg-10'>
          <h2 className="align-middle">拾光活動</h2>
          <button className="more-info-btn btn btn-grey-000 text-primary-700">查看更多</button>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="card card-home h-100">
              <img src="./img/unsplash_WwCZIoANpek.png" className="card-img-top" alt="台東賞楓團"/>
              <div className="card-body d-flex flex-column p-4">
                <h3 className="card-title text-primary-900 lh-sm fs-9 mb-3 truncate-multiline">台東賞楓團</h3>
                <div className="card-subtitle mb-3 d-flex align-items-center text-primary-800"><span className="material-symbols-outlined me-2">location_on</span>
                  <span>台東</span><span> - </span><span>一日遊</span></div>
                  <p className="card-text text-primary-800 truncate-multiline truncate-4">踏上太魯閣峽谷的壯麗旅程，感受大自然的鬼斧神工與靜謐之美。蜿蜒的峽谷中，險峻的懸崖與湍急的溪流相互交織，形成了獨一無二的自然景觀。沿著步道前行，穿過燕子口、九曲洞等知名景點，每一步都能感受到大自然的力量與細膩。<br /><br />
                      在清新的空氣中漫步，耳邊環繞著流水與鳥鳴，仿佛置身於遠離城市喧囂的世外桃源。除了欣賞壯觀的地形地貌，還可以深入探索隱藏於山谷中的原住民文化與歷史故事，了解這片土地的深厚底蘊。<br /><br />
                      無論是短途的輕鬆探索，還是挑戰自己的深度行程，太魯閣峽谷都能滿足你的需求。這是一場視覺、感官與心靈的多重盛宴，讓你在大自然的懷抱中找回最純粹的感動。太魯閣峽谷自然探索，帶你走進台灣最壯麗的山水奇景，體驗前所未有的自然之旅。</p>
                  <div className='mt-auto'>
                    <div className="text-secondary-700 fw-semibold lh-sm fs-9 mb-4">NTD$ 4980</div>
                    <button className="btn btn-primary-700 text-primary-100 w-100"><span className="me-6 align-baseline">+</span>加入購物車</button>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
              <div className="row row-cols-1 row-cols-lg-2 g-lg-4">
                <div className="col">
                  <div className="card card-home">
                    <img src="./img/unsplash_zK049OFP4uI.png" className="card-img-top" alt="台東賞楓團"/>
                    <div className="card-body d-flex flex-column p-4">
                      <h3 className="card-title text-primary-900 lh-sm fs-9 mb-3 truncate-multiline">台東賞楓團</h3>
                      <div className="card-subtitle mb-3 d-flex align-items-center text-primary-800"><span className="material-symbols-outlined me-2">location_on</span>
                        <span>台東</span><span> - </span><span>一日遊</span></div>
                        <p className="card-text text-primary-800 mb-4 truncate-multiline truncate-2">路上會有的景點、感受秋天的楓葉與壯麗的山脈景色，將帶給你無窮的美麗。</p>
                        <div className="text-secondary-700 fw-semibold lh-sm fs-9 mb-4">NTD$ 4980</div>
                        <button className="btn btn-primary-700 text-primary-100 w-100 mt-auto"><span className="me-6 align-baseline">+</span>加入購物車</button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-home">
                    <img src="./img/unsplash_zK049OFP4uI.png" className="card-img-top" alt="台東賞楓團"/>
                    <div className="card-body d-flex flex-column p-4">
                      <h3 className="card-title text-primary-900 lh-sm fs-9 mb-3 truncate-multiline">台東賞楓團</h3>
                      <div className="card-subtitle mb-3 d-flex align-items-center text-primary-800"><span className="material-symbols-outlined me-2">location_on</span>
                        <span>台東</span><span> - </span><span>一日遊</span></div>
                        <p className="card-text text-primary-800 mb-4 truncate-multiline truncate-2">路上會有的景點、感受秋天的楓葉與壯麗的山脈景色，將帶給你無窮的美麗。</p>
                        <div className="text-secondary-700 fw-semibold lh-sm fs-9 mb-4">NTD$ 4980</div>
                        <button className="btn btn-primary-700 text-primary-100 w-100 mt-auto"><span className="me-6 align-baseline">+</span>加入購物車</button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-home">
                    <img src="./img/unsplash_zK049OFP4uI.png" className="card-img-top" alt="台東賞楓團"/>
                    <div className="card-body d-flex flex-column p-4">
                      <h3 className="card-title text-primary-900 lh-sm fs-9 mb-3 truncate-multiline">台東賞楓團</h3>
                      <div className="card-subtitle mb-3 d-flex align-items-center text-primary-800"><span className="material-symbols-outlined me-2">location_on</span>
                        <span>台東</span><span> - </span><span>一日遊</span></div>
                        <p className="card-text text-primary-800 mb-4 truncate-multiline truncate-2">路上會有的景點、感受秋天的楓葉與壯麗的山脈景色，將帶給你無窮的美麗。</p>
                        <div className="text-secondary-700 fw-semibold lh-sm fs-9 mb-4">NTD$ 4980</div>
                        <button className="btn btn-primary-700 text-primary-100 w-100 mt-auto"><span className="me-6 align-baseline">+</span>加入購物車</button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-home">
                    <img src="./img/unsplash_zK049OFP4uI.png" className="card-img-top" alt="台東賞楓團"/>
                    <div className="card-body d-flex flex-column p-4">
                      <h3 className="card-title text-primary-900 lh-sm fs-9 mb-3 truncate-multiline">台東賞楓團</h3>
                      <div className="card-subtitle mb-3 d-flex align-items-center text-primary-800"><span className="material-symbols-outlined me-2">location_on</span>
                        <span>台東</span><span> - </span><span>一日遊</span></div>
                        <p className="card-text text-primary-800 mb-4 truncate-multiline truncate-2">路上會有的景點、感受秋天的楓葉與壯麗的山脈景色，將帶給你無窮的美麗。</p>
                        <div className="text-secondary-700 fw-semibold lh-sm fs-9 mb-4">NTD$ 4980</div>
                        <button className="btn btn-primary-700 text-primary-100 w-100 mt-auto"><span className="me-6 align-baseline">+</span>加入購物車</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
          </div>
        </div>
      </main>

      {/* <!-- 拾光日誌 --> */}
      <div className="bg-primary-900">
        <div className="container py-11">        
          <h2 className="text-center text-primary-000 mb-10">拾光日誌</h2>
          <div className="row flex-column flex-lg-row justify-content-lg-between g-9">
            <div className="col-lg-7">
              <div className="position-relative">
                <div className="home-arti-pic-lg w-75"></div>
                <div className="home-arti-pic-sm position-absolute"></div>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <div className="text-primary-100">
                <h4 className='mb-7'>陽明山放鬆之旅</h4>
                <p className='mb-7 truncate-multiline truncate-12'>踏上陽明山的放鬆之旅，遠離城市的繁忙與喧囂，沉浸在大自然的懷抱中。陽明山四季皆有不同的風貌，春天的花海、夏天的翠綠、秋天的金黃與冬天的溫泉景緻，為每位旅人帶來獨特的感官享受。走在綿延的山林步道間，感受空氣中的濃郁芬多精，隨著山風輕拂，壓力與疲憊漸漸被拂去。<br /><br />
                  旅途中，還可造訪著名的溫泉區，讓溫暖的泉水洗滌身心，深層放鬆每一寸緊繃的肌肉。喜愛拍攝的人，則能在此找到無數的絕佳取景點，捕捉陽明山的壯麗山巒與多彩植被。無論是獨自前來享受靜謐，還是與家人好友一同探索，這裡的山林美景與舒適氛圍都將帶給你前所未有的寧靜與幸福感。
                  結束一天的行程，不妨在山腰的咖啡廳或小餐館中，品嚐當地特色美食與香濃熱飲，為這場放鬆之旅畫下完美的句點。陽明山放鬆之旅，帶你在大自然的懷抱中找到真正的平靜與愉悅，重拾生活的美好節奏。
                </p>
                <div className="text-center text-lg-end">
                  <button type="button" className="more-info-btn btn btn-grey-000 text-primary-700">繼續閱讀...</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 關於我們 --> */}
      <div className="bg-secondary-000">
        <div className="bg-light-mount">
          <div className="container py-11">
            <h2 className="text-center text-primary-900 mb-8 mb-lg-10">關於我們</h2>
            <div className="row flex-column justify-content-lg-between flex-lg-row g-8 mb-8 mb-lg-10">
              <div className="col-lg-5">
                <img src="/img/關於我們_1.jpg" alt="" className="object-fit home-about-pic" />
              </div>
              <div className="col-lg-6 d-flex align-items-center">
              <div className="text-primary-800">
                  <h4 className='mb-7 fw-bold'>品牌理念</h4>
                  <p className='mb-7 truncate-multiline truncate-12'>每段旅途，都是拾取光芒的過程。<br /><br />
                      我們相信，人們的內在力量來自於旅程中的感悟與記憶。透過探索未知的世界與內心深處，每一步都承載著重拾生命光彩與熱情的契機。旅行不僅是腳步的移動，更是心靈的升華。在每個清晨的日出、每次與陌生人交談、每個絢麗風景的背後，隱藏著無數啟發心靈的瞬間。<br /><br />
                      當我們走出熟悉的日常，進入陌生的土地，那些小小的發現——第一次品嚐的當地美食，第一次觸碰的異國文化，第一次感受到的自然的壯麗——都在塑造著更豐富的我們。這些經歷將如點點星光，匯聚成生命中最燦爛的記憶，照亮我們未來的每一步。<br /><br />
                      因此，我們希望每一位旅人都能透過這些旅程，找到屬於自己的光芒。無論是探尋世界的角落，還是發現內心的平靜，都能在這過程中重新連結自我，讓每個腳印都閃耀著無比耀眼的生命力量。
                  </p>
                  <div className="text-center text-lg-end">
                    <button type="button" className="more-info-btn btn btn-grey-000 text-primary-800">繼續閱讀...</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row flex-column justify-content-lg-between flex-lg-row-reverse g-8">
              <div className="col-lg-5">
                <img src="/img/關於我們_2.jpg" alt="" className="object-fit home-about-pic" />
              </div>
              <div className="col-lg-6 d-flex align-items-center">
              <div className="text-primary-800">
                  <h4 className='mb-7 fw-bold'>服務介紹</h4>
                  <p className='mb-7 truncate-multiline truncate-12'>旅途拾光，專注於提供輕鬆無壓的旅行體驗，讓每一次出發都變得簡單而愉悅。<br /><br />
                    我們精選一系列容易成行的旅行路線，無需繁複規劃，只需輕鬆踏上旅途，就能探索自然的美景與生活的意趣。無論是短暫的周末小旅行，還是隨心所欲的即興冒險，都能滿足你對放鬆與自由的渴望。<br /><br />
                    透過這些精心設計的旅程，放下日常的忙碌與壓力，專注於捕捉每一個美好瞬間。在山林間呼吸新鮮空氣，在海邊追逐陽光，或是在古老的小巷中發掘意想不到的故事，每一處風景都將為你的生命增添新的色彩。
                    我們相信，旅行不僅是走出去，更是走進內心的一次重逢。旅途拾光希望成為你在繁忙生活中的一道光芒，帶你走向輕鬆與快樂的旅途，拾起那些被忽略的感動與幸福。
                    簡單出發，輕鬆擁抱幸福時光。 無論何時何地，旅途拾光都與你一同踏上這段充滿美好的旅程。</p>
                  <div className="text-center text-lg-end">
                    <button type="button" className="more-info-btn btn btn-grey-000 text-primary-800">繼續閱讀...</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage;