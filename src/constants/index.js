import port01 from '../assets/img/port01.jpg'
import port02 from '../assets/img/port02.jpg'
import port03 from '../assets/img/port03.jpg'
import port04 from '../assets/img/port04.jpg'
import port05 from '../assets/img/port05.jpg'
import port06 from '../assets/img/port06.jpg'
import port07 from '../assets/img/port07.jpg'

export const headerNav = [
  {
    title: 'intro',
    url: '#intro'
  },
  {
    title: 'skill',
    url: '#skill'
  },
  {
    title: 'site',
    url: '#site'
  },
  {
    title: 'portfolio',
    url: '#port'
  },
  {
    title: 'contact',
    url: '#contact'
  }
];

export const introText = {
  title:'port developer',
  desc: ['talent is', 'found at the end of the', 'effort']
};

export const skillText = [
  {
    title:'꿈을 설계하고 디자인하다.',
    desc:'나는 공간을 만드는 것을 좋아한다. 어려을 때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다. 단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 나만의 공간을 마음것 만들 수 있다는 건 코딩에 엄청난 매력인거 같다. 그 한구석에 나만의 꿈을 설계하고, 개발을 하며 앞으로도 살고 싶다.'
  },
  {
    title:'의심하지말고 꾸준히 걷다보면 기회는 생길것이다.',
    desc:'운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 할수있는, 해야하는 일에 몰두하면 된다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 노력을 통해 스스로 만들어 내는 것이다.'
  },
  {
    title:'미루지 않고 피하지 않는다.',
    desc:'언젠가 해야할 일이라면 그언젠가는 지금이고 누군가가 해야할 일이라면 그누군가는 내가 되자 피하고 미루기만 하면 어떤 일이든 해결되지 않는법이다.'
  }
];

export const siteText = [
  {
    text: ["make", "with react", "youtube project"],
    title: "구글 API를 활용해 리액트로 제작한 나만의 유튜브 사이트",
    code: "https://github.com/leeinwha/Youtube",
    view: "https://reactmytube.netlify.app/",
    info: [
      "#웹접근성, #반응형 웹, #시멘틱 태그",
      "",
      "use stack : React, Youtube open API, Tailwind Css",
    ],
  },
  {
    text: ["make", "with react", "todolist project"],
    title: "리액트로 제작한 Todo List App",
    code: "https://github.com/leeinwha/todolist",
    view: "https://reactcreate-todo-list.netlify.app/",
    info: [
      "#웹접근성, #반응형 웹, #시멘틱 태그, #다크모드 구현",
      "",
      "use stack : React, CSS3",
    ],
  },
  {
    text: ["make", "with vue.js", "shopping app project"],
    title: "뷰로 제작한 부동산 중개 앱",
    code: "https://github.com/leeinwha/vuedongsan",
    view: "https://vuedongsansite.netlify.app/",
    info: [
      "#웹접근성, #반응형 웹, #시멘틱 태그",
      "",
      "use stack : Vue.js, CSS3",
    ],
  },
  {
    text: ["make", "with vue.js", "sns app project"],
    title: "뷰로 제작한 게시물 업로드가 가능한 SNS 앱",
    code: "https://github.com/leeinwha/vuestagram",
    view: "https://vuestargram.netlify.app/",
    info: [
      "#웹접근성, #반응형 웹, #시멘틱 태그",
      "",
      "use stack : Vue.js, CSS3",
    ],
  },
  {
    text: ["make", "with javascript", "click mini game"],
    title: "자바스크립트로 제작한 두더지 미니게임",
    code: "https://github.com/leeinwha/carrot_minigame",
    view: "https://leeinwha.github.io/carrot_minigame",
    info: [
      "#바닐라 자바스크립트 ",
      "",
      "use stack : HTML5/CSS3, Vanilla JS",
    ],
  },
  {
    text: ["make", "with standard", "website"],
    title: "GSAP Parallax Effect",
    code: "https://github.com/leeinwha/GSAP",
    view: "https://leeinwha.github.io/GSAP/gsap01/gsap01.html",
    info: [
      "#GSAP Parallax Effect, #스크롤트리거",
      "",
      "use stack : HTML5/CSS3, Gsap scroll trigger, Javascript",
    ],
  },
  {
    text: ["make", "with standard", "website"],
    title: "gsap 스크롤 트리거를 활용해 제작한 웹사이트",
    code: "https://github.com/leeinwha/VendrdiSociety",
    view: "https://leeinwha.github.io/VendrdiSociety",
    info: [
      "#gsap #스크롤트리거 #JQUERY, #반응형 웹",
      "",
      "use stack : HTML5/CSS3, Gsap scroll trigger, Jquery",
    ],
  },
  {
    text: ["make", "with standard", "website"],
    title: "타임메카 사이트 클론 코딩",
    code: "https://github.com/leeinwha/portfolio/tree/main/trendmecca",
    view: "https://leeinwha.github.io/portfolio/trendmecca/mainpage/mainpage.html",
    info: [
      "#gsap #스크롤트리거 #JQUERY, #반응형 웹 ",
      "",
      "use stack : HTML5/CSS3, Gsap scroll trigger, Jquery",
    ],
  },
];

