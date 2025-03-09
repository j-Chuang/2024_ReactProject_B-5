
export default function Footer () {
  return (
    <>
      <footer className="bg-primary-900">
        <div className="container text-grey-000 py-9">
          <div className="d-flex flex-column gap-7 mb-7">
            <a href="/index.html" className="logoImg mx-auto"><img src="/src/assets/img/indexImg/logo_white.png" alt="logo"/></a>
            <ul className="d-flex justify-content-between mx-auto gap-6">
              <li><a href="#" className="px-3 py-2">聯絡我們</a></li>
              <li><a href="#" className="px-3 py-2">常見問題</a></li>
              <li><a href="#" className="px-3 py-2">更多資訊</a></li>
            </ul>
          </div>
          
            <div className="footer-info mx-auto">
              <ul className="footer-contact d-flex flex-column mx-auto gap-6 mb-7 ps-3">
                <li>客服信箱：<a href="mailto:Service@travel.com">Service@travel.com</a></li>
                <li>客服專線：<a href="tel+886-09XX-XXX-XXX">09XX-XXX-XXX |平日9:00~18:00</a></li>
                <li><p>聯絡地址：新北市板橋區仁愛路XXX號</p></li>
              </ul>
              <ul className="footer-icons d-flex justify-content-between align-items-center mx-auto mb-4">
                <a href="#"><img src="/src/assets/img/indexImg/Icon_fb.png" alt="fb"/></a>
                <a href="#"><img src="/src/assets/img/indexImg/Icon_ig.png" alt="ig"/></a>
                <a href="#"><img src="/src/assets/img/indexImg/Icon_line.png" alt="line"/></a>
              </ul>
              <p className="">旅途時光 ©旅途時光股份有限公司 | 統一編號12345678</p>
            </div>
          
        </div>
      </footer>
    </>
  )
}