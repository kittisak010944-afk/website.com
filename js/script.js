// Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });

        // ปิดเมนูเมื่อคลิกที่ลิงก์
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // ปิดเมนูเมื่อคลิกนอกเมนู
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }
});

// Project Data
const projects = [
    {
        title: 'แข่งทักษะ: SketchUp เหรียญทอง',
        image: 'img/projects/51389.jpg',
        tags: ['3D Design', 'SketchUp']
    },
    {
        title: 'แข่งทักษะ: เว็บไซต์-กราฟิก เหรียญทองแดง',
        image: 'img/projects/51164.jpg',
        tags: ['Web', 'Graphic']
    },
    {
        title: 'ออกแบบ ป้ายประชาสัมพันธ์',
        image: 'img/projects/51388.jpg',
        tags: ['Design', 'Banner']
    },
    {
        title: 'ประกาศรับสมัคร นักศึกษา',
        image: 'img/projects/51174.jpg',
        tags: ['Design', 'Advertising']
    },
    {
        title: 'ประกาศรับสมัคร นักศึกษา',
        image: 'img/projects/51175.jpg',
        tags: ['Design', 'Advertising']
    },
    {
        title: 'ป้ายโฆษณา รับสมัครอนุบาล',
        image: 'img/projects/ป้ายรวม 9.5x3 เมตร-04-02.jpg',
        tags: ['Banner', 'Advertising']
    },
    {
        title: 'ป้ายโฆษณา รับสมัครนักเรียน',
        image: 'img/projects/ป้ายรวม 9.5x3 เมตร-04-03.jpg',
        tags: ['Banner', 'Advertising']
    },
    {
        title: 'ออกแบบ ป้ายบริษัท',
        image: 'img/ppy-01.jpg',
        tags: ['Design', 'Corporate']
    },
    {
        title: 'โฆษณา สินค้าPPY',
        image: 'img/projects/ppyกล้อง1.png',
        tags: ['Product', 'Advertising']
    },
    {
        title: 'โฆษณา สินค้าPPY',
        image: 'img/projects/ppyกล้อง2.png',
        tags: ['Product', 'Advertising']
    },
    {
        title: 'ออกแบบเสื้อ วิ่งมาราธอน',
        image: 'img/projects/ออกแบบชุดกีฬาสีครู.png',
        tags: ['Fashion', 'Sport']
    },
    {
        title: 'ออกแบบเสื้อ กีฬาสีโรงเรียน',
        image: 'img/projects/ออกแบบชุดกีฬาสี นักเรียน.png',
        tags: ['Fashion', 'Sport']
    },
    {
        title: 'ออกแบบเสื้อ STAFF',
        image: 'img/projects/ออกแบบชุดกีฬาสี สตาฟ.png',
        tags: ['Fashion', 'Corporate']
    }
];

// Certificate Data
const certificates = [
    {
        title: 'ใบอนุญาติประกอบวิชาชีพครูชั้นต้น',
        issuer: 'คุรุสภา',
        date: '10 พฤษภาคม 2024',
        image: 'img/ใบประกอบ.png'
    },
    {
        title: 'เกียรติบัตร : งานศิลปหัตกรรม ครั้งที่ 72 ปีการศึกษา 2567',
        issuer: 'สำนักงานเขตพื้นที่การศึกษามัธยมศึกษาราชบุรี',
        date: '7 กุมภาพันธ์ 2024',
        image: 'img/7.2.68.jpg'
    },
    {
        title: 'วุฒิบัตร : อบรมหลักสูตรการจัดการเรียนการสอนภาษาคอมพิวเตอร์ ระดับมัธยมศึกษาผ่านระบบออนไลน์',
        issuer: 'สำนักงานคณะกรรมการส่งเสริมการศึกษาเอกชน',
        date: '15 มกราคม 2025',
        image: 'img/15.1.68.jpg'
    },
    {
        title: 'เกียรติบัตร : การประกันคุณภาพภายนอก',
        issuer: 'สมศ',
        date: '12 ธันวาคม 2024',
        image: 'img/12.12.67.jpg'
    },
    {
        title: 'ประกาศนียบัตร : หลักสูตรทักษะเอไอระดับพื้นฐาน',
        issuer: 'Microsoft Thailand',
        date: '23 เมษายน 2024',
        image: 'img/23.4.68(3h).png'
    },
    {
        title: 'ประกาศนียบัตร : พลิกโฉมธุรกิจท่องเที่ยวด้วยเทคโนโลยีดิจิทัล',
        issuer: '(ททท.)',
        date: '23 เมษายน 2024',
        image: 'img/23.4.68(5h).png'
    },
    {
        title: 'ประกาศนียบัตร : ระบบเครือข่ายคอมพิวเตอร์ขั้นพื้นฐาน',
        issuer: 'มหาวิทยาลัยเชียงใหม่',
        date: '23 เมษายน 2024',
        image: 'img/23.4.68(10h).png'
    }
];

// Portfolio Data
const portfolioItems = [
    {
        title: 'ผลงาน 1',
        category: 'Web Development',
        image: 'images/portfolio1.jpg'
    },
    {
        title: 'ผลงาน 2',
        category: 'Design',
        image: 'images/portfolio2.jpg'
    }
    // Add more portfolio items as needed
];

// Render Projects
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    const projectsHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <div class="project-info">
                <h3>${project.title}</h3>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    projectsGrid.innerHTML = projectsHTML;
}

// Render Certificates
function renderCertificates() {
    const certificatesGrid = document.querySelector('.certificates-grid');
    const certificatesHTML = certificates.map(cert => `
        <div class="certificate-card">
            <img src="${cert.image}" alt="${cert.title}" loading="lazy">
            <div class="certificate-info">
                <h4>${cert.title}</h4>
                <div class="certificate-meta">
                    <p><i class="fas fa-calendar"></i>${cert.date}</p>
                    <p><i class="fas fa-university"></i>${cert.issuer}</p>
                </div>
            </div>
        </div>
    `).join('');
    
    certificatesGrid.innerHTML = certificatesHTML;

    // Add click event for viewing certificates in full size
    const certImages = certificatesGrid.querySelectorAll('img');
    certImages.forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'image-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;
            document.body.appendChild(modal);
            
            modal.addEventListener('click', () => {
                modal.remove();
            });
        });
        img.style.cursor = 'pointer';
    });
}

// Render Portfolio
function renderPortfolio() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-info">
                <h3>${item.title}</h3>
                <p>${item.category}</p>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Initialize when DOM is loaded
// Experience Slider functionality
let currentSlide = 0;
const slider = document.getElementById('slider');

function updateSlider() {
    if (slider) {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
}

// Auto-advance slides every 5 seconds
let slideInterval;

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderCertificates();
    renderPortfolio();
    
    // Initialize slider
    const experienceContainer = document.querySelector('.experience-container');
    if (experienceContainer) {
        experienceContainer.addEventListener('mouseenter', stopSlideShow);
        experienceContainer.addEventListener('mouseleave', startSlideShow);
        startSlideShow();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});