export const portText = [
  {
    num: "01",
    title: "TIME MECCA",
    desc: "트랜드메카 사의 자사몰 사이트로 사이트 유지 보수 및 사이트 전체 리뉴얼을 진행, 완료 하였습니다. 브랜드 매거진 TM 뉴스 섹션의 전체 상세페이지를 gsap 스크롤 트리거 라이브러리를 활용하여 제작하였습니다.",
    img: port01,
    code: "https://timemecca.com/",
    view: "https://timemecca.com/",
    name: "타임메카 사이트",
  },
  {
    num: "02",
    title: "WOLF 1843",
    desc: "트랜드메카 사의 총판 브랜드 사이트로 유지 보수 및 사이트 리뉴얼 프로젝트를 진행, 완료 하였습니다.",
    img: port02,
    code: "https://www.wolf1834.co.kr/",
    view: "https://www.wolf1834.co.kr/",
    name: "울프 1834 사이트",
  },
  {
    num: "03",
    title: "MINI KYOMO",
    desc: "트랜드메카 사의 신규 런칭 브랜드 사이트로 반응형 웹으로 제작 및 초기 세팅 프로젝트를 진행, 완료 하였습니다.",
    img: port03,
    code: "https://minikyomo.co.kr/",
    view: "https://minikyomo.co.kr/",
    name: "미니 쿄모 사이트",
  },
  {
    num: "04",
    title: "MISAKI",
    desc: "트랜드메카 사의 총판 브랜드 사이트로 유지 보수 업무를 진행했습니다.",
    img: port04,
    code: "https://www.misakikorea.co.kr/",
    view: "https://www.misakikorea.co.kr/",
    name: "미사키 사이트",
  },
  {
    num: "05",
    title: "AB AETERNO",
    desc: "트랜드메카 사의 총판 브랜드 사이트로 유지 보수 업무를 진행했습니다.",
    img: port05,
    code: "https://www.abaeternowatches.co.kr/",
    view: "https://www.abaeternowatches.co.kr/",
    name: "에테르노 사이트",
  },
  {
    num: "06",
    title: "FOCE MILANO",
    desc: "트랜드메카 사의 총판 브랜드 사이트로 유지 보수 업무를 진행했습니다.",
    img: port06,
    code: "https://www.focemilano.co.kr/",
    view: "https://www.focemilano.co.kr/",
    name: "포체 밀라노 사이트",
  },
  {
    num: "07",
    title: "OBAKU",
    desc: "트랜드메카 사의 총판 브랜드 사이트로 유지 보수 업무를 진행했습니다.",
    img: port07,
    code: "https://www.obaku.kr/",
    view: "https://www.obaku.kr/",
    name: "오바쿠 사이트",
  }
];

export const contactText = [
  {
      link: "https://github.com/leeinwha",
      title: "github : iNa.",
  },
  {
      link: "mailto:aljard@naver.com",
      title: "mail : aljard@naver.com",
  },
];

export const footerText = [
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