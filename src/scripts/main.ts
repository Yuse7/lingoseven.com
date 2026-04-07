// ========== Platform-aware CTA buttons ==========
// Highlight App Store button on iOS/macOS, Google Play on Android.
// Other platforms keep the default (App Store primary).
(() => {
  const ua = navigator.userAgent || '';
  const isIOS = /iPhone|iPad|iPod|Macintosh/i.test(ua) && !/Android/i.test(ua);
  const isAndroid = /Android/i.test(ua);

  if (!isIOS && !isAndroid) return;

  const appStoreLinks = document.querySelectorAll<HTMLAnchorElement>('a[href*="apps.apple.com"]');
  const playStoreLinks = document.querySelectorAll<HTMLAnchorElement>('a[href*="play.google.com"]');

  const swap = (el: HTMLAnchorElement, makePrimary: boolean) => {
    if (!el.classList.contains('btn')) return;
    if (makePrimary) {
      el.classList.remove('btn-outline');
      el.classList.add('btn-primary');
    } else {
      el.classList.remove('btn-primary');
      el.classList.add('btn-outline');
    }
  };

  if (isAndroid) {
    appStoreLinks.forEach((el) => swap(el, false));
    playStoreLinks.forEach((el) => swap(el, true));
  } else {
    // iOS — keep default (App Store primary), but ensure consistency
    appStoreLinks.forEach((el) => swap(el, true));
    playStoreLinks.forEach((el) => swap(el, false));
  }
})();

// ========== Mobile menu ==========
const mobileMenuBtn = document.querySelector('.mobile-menu-btn') as HTMLElement | null;
const navLinks = document.querySelector('.nav-links') as HTMLElement | null;

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
}

// ========== FAQ accordion ==========
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');
  if (!question) return;

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Close all others
    faqItems.forEach((faq) => faq.classList.remove('active'));

    // Open current if it was closed
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// ========== Smooth scroll for anchor links ==========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
    e.preventDefault();
    const targetId = this.getAttribute('href');

    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Close mobile menu after click
      if (navLinks?.classList.contains('active')) {
        mobileMenuBtn?.classList.remove('active');
        navLinks.classList.remove('active');
      }
    }
  });
});

// ========== Scroll animation (intersection observer) ==========
const observerOptions: IntersectionObserverInit = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add animation class to elements
document.querySelectorAll('.step, .testimonial-card, .faq-item').forEach((el) => {
  el.classList.add('animate-on-scroll');
  observer.observe(el);
});

// "How it works" section animations
document.querySelectorAll('.step-detailed, .bonus-block, .summary-block').forEach((el) => {
  observer.observe(el);
});

// ========== Features slider ==========
const slider = document.querySelector('.slider') as HTMLElement | null;
if (slider) {
  const track = slider.querySelector('.slider-track') as HTMLElement | null;
  const slides = slider.querySelectorAll('.slide');
  const prevBtn = slider.querySelector('.slider-btn-prev') as HTMLElement | null;
  const nextBtn = slider.querySelector('.slider-btn-next') as HTMLElement | null;
  const dotsContainer = slider.querySelector('.slider-dots') as HTMLElement | null;

  if (track && prevBtn && nextBtn && dotsContainer) {
    let currentIndex = 0;
    let slidesPerView = 3;
    let slideWidth = 0;
    const gap = 24;

    function updateSlidesPerView(): void {
      if (window.innerWidth <= 768) {
        slidesPerView = 1;
      } else if (window.innerWidth <= 1024) {
        slidesPerView = 2;
      } else {
        slidesPerView = 3;
      }
    }

    function createDots(): void {
      dotsContainer!.innerHTML = '';
      const totalDots = Math.ceil(slides.length - slidesPerView + 1);
      for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('button');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer!.appendChild(dot);
      }
    }

    function updateDots(): void {
      const dots = dotsContainer!.querySelectorAll('.slider-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    function calculateSlideWidth(): void {
      if (slides.length > 0) {
        slideWidth = (slides[0] as HTMLElement).offsetWidth + gap;
      }
    }

    function goToSlide(index: number): void {
      const maxIndex = slides.length - slidesPerView;
      currentIndex = Math.max(0, Math.min(index, maxIndex));
      track!.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      updateDots();
    }

    function nextSlide(): void {
      goToSlide(currentIndex + 1);
    }

    function prevSlide(): void {
      goToSlide(currentIndex - 1);
    }

    function initSlider(): void {
      updateSlidesPerView();
      calculateSlideWidth();
      createDots();
      goToSlide(0);
    }

    // Events
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Touch swipe on mobile
    let startX = 0;
    let isDragging = false;

    slider.addEventListener(
      'touchstart',
      (e: TouchEvent) => {
        startX = e.touches[0].clientX;
        isDragging = true;
      },
      { passive: true }
    );

    slider.addEventListener(
      'touchend',
      (e: TouchEvent) => {
        if (!isDragging) return;
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        if (Math.abs(diff) > 30) {
          if (diff > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        }
        isDragging = false;
      },
      { passive: true }
    );

    // Resize
    window.addEventListener('resize', () => {
      updateSlidesPerView();
      calculateSlideWidth();
      createDots();
      goToSlide(currentIndex);
    });

    // Init
    initSlider();
  }
}

// ========== Header scroll effect ==========
const header = document.querySelector('.header') as HTMLElement | null;

if (header) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ========== Number animation in stats ==========
function animateNumbers(): void {
  const stats = document.querySelectorAll('.stat-number');

  stats.forEach((stat) => {
    const text = stat.textContent || '';
    const hasK = text.includes('K');
    const hasPlus = text.includes('+');
    const number = parseFloat(text.replace(/[K+]/g, ''));

    let current = 0;
    const increment = number / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        current = number;
        clearInterval(timer);
      }

      let display = current.toFixed(current >= 100 ? 0 : 1);
      if (hasK) display += 'K';
      if (hasPlus) display += '+';
      stat.textContent = display;
    }, 30);
  });
}

