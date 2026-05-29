/*
  MFL 홈페이지 수정 가이드

  앞으로 홈페이지 내용을 바꾸고 싶으면 대부분 이 파일 위쪽만 수정하면 됩니다.

  1. 동아리 연락처 수정: siteInfo
  2. 정기 활동 수정: regularActivities
  3. 개별 활동 수정: specialActivities
  4. 홍보 게시물 추가: promotionPosts
  5. 갤러리 사진 추가: galleryItems

  이미지 사용법:
  - GitHub 저장소에 images 폴더 만들기
  - 예: images/market.jpg 파일 업로드
  - image: "images/market.jpg" 처럼 입력
*/

const siteInfo = {
  instagramId: "@mfl_official",
  instagramUrl: "https://instagram.com",
  email: "mfl@example.com",
  kakaoUrl: "#",
  recruitFormUrl: "https://forms.gle/",
  recruitStatus: "모집중"
};

const regularActivities = [
  {
    tag: "기업 분석",
    title: "기업 분석 프로젝트",
    description:
      "관심 기업의 사업 구조, 주요 제품 및 서비스, 시장 내 위치, 경쟁 전략을 분석하고 발표 자료와 보고서로 정리합니다.",
    meta: "정기 활동 · 팀 프로젝트"
  },
  {
    tag: "기업 탐방",
    title: "기업 탐방 및 현장 인터뷰",
    description:
      "공공기관, 금융기관, 기업 등을 직접 방문하여 현장의 업무 방식과 채용 정보를 듣고, 탐방 결과를 활동 자료로 정리합니다.",
    meta: "정기 활동 · 현장 경험"
  },
  {
    tag: "가상기업 제작",
    title: "가상기업 제작 및 홍보 활동",
    description:
      "직접 가상기업을 기획하고 브랜드 콘셉트, 서비스 구조, 홍보 콘텐츠, 마케팅 전략을 설계하며 실무형 기획력을 키웁니다.",
    meta: "정기 활동 · 기획 및 마케팅"
  },
  {
    tag: "오픽 스터디",
    title: "OPIc 스터디",
    description:
      "취업 준비에 필요한 영어 말하기 역량을 높이기 위해 주제별 답변 연습, 모의 인터뷰, 피드백 중심의 스터디를 진행합니다.",
    meta: "정기 활동 · 어학 역량"
  }
];

const specialActivities = [
  {
    tag: "플리마켓",
    title: "플리마켓 운영",
    description:
      "동아리원들이 직접 판매 기획, 상품 구성, 현장 운영, 고객 응대, 홍보를 경험하며 실전 마케팅 감각을 익힙니다.",
    meta: "개별 활동 · 운영 경험"
  },
  {
    tag: "보고서 작성",
    title: "활동 보고서 작성",
    description:
      "기업 탐방, 분석 프로젝트, 플리마켓 운영 등 주요 활동 이후 결과를 정리하고 활동의 의의와 개선점을 보고서로 작성합니다.",
    meta: "개별 활동 · 기록 및 정리"
  }
];

/*
  홍보 게시물 추가 방법

  아래 형식을 복사해서 promotionPosts 안에 추가하면 됩니다.

  {
    title: "게시물 제목",
    category: "카테고리",
    date: "2026.06.01",
    description: "홍보 문구",
    image: "images/example.jpg",
    link: "https://instagram.com"
  }

  이미지가 아직 없으면 image: "" 로 두면 MFL 기본 이미지가 자동으로 나옵니다.
*/

const promotionPosts = [
  {
    title: "MFL 홍보 게시판 오픈",
    category: "공지",
    date: "2026.05.29",
    description:
      "앞으로 MFL이 직접 기획하고 제작한 홍보 콘텐츠와 협업 게시물이 이곳에 업로드될 예정입니다.",
    image: "",
    link: "#"
  },
  {
    title: "플리마켓 운영 준비",
    category: "플리마켓",
    date: "2026.06. 예정",
    description:
      "MFL은 플리마켓 운영을 통해 상품 기획, 판매 전략, 현장 홍보 활동을 직접 경험할 예정입니다.",
    image: "",
    link: "#"
  },
  {
    title: "가상기업 홍보 콘텐츠 제작",
    category: "프로젝트",
    date: "2026.06. 예정",
    description:
      "가상기업 제작 활동과 연계하여 브랜드 소개, 제품 홍보, SNS 콘텐츠 제작을 실습합니다.",
    image: "",
    link: "#"
  }
];

