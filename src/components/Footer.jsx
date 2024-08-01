import React from "react";

const footerText = [
  {
    title: "youtube",
    desc: "취미로 하는 유튜브",
    link: "https://www.youtube.com/@Excel86",
  },
  {
    title: "github",
    desc: "코딩 라이프 깃헙",
    link: "https://github.com/leeinwha",
  },
];

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__text">
          <span>iNa</span>
          <span>© webs</span>
        </div>
        <div className="footer__info">
          <div className="left">
            <div className="title">
              <a href="/">sign up</a>
            </div>
            <p>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
          </div>
          <div className="right">
            <h3>social</h3>
            <ul>
              {footerText.map((footer, key) => (
                <li key={key}>
                  <a href={footer.link}>{footer.title}</a>
                  <em>{footer.desc}</em>
                </li>
              ))}              
            </ul>
          </div>
        </div>
        <div className="footer__right">
          © 2024 ina's fortfolio<br />
          이 사이트는 리액트를 이용하여 제작하였습니다.
        </div>
      </div>
    </footer>
  );
};

export default Footer;