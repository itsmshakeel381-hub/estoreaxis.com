const NAV_HTML = `
<div class="topbar">
  <div class="tb-inner">
    <div class="tb-left">
      <a href="tel:+12345678900"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 10.82a19.79 19.79 0 01-3.07-8.67A2 2 0 012.41 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l.77-.77a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>+1 (234) 567-8900</a>
      <a href="mailto:info@estoreaxis.com"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>info@estoreaxis.com</a>
    </div>
    <a href="https://www.upwork.com/freelancers/YOUR-ID" target="_blank" class="tb-upwork">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
      Available on Upwork
    </a>
    <div class="tb-socials">
      <a href="#" aria-label="LinkedIn">in</a>
      <a href="#" aria-label="Facebook">f</a>
      <a href="#" aria-label="Instagram">ig</a>
    </div>
  </div>
</div>
<header class="site-header" id="site-header">
  <div class="header-inner">
    <a href="index.html" class="logo">
      <div class="logo-mark">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><path d="M12 3L3 8v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v8"/></svg>
      </div>
      <span class="logo-text">EStore<strong>Axis</strong></span>
    </a>
    <button class="nav-toggle" id="nav-toggle" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
    <nav class="main-nav" id="main-nav">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li class="has-mega">
          <a href="#">Platforms <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></a>
          <div class="mega-menu">
            <div class="mega-col">
              <p class="mega-label">Marketplaces</p>
              <a href="amazon.html" class="mega-link"><span class="mega-icon" style="background:#FFF3E0;color:#E65100;">Az</span><div><strong>Amazon</strong><span>PPC, FBA, Brand Registry</span></div></a>
              <a href="walmart.html" class="mega-link"><span class="mega-icon" style="background:#E3F2FD;color:#0D47A1;">Wm</span><div><strong>Walmart</strong><span>Seller Center, WFS, Ads</span></div></a>
              <a href="ebay.html" class="mega-link"><span class="mega-icon" style="background:#FCE4EC;color:#880E4F;">eB</span><div><strong>eBay</strong><span>Store, Listings, Promoted</span></div></a>
            </div>
            <div class="mega-col">
              <p class="mega-label">Retail Channels</p>
              <a href="homedepot.html" class="mega-link"><span class="mega-icon" style="background:#FBE9E7;color:#BF360C;">HD</span><div><strong>Home Depot</strong><span>Vendor & catalog management</span></div></a>
              <a href="lowes.html" class="mega-link"><span class="mega-icon" style="background:#E8EAF6;color:#1A237E;">Lw</span><div><strong>Lowes</strong><span>Supplier onboarding & orders</span></div></a>
              <a href="multichannel.html" class="mega-link"><span class="mega-icon" style="background:#E8F5E9;color:#1B5E20;">MC</span><div><strong>Multi-Channel</strong><span>Unified cross-platform strategy</span></div></a>
            </div>
            <div class="mega-cta">
              <p>Not sure where to start?</p>
              <a href="index.html#contact" class="btn-primary-sm">Get a Free Audit →</a>
            </div>
          </div>
        </li>
        <li><a href="index.html#cases">Case Studies</a></li>
        <li><a href="index.html#team">Team</a></li>
        <li><a href="index.html#faq">FAQs</a></li>
      </ul>
      <div class="nav-actions">
        <a href="https://www.upwork.com/freelancers/YOUR-ID" target="_blank" class="btn-upwork-nav">🟢 Hire on Upwork</a>
        <a href="index.html#contact" class="btn-primary-nav">Schedule a Call</a>
      </div>
    </nav>
  </div>
</header>`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="footer-top">
    <div class="footer-brand">
      <a href="index.html" class="logo" style="margin-bottom:16px;display:inline-flex;">
        <div class="logo-mark"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><path d="M12 3L3 8v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v8"/></svg></div>
        <span class="logo-text" style="color:#fff;">EStore<strong>Axis</strong></span>
      </a>
      <p>Multi-platform eCommerce management specialist helping brands grow profitably on Amazon, Walmart, eBay, Home Depot, Lowes & beyond.</p>
      <div class="footer-socials">
        <a href="#" aria-label="LinkedIn">in</a>
        <a href="#" aria-label="Facebook">f</a>
        <a href="#" aria-label="Instagram">ig</a>
        <a href="https://www.upwork.com/freelancers/YOUR-ID" target="_blank" aria-label="Upwork" style="background:#14B561;">⬆</a>
      </div>
    </div>
    <div class="footer-links">
      <div class="footer-col">
        <h4>Platforms</h4>
        <ul>
          <li><a href="amazon.html">Amazon</a></li>
          <li><a href="walmart.html">Walmart</a></li>
          <li><a href="ebay.html">eBay</a></li>
          <li><a href="homedepot.html">Home Depot</a></li>
          <li><a href="lowes.html">Lowes</a></li>
          <li><a href="multichannel.html">Multi-Channel</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="index.html#about">About Us</a></li>
          <li><a href="index.html#cases">Case Studies</a></li>
          <li><a href="index.html#testimonials">Testimonials</a></li>
          <li><a href="index.html#team">Our Team</a></li>
          <li><a href="index.html#faq">FAQs</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Get in Touch</h4>
        <ul>
          <li><a href="tel:+12345678900">+1 (234) 567-8900</a></li>
          <li><a href="mailto:info@estoreaxis.com">info@estoreaxis.com</a></li>
          <li><a href="https://wa.me/YOURPHONE" target="_blank">WhatsApp Chat</a></li>
          <li><a href="index.html#contact">Schedule a Call</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 EStoreAxis. All rights reserved.</p>
    <div style="display:flex;gap:20px;">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
    </div>
  </div>