// Trigger number animation when hero section is visible
const heroSection = document.querySelector('.hero') as HTMLElement | null;
if (heroSection) {
  const heroObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateNumbers();
        heroObserver.unobserve(heroSection);
      }
    },
    { threshold: 0.5 }
  );

  heroObserver.observe(heroSection);
}

// ========== Testimonials slider ==========
const testimonialsTrack = document.querySelector('.testimonials-track') as HTMLElement | null;
const testimonialsPrevBtn = document.querySelector('.testimonials-btn-prev') as HTMLElement | null;
const testimonialsNextBtn = document.querySelector('.testimonials-btn-next') as HTMLElement | null;

if (testimonialsTrack && testimonialsPrevBtn && testimonialsNextBtn) {
  let testimonialsPosition = 0;
  const testimonialCards = testimonialsTrack.querySelectorAll('.testimonial-card');
  const cardWidth = 350 + 24; // card width + gap
  const visibleCards = Math.floor((window.innerWidth - 120) / cardWidth);
  const maxPosition = Math.max(0, (testimonialCards.length - visibleCards) * cardWidth);

  function updateTestimonialsPosition(): void {
    testimonialsTrack!.style.transform = `translateX(-${testimonialsPosition}px)`;
  }

  testimonialsNextBtn.addEventListener('click', () => {
    testimonialsPosition = Math.min(testimonialsPosition + cardWidth * 2, maxPosition);
    updateTestimonialsPosition();
  });

  testimonialsPrevBtn.addEventListener('click', () => {
    testimonialsPosition = Math.max(testimonialsPosition - cardWidth * 2, 0);
    updateTestimonialsPosition();
  });

  // Touch swipe for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  testimonialsTrack.addEventListener(
    'touchstart',
    (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  testimonialsTrack.addEventListener(
    'touchend',
    (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          testimonialsPosition = Math.min(testimonialsPosition + cardWidth, maxPosition);
        } else {
          testimonialsPosition = Math.max(testimonialsPosition - cardWidth, 0);
        }
        updateTestimonialsPosition();
      }
    },
    { passive: true }
  );
}

// ========== Flag pair animation ==========
const flagPairs: [string, string][] = [
  ['cn', 'cz'], // Chinese + Czech
  ['jp', 'es'], // Japanese + Spanish
  ['de', 'kr'], // German + Korean
  ['fr', 'ru'], // French + Russian
  ['gb', 'jp'], // English + Japanese
  ['it', 'pl'], // Italian + Polish
  ['pt', 'nl'], // Portuguese + Dutch
  ['ar', 'se'], // Arabic + Swedish
  ['tr', 'ua'], // Turkish + Ukrainian
  ['gr', 'fi'], // Greek + Finnish
];

let currentPairIndex = 0;
let autoChangeInterval: ReturnType<typeof setInterval> | undefined;