const galleryItems = [
  {
    title: "기업 분석 활동",
    description: "기업의 사업 구조와 시장 전략을 분석하는 팀 활동",
    image: ""
  },
  {
    title: "기업 탐방",
    description: "현직자와의 질의응답을 통해 실무 정보를 얻는 시간",
    image: ""
  },
  {
    title: "가상기업 제작",
    description: "브랜드와 사업 아이디어를 직접 설계하는 프로젝트",
    image: ""
  },
  {
    title: "홍보 콘텐츠 제작",
    description: "광고 문구, 카드뉴스, 영상 콘텐츠를 기획하는 활동",
    image: ""
  },
  {
    title: "오픽 스터디",
    description: "취업 어학 역량을 위한 말하기 연습과 피드백",
    image: ""
  },
  {
    title: "활동 보고서 작성",
    description: "활동 결과를 정리하고 기록하는 보고서 작성 활동",
    image: ""
  }
];

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");
const topBtn = document.getElementById("topBtn");
const contactForm = document.getElementById("contactForm");

const regularActivitiesEl = document.getElementById("regularActivities");
const specialActivitiesEl = document.getElementById("specialActivities");
const promotionPostsEl = document.getElementById("promotionPosts");
const galleryListEl = document.getElementById("galleryList");

const instagramText = document.getElementById("instagramText");
const instagramLink = document.getElementById("instagramLink");
const emailText = document.getElementById("emailText");
const emailLink = document.getElementById("emailLink");
const kakaoLink = document.getElementById("kakaoLink");
const countdown = document.getElementById("countdown");

function applySiteInfo() {
  instagramText.textContent = siteInfo.instagramId;
  instagramLink.href = siteInfo.instagramUrl;

  emailText.textContent = siteInfo.email;
  emailLink.href = `mailto:${siteInfo.email}`;

  kakaoLink.href = siteInfo.kakaoUrl;
  countdown.textContent = siteInfo.recruitStatus;

  const recruitButton = document.querySelector(".recruit-card .btn");
  recruitButton.href = siteInfo.recruitFormUrl;
}

function createActivityCard(activity) {
  return `
    <article class="activity-card reveal">
      <span class="tag">${activity.tag}</span>
      <h3>${activity.title}</h3>
      <p>${activity.description}</p>
      <div class="activity-meta">${activity.meta}</div>
    </article>
  `;
}

function createPromotionCard(post) {
  const imageContent = post.image
    ? `<div class="promotion-img" style="background-image: url('${post.image}');"></div>`
    : `<div class="promotion-img placeholder">MFL</div>`;

  const linkText = post.link && post.link !== "#"
    ? `<a href="${post.link}" target="_blank" class="post-link">게시물 보러가기</a>`
    : `<span class="post-link">게시 예정</span>`;

  return `
    <article class="promotion-card reveal">
      ${imageContent}
      <span class="post-date">${post.category} · ${post.date}</span>
      <h3>${post.title}</h3>
      <p>${post.description}</p>
      ${linkText}
    </article>
  `;
}

function createGalleryCard(item) {
  const imageContent = item.image
    ? `<div class="gallery-img" style="background-image: url('${item.image}');"></div>`
    : `<div class="gallery-img placeholder">MFL</div>`;

  return `
    <article class="gallery-card reveal">
      ${imageContent}
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `;
}

function renderContent() {
  regularActivitiesEl.innerHTML = regularActivities.map(createActivityCard).join("");
  specialActivitiesEl.innerHTML = specialActivities.map(createActivityCard).join("");
  promotionPostsEl.innerHTML = promotionPosts.map(createPromotionCard).join("");
  galleryListEl.innerHTML = galleryItems.map(createGalleryCard).join("");
}

function setupMobileMenu() {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

function setupTopButton() {
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function setupActiveMenu() {
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 130;

      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
}

function setupRevealAnimation() {
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

function setupContactForm() {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("모든 항목을 입력해 주세요.");
      return;
    }

    alert("문의가 접수되었습니다. 실제 사용 시에는 구글폼, 이메일, 카카오톡 링크와 연결하는 것을 추천합니다.");
    contactForm.reset();
  });
}

applySiteInfo();
renderContent();
setupMobileMenu();
setupTopButton();
setupActiveMenu();
setupContactForm();
setupRevealAnimation();
