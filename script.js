// 스크롤 이벤트 처리
window.addEventListener('scroll', function() {
    const header = document.querySelector('.Background-Border');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// 프로모션 토글 버튼
const toggleButton = document.querySelector('.toggle-button');
if (toggleButton) {
    toggleButton.addEventListener('click', function() {
        const promotionContent = document.querySelector('.promotion-content');
        promotionContent.classList.toggle('expanded');
    });
}

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 이미지 지연 로딩
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// 반응형 네비게이션 메뉴 토글
function createMobileMenu() {
    const header = document.querySelector('.Background-Border');

    // 모바일 메뉴 버튼이 없으면 생성
    if (!document.querySelector('.mobile-menu-btn')) {
        const menuBtn = document.createElement('button');
        menuBtn.className = 'mobile-menu-btn';
        menuBtn.innerHTML = '☰';
        menuBtn.style.display = 'none';

        menuBtn.addEventListener('click', function() {
            const navList = document.querySelector('.Nav-List');
            navList.classList.toggle('mobile-open');
        });

        header.appendChild(menuBtn);
    }
}

// 윈도우 크기 변경 시 모바일 메뉴 처리
function handleResize() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

    if (window.innerWidth <= 1024) {
        if (mobileMenuBtn) {
            mobileMenuBtn.style.display = 'block';
        }
    } else {
        if (mobileMenuBtn) {
            mobileMenuBtn.style.display = 'none';
        }
        const navList = document.querySelector('.Nav-List');
        if (navList) {
            navList.classList.remove('mobile-open');
        }
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', function() {
    createMobileMenu();
    handleResize();
});

// 애니메이션 효과
function animateOnScroll() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

document.addEventListener('DOMContentLoaded', animateOnScroll);

// 검색 기능
const searchIcon = document.querySelector('.search-icon');
if (searchIcon) {
    searchIcon.addEventListener('click', function() {
        // 검색 창 열기/닫기 기능 추가 가능
        console.log('검색 기능');
    });
}

// 로그인/회원가입 버튼
const signupBtn = document.querySelector('.Link-signup');
const signinBtn = document.querySelector('.Link-signin');

if (signupBtn) {
    signupBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('회원가입');
    });
}

if (signinBtn) {
    signinBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('로그인');
    });
}

// 버튼 호버 효과
document.querySelectorAll('.Link-button, .Link-footer-button, .Border-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