function initFlagsPairAnimation(): void {
  const flagsPair = document.getElementById('flagsPair');
  const flagLeft = document.getElementById('flagLeft');
  const flagRight = document.getElementById('flagRight');

  if (!flagsPair || !flagLeft || !flagRight) return;

  function changePair(newIndex: number): void {
    flagLeft!.classList.add('changing');
    flagRight!.classList.add('changing');

    setTimeout(() => {
      const pair = flagPairs[newIndex];
      flagLeft!.className = `fi fi-${pair[0]} flag-main`;
      flagRight!.className = `fi fi-${pair[1]} flag-main`;

      setTimeout(() => {
        flagLeft!.classList.remove('changing');
        flagRight!.classList.remove('changing');
      }, 50);
    }, 300);
  }

  function nextPair(): void {
    currentPairIndex = (currentPairIndex + 1) % flagPairs.length;
    changePair(currentPairIndex);
  }

  // Click to change pair
  flagsPair.addEventListener('click', () => {
    clearInterval(autoChangeInterval);
    nextPair();
    autoChangeInterval = setInterval(nextPair, 3000);
  });

  // Auto-change every 3 seconds
  autoChangeInterval = setInterval(nextPair, 3000);

  // Pause when page is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(autoChangeInterval);
    } else {
      autoChangeInterval = setInterval(nextPair, 3000);
    }
  });
}

initFlagsPairAnimation();

// ========== Dynamic flag scale in carousel ==========
function initFlagsScaleEffect(): void {
  const carousels = document.querySelectorAll('.flags-carousel');

  if (!carousels.length) return;

  function updateFlagsScale(): void {
    carousels.forEach((carousel) => {
      const rect = carousel.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const flags = carousel.querySelectorAll('.fi');

      flags.forEach((flag) => {
        const flagEl = flag as HTMLElement;
        const flagRect = flagEl.getBoundingClientRect();
        const flagCenterY = flagRect.top + flagRect.height / 2;

        // Distance from carousel center (0 = center, 1 = edge)
        const distance = Math.abs(flagCenterY - centerY) / (rect.height / 2);

        // Scale: 1.3 at center, 0.6 at edges
        const scale = Math.max(0.6, 1.3 - distance * 0.7);

        // Opacity: 1 at center, 0.5 at edges
        const opacity = Math.max(0.5, 1 - distance * 0.5);

        flagEl.style.transform = `scale(${scale})`;
        flagEl.style.opacity = String(opacity);
      });
    });

    requestAnimationFrame(updateFlagsScale);
  }

  updateFlagsScale();
}

initFlagsScaleEffect();

// ========== Download animation (video to emoji transition) ==========
const downloadVideo = document.getElementById('downloadVideo') as HTMLVideoElement | null;
const downloadEmoji = document.getElementById('downloadEmoji') as HTMLElement | null;

if (downloadVideo && downloadEmoji) {
  downloadVideo.addEventListener('ended', () => {
    downloadVideo.classList.add('hidden');
    downloadEmoji.classList.add('visible');
  });
}

// Read animation with number
const readVideo = document.getElementById('readVideo') as HTMLVideoElement | null;
const readNumber = document.getElementById('readNumber') as HTMLElement | null;

if (readVideo && readNumber) {
  readVideo.addEventListener('ended', () => {
    readVideo.classList.add('hidden');
    readNumber.classList.add('visible');
  });
}

// ========== Analytics tracking for store links ==========
declare function ym(id: number, action: string, goal: string): void;
declare function gtag(command: string, event: string, params: Record<string, unknown>): void;

document.querySelectorAll('a[href*="apps.apple.com"]').forEach((link) => {
  link.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
    e.preventDefault();
    const url = this.href;
    if (typeof ym !== 'undefined') ym(106042821, 'reachGoal', 'click_app_store');
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click_app_store', {
        event_category: 'download',
        event_callback: () => {
          window.location.href = url;
        },
      });
      setTimeout(() => {
        window.location.href = url;
      }, 500);
    } else {
      window.location.href = url;
    }
  });
});

document.querySelectorAll('a[href*="play.google.com"]').forEach((link) => {
  link.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
    e.preventDefault();
    const url = this.href;
    if (typeof ym !== 'undefined') ym(106042821, 'reachGoal', 'click_google_play');
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click_google_play', {
        event_category: 'download',
        event_callback: () => {
          window.location.href = url;
        },
      });
      setTimeout(() => {
        window.location.href = url;
      }, 500);
    } else {
      window.location.href = url;
    }
  });
});