</footer>
<a href="https://wa.me/YOURPHONE?text=Hi!%20I'm%20interested%20in%20EStoreAxis%20services." target="_blank" class="wa-float" aria-label="WhatsApp">
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>`;

const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{
  --white:#FFFFFF;
  --gray-50:#F9FAFB;
  --gray-100:#F3F4F6;
  --gray-200:#E5E7EB;
  --gray-300:#D1D5DB;
  --gray-400:#9CA3AF;
  --gray-500:#6B7280;
  --gray-600:#4B5563;
  --gray-700:#374151;
  --gray-800:#1F2937;
  --gray-900:#111827;
  --ink:#0A0A0B;
  --blue:#0066FF;
  --blue-dark:#0052CC;
  --blue-light:#EEF4FF;
  --blue-mid:#DBEAFE;
  --green:#14B561;
  --red:#EF4444;
  --amber:#F59E0B;
  --radius-sm:6px;
  --radius:10px;
  --radius-lg:16px;
  --radius-xl:24px;
  --shadow-xs:0 1px 2px rgba(0,0,0,.05);
  --shadow-sm:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.04);
  --shadow:0 4px 6px -1px rgba(0,0,0,.07),0 2px 4px -1px rgba(0,0,0,.04);
  --shadow-md:0 10px 15px -3px rgba(0,0,0,.08),0 4px 6px -2px rgba(0,0,0,.04);
  --shadow-lg:0 20px 25px -5px rgba(0,0,0,.08),0 10px 10px -5px rgba(0,0,0,.03);
  --shadow-xl:0 25px 50px -12px rgba(0,0,0,.12);
}
html{scroll-behavior:smooth;}
body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--white);color:var(--ink);line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased;}
a{text-decoration:none;color:inherit;}
img{max-width:100%;display:block;}
::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{background:#f1f1f1;}::-webkit-scrollbar-thumb{background:var(--blue);border-radius:3px;}

/* TOPBAR */
.topbar{background:var(--gray-900);padding:9px 0;}
.tb-inner{max-width:1280px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;}
.tb-left{display:flex;gap:20px;}
.tb-left a,.topbar a{color:#9CA3AF;font-size:12.5px;font-weight:500;display:flex;align-items:center;gap:5px;transition:color .15s;}
.tb-left a:hover{color:#fff;}
.tb-upwork{display:flex;align-items:center;gap:6px;background:#14B561;color:#fff!important;font-size:12px;font-weight:700;padding:4px 14px;border-radius:20px;}
.tb-socials{display:flex;gap:6px;}
.tb-socials a{width:26px;height:26px;background:#374151;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#9CA3AF;transition:all .15s;}
.tb-socials a:hover{background:var(--blue);color:#fff;}

/* HEADER */
.site-header{background:rgba(255,255,255,.92);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid var(--gray-200);position:sticky;top:0;z-index:1000;transition:box-shadow .2s;}
.site-header.scrolled{box-shadow:var(--shadow-md);}
.header-inner{max-width:1280px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;height:68px;gap:24px;}
.logo{display:flex;align-items:center;gap:10px;}
.logo-mark{width:36px;height:36px;background:var(--blue);border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.logo-text{font-size:17px;font-weight:600;color:var(--ink);letter-spacing:-.3px;}
.logo-text strong{font-weight:800;color:var(--blue);}
.main-nav{display:flex;align-items:center;gap:4px;flex:1;justify-content:center;}
.main-nav ul{display:flex;align-items:center;gap:2px;list-style:none;}
.main-nav ul li a{display:flex;align-items:center;gap:4px;padding:8px 14px;border-radius:var(--radius-sm);font-size:14px;font-weight:500;color:var(--gray-600);transition:all .15s;white-space:nowrap;}
.main-nav ul li a:hover,.main-nav ul li a.active{color:var(--ink);background:var(--gray-100);}
.nav-actions{display:flex;align-items:center;gap:10px;flex-shrink:0;}
.btn-upwork-nav{display:flex;align-items:center;gap:6px;font-size:13px;font-weight:700;color:#14B561;border:1.5px solid #14B561;padding:8px 16px;border-radius:20px;transition:all .15s;}
.btn-upwork-nav:hover{background:#14B561;color:#fff;}
.btn-primary-nav{background:var(--blue);color:#fff;padding:9px 20px;border-radius:20px;font-size:13px;font-weight:700;transition:all .15s;white-space:nowrap;}
.btn-primary-nav:hover{background:var(--blue-dark);transform:translateY(-1px);box-shadow:0 4px 12px rgba(0,102,255,.3);}

/* MEGA MENU */
.has-mega{position:relative;}
.mega-menu{display:none;position:absolute;top:calc(100% + 12px);left:50%;transform:translateX(-50%);background:#fff;border:1px solid var(--gray-200);border-radius:var(--radius-lg);padding:24px;box-shadow:var(--shadow-xl);z-index:200;width:640px;display:none;grid-template-columns:1fr 1fr auto;}
.has-mega:hover .mega-menu{display:grid;}
.mega-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--gray-400);margin-bottom:10px;}
.mega-link{display:flex;align-items:center;gap:12px;padding:10px;border-radius:var(--radius);transition:background .15s;margin-bottom:4px;}
.mega-link:hover{background:var(--gray-50);}
.mega-icon{width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;flex-shrink:0;}
.mega-link strong{display:block;font-size:13px;font-weight:700;color:var(--ink);margin-bottom:2px;}
.mega-link span{font-size:12px;color:var(--gray-500);}
.mega-cta{border-left:1px solid var(--gray-200);padding-left:20px;display:flex;flex-direction:column;justify-content:center;}
.mega-cta p{font-size:13px;color:var(--gray-600);margin-bottom:14px;line-height:1.5;}
.btn-primary-sm{display:inline-block;background:var(--blue);color:#fff;padding:9px 16px;border-radius:20px;font-size:13px;font-weight:700;transition:all .15s;}
.btn-primary-sm:hover{background:var(--blue-dark);}

/* HAMBURGER */
.nav-toggle{display:none;flex-direction:column;gap:5px;background:none;border:1.5px solid var(--gray-200);border-radius:var(--radius-sm);padding:8px 10px;cursor:pointer;}
.nav-toggle span{display:block;width:18px;height:2px;background:var(--ink);border-radius:2px;transition:.3s;}
.nav-toggle.open span:nth-child(1){transform:rotate(45deg) translate(5px,5px);}
.nav-toggle.open span:nth-child(2){opacity:0;}
.nav-toggle.open span:nth-child(3){transform:rotate(-45deg) translate(5px,-5px);}

/* GLOBAL BUTTON STYLES */
.btn-primary{display:inline-flex;align-items:center;gap:6px;background:var(--blue);color:#fff;padding:13px 26px;border-radius:25px;font-size:14px;font-weight:700;transition:all .2s;border:none;cursor:pointer;}
.btn-primary:hover{background:var(--blue-dark);transform:translateY(-1px);box-shadow:0 6px 20px rgba(0,102,255,.35);}
.btn-outline{display:inline-flex;align-items:center;gap:6px;background:transparent;color:var(--ink);padding:12px 24px;border-radius:25px;font-size:14px;font-weight:600;border:1.5px solid var(--gray-300);transition:all .2s;}
.btn-outline:hover{border-color:var(--ink);background:var(--gray-50);}
.btn-upwork{display:inline-flex;align-items:center;gap:7px;background:#14B561;color:#fff;padding:12px 22px;border-radius:25px;font-size:14px;font-weight:700;transition:all .2s;}
.btn-upwork:hover{background:#0fa050;transform:translateY(-1px);box-shadow:0 6px 20px rgba(20,181,97,.3);}

/* EYEBROW / LABELS */
.eyebrow{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--blue);margin-bottom:14px;}
.eyebrow::before{content:'';width:20px;height:2px;background:var(--blue);border-radius:2px;}
.section-title{font-size:38px;font-weight:800;color:var(--ink);line-height:1.15;letter-spacing:-1px;margin-bottom:14px;}
.section-sub{font-size:16px;color:var(--gray-500);line-height:1.75;margin-bottom:24px;}
.section-header{margin-bottom:52px;}
.section-header .section-title{margin-bottom:10px;}
.section-header .section-sub{max-width:560px;}
.section-header.center{text-align:center;}
.section-header.center .section-sub{margin:0 auto 0;}

/* LAYOUT */
.container{max-width:1280px;margin:0 auto;padding:0 24px;}
.section-white{background:var(--white);padding:96px 24px;}
.section-gray{background:var(--gray-50);padding:96px 24px;border-top:1px solid var(--gray-200);border-bottom:1px solid var(--gray-200);}

/* CARDS */
.card{background:#fff;border:1px solid var(--gray-200);border-radius:var(--radius-lg);padding:28px;transition:all .25s;}
.card:hover{border-color:var(--gray-300);box-shadow:var(--shadow-md);}
.card-icon{width:48px;height:48px;border-radius:12px;background:var(--blue-light);display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:18px;}

/* FOOTER */
.site-footer{background:var(--gray-900);color:#fff;padding:64px 24px 0;}
.footer-top{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:300px 1fr;gap:60px;padding-bottom:48px;border-bottom:1px solid #374151;}
.footer-brand p{font-size:14px;color:#9CA3AF;line-height:1.7;margin-bottom:20px;}
.footer-socials{display:flex;gap:8px;}
.footer-socials a{width:34px;height:34px;background:#374151;border:1px solid #4B5563;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;color:#9CA3AF;transition:.15s;}
.footer-socials a:hover{background:var(--blue);color:#fff;border-color:var(--blue);}
.footer-links{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;}
.footer-col h4{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#9CA3AF;margin-bottom:16px;}
.footer-col ul{list-style:none;display:flex;flex-direction:column;gap:10px;}
.footer-col ul a{font-size:14px;color:#D1D5DB;transition:.15s;}
.footer-col ul a:hover{color:#fff;}
.footer-bottom{max-width:1280px;margin:0 auto;padding:20px 0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;}
.footer-bottom p,.footer-bottom a{font-size:13px;color:#6B7280;}
.footer-bottom a:hover{color:#9CA3AF;}

/* WHATSAPP */
.wa-float{position:fixed;bottom:28px;right:28px;z-index:999;width:54px;height:54px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(37,211,102,.4);transition:all .2s;}
.wa-float:hover{transform:scale(1.1);box-shadow:0 6px 28px rgba(37,211,102,.5);}

@media(max-width:1024px){
  .main-nav ul{display:none;}
  .nav-actions{display:none;}
  .nav-toggle{display:flex;}
  .main-nav{justify-content:flex-end;}
  .main-nav.mobile-open ul{display:flex;flex-direction:column;position:fixed;inset:0;top:68px;background:#fff;padding:24px;gap:4px;z-index:999;overflow-y:auto;}
  .main-nav.mobile-open .nav-actions{display:flex;flex-direction:column;position:fixed;bottom:0;left:0;right:0;background:#fff;padding:16px 24px;border-top:1px solid var(--gray-200);z-index:999;}
  .main-nav.mobile-open ul li a{padding:14px 16px;border-radius:var(--radius);font-size:15px;}
  .mega-menu{width:100%;left:0;transform:none;border-radius:0;position:static;display:none!important;}
  .has-mega:hover .mega-menu{display:none!important;}
  .footer-top{grid-template-columns:1fr;}
  .footer-links{grid-template-columns:repeat(2,1fr);}
}
@media(max-width:640px){
  .section-white,.section-gray{padding:72px 20px;}
  .section-title{font-size:28px;}
  .footer-links{grid-template-columns:1fr 1fr;}
}`;

// Inject everything
document.head.insertAdjacentHTML('afterbegin', `<style>${GLOBAL_CSS}</style>`);
document.getElementById('site-nav').innerHTML = NAV_HTML;
document.getElementById('site-footer').innerHTML = FOOTER_HTML;

// Header scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('site-header')?.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile nav toggle
document.getElementById('nav-toggle')?.addEventListener('click', function() {
  this.classList.toggle('open');
  document.getElementById('main-nav').classList.toggle('mobile-open');
});

// Active nav highlight
document.querySelectorAll('.main-nav a').forEach(a => {
  if (a.href === location.href) a.classList.add('active');
});

// Reveal animation
const revealCSS = `
.reveal{opacity:0;transform:translateY(24px);transition:opacity .55s ease,transform .55s ease;}
.reveal.visible{opacity:1;transform:none;}`;
const rs = document.createElement('style'); rs.textContent = revealCSS;
document.head.appendChild(rs);
const ro = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }}), {threshold:.1});
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
