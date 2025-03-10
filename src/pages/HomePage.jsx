import { HashLink } from 'react-router-hash-link';

const searchSectionItem = {
  area: ["台灣", "日本", "亞洲", "歐洲"],
  type: ["體驗活動", "一日遊", "多日遊"],
  theme: ["春夏推薦", "秋冬推薦", "戶外運動", "文化體驗", "獨旅推薦", "情人約會", "家族/團體旅遊"]
}

export default function HomePage () {
  return (
    <>
    <div className="home-banner">
        <div className="container">
          <div className="home-banner-content mx-auto d-flex flex-column align-items-center">
            <h1 className="text-grey-000 mb-3 h1">旅途時光</h1>
            <p className="text-grey-000 mb-4 h3">It’s TIME for your journey</p>
            <HashLink smooth to="#search"><input type="button" defaultValue="開始探險" className="btn btn-primary-700 px-4 py-3 fs-6"/></HashLink>            
          </div>
        </div>
      </div>

      {/* <!-- 搜尋區塊 --> */}
      <div id="search" className="bg-primary-200">
        <div className="container">
          <ul className="row justify-content-between align-items-center py-5">
            <li className="col-md-3">
              <select className="form-select text-primary-900" defaultValue="" aria-label="Default select example">
                <option value="" disabled>地區</option>
                {searchSectionItem.area.map((item,i) => <option value={item} key={i}>{item}</option>)}               
              </select>
            </li>
            <li className="col-md-3">
              <select className="form-select text-primary-900" defaultValue="" aria-label="Default select example">
                <option value="" disabled>類型</option>
                {searchSectionItem.type.map((item,i) => <option value={item} key={i}>{item}</option>)} 
              </select>
            </li>
            <li className="col-md-3">
              <select className="form-select text-primary-900" defaultValue="" aria-label="Default select example">
                <option value="" disabled>主題</option>
                {searchSectionItem.theme.map((item,i) => <option value={item} key={i}>{item}</option>)}                
              </select>
            </li>
            <li className="col-md-3">
              <button className="btn btn-primary-700 text-primary-100 text-center py-2 w-100" type="submit">搜尋</button>
            </li>
          </ul>

          
        </div>
      </div>

      {/* <!-- 旅程行程 --> */}
      {/* <div id="journey" className="container mt-5">
        <h2 className="main-title text-center">旅途行程</h2>
        <div className="row justify-content-center mt-4">
          <div className="col-md-4">
            <div className="card">
              <img src="/src/assets/img/Location_13.jpg" className="card-img-top" alt="台真賞楓圓"/>
              <div className="card-body">
                <h5 className="card-title">台東賞楓圓</h5>
                <p className="card-text">路上會有的景點、感受秋天的楓葉與壯麗的山脈景色，將帶給你無窮的美麗。</p>
                <p className="text-success font-weight-bold">NT$ 4,980</p>
                <button className="btn btn-primary">加入購物車</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="/src/assets/img/Location_10.jpg" className="card-img-top" alt="京都奈良一日遊"/>
              <div className="card-body">
                <h5 className="card-title">京都奈良一日遊</h5>
                <p className="card-text">探索京都與奈良的美麗景點，享受最經典的日本風情。</p>
                <p className="text-success font-weight-bold">NT$ 21,000</p>
                <button className="btn btn-primary">加入購物車</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="/src/assets/img/Location_9.jpg" className="card-img-top" alt="大阪三天兩夜"/>
              <div className="card-body">
                <h5 className="card-title">大阪三天兩夜</h5>
                <p className="card-text">大阪是日本的經濟與文化重心，感受熱鬧的都市氛圍。</p>
                <p className="text-success font-weight-bold">NT$ 3,200</p>
                <button className="btn btn-primary">加入購物車</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <main className='bg-primary-000'>
        <div className="container mt-5">
          <h2 className="mb-3">旅遊行程</h2>
          <div id="tourCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./img/Location_2" className="d-block w-100" alt="Tour 1"/>
              </div>
              <div className="carousel-item">
                <img src="https://source.unsplash.com/800x400/?forest" className="d-block w-100" alt="Tour 2"/>
              </div>
              <div className="carousel-item">
                <img src="https://source.unsplash.com/800x400/?mountain" className="d-block w-100" alt="Tour 3"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#tourCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#tourCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        
        {/* <!-- 拾光活動 --> */}
          <div id="activity" className="container mt-5">
            <h2 className="main-title text-center">拾光活動</h2>
            <div className="row justify-content-center mt-4">
              <div className="col-md-4">
                <div className="card">
                  <img src="/src/assets/img/Location_4.jpg" className="card-img-top" alt="活動圖片"/>
                  <div className="card-body">
                    <h5 className="card-title">太魯閣峽谷自駕探險</h5>
                    <p className="card-text">探索太魯閣峽谷，感受自然與美麗景觀，讓你流連忘返。</p>
                    <p className="text-success font-weight-bold">NT$ 2,300</p>
                    <button className="btn btn-primary">加入購物車</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src="/src/assets/img/Location_7.jpg" className="card-img-top" alt="活動圖片"/>
                  <div className="card-body">
                    <h5 className="card-title">阿里山賞櫻之旅</h5>
                    <p className="card-text">每年春天，阿里山的櫻花盛開，無數遊客前來觀賞。</p>
                    <p className="text-success font-weight-bold">NT$ 2,300</p>
                    <button className="btn btn-primary">加入購物車</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src="/src/assets/img/Location_6.jpg" className="card-img-top" alt="活動圖片"/>
                  <div className="card-body">
                    <h5 className="card-title">日月潭環湖騎乘之旅</h5>
                    <p className="card-text">享受日月潭的美麗景色，進行一場悠閒的環湖騎行。</p>
                    <p className="text-success font-weight-bold">NT$ 1,600</p>
                    <button className="btn btn-primary">加入購物車</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <!-- 拾光日誌 --> */}
      <div id="journal">
        <div className="title-container">
          <h2>拾光日誌</h2>
          <div>
            <button className="arrow-button">&lt;</button>
            <button className="arrow-button">&gt;</button>
          </div>
        </div>
        <div className="content">
          <img src="/src/assets/img/拾光日誌_1.jpg" alt="日誌圖片" className="left-image"/>
          <img src="/src/assets/img/拾光日誌_2.jpg" alt="日誌圖片" className="middle-image"/>
          <div className="right-text">
            <h3>陽明山放鬆之旅</h3>
            <p>踏上陽明山的放鬆之旅，遠離城市的繁忙與喧囂，沉浸在大自然的懷抱中。陽明山四季皆有不同的風貌，春天的花海、夏天的翠綠、秋天的金黃與冬天的溫泉景緻，為每位旅人帶來獨特的感官享受。走在綿延的山林步道間，感受空氣中的濃郁芬多精，隨著山風輕拂，壓力與疲憊漸漸被拂去。</p>
            <button>繼續閱讀</button>
          </div>
        </div>
      </div>

      {/* <!-- 關於我們 --> */}
      <div id="about">
        <div className="title-container">
          <h2 className="main-title">關於我們</h2>
        </div>

        <div className="section-1">
          <img src="/src/assets/img/關於我們_1.jpg" className="left-image" alt="品牌圖片"/>
          <div className="right-text">
            <h3>品牌理念</h3>
            <p>我們的品牌理念是為每一位旅客提供最貼心、最獨特的旅遊體驗，致力於開發有特色的行程，為您打造一段難忘的回憶。</p>
            <button>了解更多</button>
          </div>
        </div>

        <div className="section-2">
          <div className="left-text">
            <h3>服務介紹</h3>
            <p>我們提供一站式的旅遊服務，從行程規劃到預定服務，確保每個細節都能符合您的需求。</p>
            <button>了解更多</button>
          </div>
          <img src="/src/assets/img/關於我們_2.jpg" className="right-image" alt="服務介紹圖片"/>
        </div>
      </div>
    </>
  )
}