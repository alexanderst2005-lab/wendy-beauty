/**
 * WG COSMETÓLOGA ESTETICISTA - Lógica de Interacciones y Experiencia Web
 * Paleta Femenina: Crema #FFF9FA | Rosa #D94B83 | Rosa Suave #F8DDE8 | Dorado #C9A24A | Texto #2B2528
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  renderServices('all');
  initServiceFilters();
  renderGallery('all');
  initGalleryFilters();
  renderTestimonials();
  renderFaqs();
  initBeforeAfterSlider();
  initServiceModal();
  initLightbox();
  initFloatingWhatsApp();
  initContactLinks();
  checkUrlHashForService();
});

/* ==========================================================================
   1. Header & Mobile Navigation
   ========================================================================== */
function initHeader() {
  const header = document.getElementById('main-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Header blur on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('bg-[#FFF9FA]/95', 'backdrop-blur-md', 'border-b', 'border-[#F8DDE8]', 'shadow-sm');
      header.classList.remove('bg-transparent');
    } else {
      header.classList.remove('bg-[#FFF9FA]/95', 'backdrop-blur-md', 'border-b', 'border-[#F8DDE8]', 'shadow-sm');
      header.classList.add('bg-transparent');
    }
  });

  // Mobile Menu Toggle
  function openDrawer() {
    mobileDrawer.classList.remove('hidden');
    setTimeout(() => {
      mobileDrawer.querySelector('.drawer-content').classList.remove('translate-x-full');
    }, 10);
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    const drawerContent = mobileDrawer.querySelector('.drawer-content');
    if (drawerContent) {
      drawerContent.classList.add('translate-x-full');
      setTimeout(() => {
        mobileDrawer.classList.add('hidden');
        document.body.style.overflow = '';
      }, 300);
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
  if (closeMobileMenuBtn) closeMobileMenuBtn.addEventListener('click', closeDrawer);
  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) closeDrawer();
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   2. Renderizado y Filtros de Servicios
   ========================================================================== */
function renderServices(filter = 'all') {
  const container = document.getElementById('services-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? SANDOVAL_DATA.services 
    : SANDOVAL_DATA.services.filter(s => s.category === filter);

  container.innerHTML = filtered.map(service => `
    <div class="service-card group bg-white border border-[#F8DDE8] rounded-2xl sm:rounded-3xl overflow-hidden glass-panel-hover flex flex-col justify-between shadow-sm" data-id="${service.id}">
      <div>
        <!-- Imagen del Servicio -->
        <div class="service-img-container relative h-48 sm:h-64 w-full overflow-hidden">
          <img 
            src="${service.image}" 
            alt="${service.title}" 
            loading="lazy"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            onerror="this.src='https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop'"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#2B2528]/80 via-transparent to-transparent"></div>
          
          <!-- Badge -->
          <div class="absolute top-3 left-3 sm:top-4 sm:left-4">
            <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-[#FFFFFF]/90 backdrop-blur-md text-[#D94B83] border border-[#F8DDE8] shadow-sm">
              ${service.badge}
            </span>
          </div>

          <!-- Duración -->
          <div class="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
            <span class="inline-flex items-center gap-1 text-[10px] sm:text-xs text-[#FFFFFF] bg-[#2B2528]/80 px-2.5 py-1 rounded-md backdrop-blur-sm">
              <i class="far fa-clock text-[#C9A24A] text-[10px]"></i> ${service.duration}
            </span>
          </div>
        </div>

        <!-- Contenido de la Tarjeta -->
        <div class="p-5 sm:p-6">
          <div class="flex items-center gap-2 mb-1.5">
            <span class="text-[10px] sm:text-xs uppercase tracking-widest text-[#D94B83] font-bold">${service.subtitle}</span>
          </div>
          
          <h3 class="text-lg sm:text-2xl font-serif font-bold text-[#2B2528] mb-2 sm:mb-3 group-hover:text-[#D94B83] transition-colors leading-snug">
            ${service.title}
          </h3>
          
          <p class="text-[#6E6468] text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 sm:line-clamp-3">
            ${service.shortDesc}
          </p>

          <!-- Ventajas Rápidas -->
          <ul class="space-y-1.5 mb-5">
            ${service.highlights.slice(0, 2).map(h => `
              <li class="flex items-start gap-2 text-[11px] sm:text-xs text-[#2B2528]">
                <i class="fas fa-check-circle text-[#D94B83] mt-0.5 text-[10px] sm:text-xs shrink-0"></i>
                <span class="line-clamp-1">${h}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <!-- Acciones de la Tarjeta -->
      <div class="px-5 sm:px-6 pb-5 pt-0 mt-auto border-t border-[#F8DDE8]/60 flex items-center justify-between gap-2.5">
        <button 
          onclick="openServiceModal('${service.id}')"
          class="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#FFFFFF] bg-[#D94B83] hover:bg-[#C23B70] transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-sm"
        >
          <span>Ver Detalles</span>
          <i class="fas fa-arrow-right text-[10px]"></i>
        </button>
        
        <a 
          href="${getWhatsAppUrl(service.whatsappMsg)}"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2.5 sm:p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] transition-all flex items-center justify-center shrink-0"
          title="Agendar por WhatsApp"
        >
          <i class="fab fa-whatsapp text-base sm:text-lg"></i>
        </a>
      </div>
    </div>
  `).join('');
}

function initServiceFilters() {
  const filterBtns = document.querySelectorAll('.service-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-[#D94B83]', 'text-[#FFFFFF]', 'border-[#D94B83]', 'font-semibold', 'shadow-md');
        b.classList.add('bg-[#FFFFFF]', 'text-[#2B2528]', 'border-[#F8DDE8]');
      });

      btn.classList.remove('bg-[#FFFFFF]', 'text-[#2B2528]', 'border-[#F8DDE8]');
      btn.classList.add('bg-[#D94B83]', 'text-[#FFFFFF]', 'border-[#D94B83]', 'font-semibold', 'shadow-md');

      const filter = btn.getAttribute('data-filter');
      renderServices(filter);
    });
  });
}

/* ==========================================================================
   3. Modal Detallado de Servicio
   ========================================================================== */
function initServiceModal() {
  const modal = document.getElementById('service-modal');
  const closeBtn = document.getElementById('close-service-modal');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeServiceModal);
  }
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeServiceModal();
    });
  }

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeServiceModal();
      closeLightbox();
    }
  });
}

function openServiceModal(serviceId) {
  const service = SANDOVAL_DATA.services.find(s => s.id === serviceId);
  if (!service) return;

  const modal = document.getElementById('service-modal');
  const content = document.getElementById('service-modal-content');
  if (!modal || !content) return;

  const waUrl = getWhatsAppUrl(service.whatsappMsg);

  content.innerHTML = `
    <!-- Cabecera del Modal -->
    <div class="relative h-48 sm:h-72 w-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
      <img 
        src="${service.image}" 
        alt="${service.title}"
        class="w-full h-full object-cover"
        onerror="this.src='https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop'"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[#2B2528]/85 via-[#2B2528]/30 to-transparent"></div>
      
      <div class="absolute top-3 left-3 sm:top-4 sm:left-4">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-[#FFFFFF]/90 text-[#D94B83] border border-[#F8DDE8] shadow-md">
          ${service.badge}
        </span>
      </div>

      <div class="absolute bottom-3 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
        <span class="text-[10px] sm:text-xs uppercase tracking-widest text-[#F8DDE8] font-bold">${service.subtitle}</span>
        <h2 class="text-xl sm:text-3xl font-serif font-bold text-[#FFFFFF] mt-0.5 leading-snug">${service.title}</h2>
      </div>
    </div>

    <!-- Cuerpo del Modal -->
    <div class="p-5 sm:p-7 space-y-5 sm:space-y-6 max-h-[calc(85vh-180px)] overflow-y-auto custom-scroll bg-[#FFFFFF] text-[#2B2528]">
      
      <!-- Ficha de Datos Rápidos -->
      <div class="grid grid-cols-3 gap-2 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FFF9FA] border border-[#F8DDE8] text-center">
        <div class="p-1 border-r border-[#F8DDE8]">
          <span class="block text-[9px] sm:text-[11px] text-[#6E6468] uppercase tracking-wider mb-0.5"><i class="far fa-clock text-[#D94B83] mr-1"></i> Duración</span>
          <span class="text-xs sm:text-sm font-semibold text-[#2B2528]">${service.duration}</span>
        </div>
        <div class="p-1 border-r border-[#F8DDE8]">
          <span class="block text-[9px] sm:text-[11px] text-[#6E6468] uppercase tracking-wider mb-0.5"><i class="fas fa-shield-alt text-[#D94B83] mr-1"></i> Molestia</span>
          <span class="text-xs sm:text-sm font-semibold text-[#2B2528]">${service.painLevel}</span>
        </div>
        <div class="p-1">
          <span class="block text-[9px] sm:text-[11px] text-[#6E6468] uppercase tracking-wider mb-0.5"><i class="fas fa-magic text-[#D94B83] mr-1"></i> Retención</span>
          <span class="text-xs sm:text-sm font-semibold text-[#D94B83]">${service.retention}</span>
        </div>
      </div>

      <!-- Descripción Completa -->
      <div>
        <h4 class="text-[11px] sm:text-xs uppercase tracking-wider text-[#D94B83] font-bold mb-1.5">¿En qué consiste?</h4>
        <p class="text-[#2B2528] text-xs sm:text-sm leading-relaxed font-light">
          ${service.longDesc}
        </p>
      </div>

      <!-- Para quién es ideal -->
      <div class="p-4 rounded-xl bg-[#F8DDE8]/40 border-l-4 border-[#D94B83]">
        <h4 class="text-[10px] sm:text-xs uppercase tracking-wider text-[#D94B83] font-bold mb-1">Ideal para:</h4>
        <p class="text-[#2B2528] text-xs sm:text-sm leading-relaxed">${service.idealFor}</p>
      </div>

      <!-- Qué incluye / Beneficios -->
      <div>
        <h4 class="text-[11px] sm:text-xs uppercase tracking-wider text-[#D94B83] font-bold mb-3">Lo que incluye tu servicio:</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${service.highlights.map(item => `
            <div class="flex items-start gap-2 p-2.5 rounded-lg bg-[#FFF9FA] border border-[#F8DDE8] text-[11px] sm:text-xs text-[#2B2528]">
              <i class="fas fa-check text-[#D94B83] mt-0.5 text-[10px] shrink-0"></i>
              <span>${item}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Cuidados Previos y Posteriores -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        <div class="p-4 rounded-xl bg-[#FFF9FA] border border-[#F8DDE8]">
          <h4 class="text-[11px] sm:text-xs font-bold text-[#D94B83] uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fas fa-calendar-check text-[#C9A24A]"></i> Cuidados Previos
          </h4>
          <ul class="space-y-1 text-[11px] sm:text-xs text-[#6E6468]">
            ${service.preCare.map(p => `
              <li class="flex items-start gap-1.5">
                <span class="text-[#D94B83]">•</span>
                <span>${p}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-[#FFF9FA] border border-[#F8DDE8]">
          <h4 class="text-[11px] sm:text-xs font-bold text-[#D94B83] uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fas fa-heart text-[#C9A24A]"></i> Cuidados Posteriores
          </h4>
          <ul class="space-y-1 text-[11px] sm:text-xs text-[#6E6468]">
            ${service.postCare.map(p => `
              <li class="flex items-start gap-1.5">
                <span class="text-[#D94B83]">•</span>
                <span>${p}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <!-- Garantía de Higiene y Calidad -->
      <div class="flex items-center gap-3 p-3.5 rounded-xl bg-[#FDF2F6] border border-[#F8DDE8] text-[11px] sm:text-xs text-[#2B2528]">
        <i class="fas fa-certificate text-[#C9A24A] text-xl shrink-0"></i>
        <span>Atención 100% personalizada en cabina privada, con protocolos de bioseguridad e insumos garantizados.</span>
      </div>

    </div>

    <!-- Pie del Modal con CTAs de WhatsApp -->
    <div class="p-4 sm:p-6 border-t border-[#F8DDE8] bg-[#FFF9FA] rounded-b-2xl sm:rounded-b-3xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
      <div class="text-center sm:text-left hidden sm:block">
        <span class="text-[11px] text-[#6E6468] block">¿Lista para consentirte?</span>
        <span class="text-xs sm:text-sm font-semibold text-[#2B2528]">Reserva directamente en WhatsApp</span>
      </div>

      <div class="flex items-center gap-2.5 w-full sm:w-auto">
        <button 
          onclick="closeServiceModal()"
          class="py-2.5 sm:py-3 px-4 rounded-xl text-xs font-medium text-[#6E6468] hover:text-[#2B2528] bg-[#F8DDE8]/50 hover:bg-[#F8DDE8] transition-colors w-1/3 sm:w-auto"
        >
          Cerrar
        </button>
        <a 
          href="${waUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 sm:flex-initial py-3 px-6 rounded-xl btn-pink flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold"
        >
          <i class="fab fa-whatsapp text-base"></i>
          <span>AGENDAR CITA</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
  const modal = document.getElementById('service-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

function checkUrlHashForService() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#service-')) {
    const serviceId = hash.replace('#service-', '');
    setTimeout(() => {
      openServiceModal(serviceId);
    }, 500);
  }
}

/* ==========================================================================
   4. Galería y Lightbox
   ========================================================================== */
function renderGallery(filter = 'all') {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? SANDOVAL_DATA.gallery 
    : SANDOVAL_DATA.gallery.filter(g => g.category === filter);

  container.innerHTML = filtered.map(item => `
    <div class="gallery-item group relative h-52 sm:h-80 rounded-2xl overflow-hidden cursor-pointer border border-[#F8DDE8] shadow-sm" onclick="openLightbox('${item.image}', '${item.title}', '${item.tag}')">
      <img 
        src="${item.image}" 
        alt="${item.title}" 
        loading="lazy"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        onerror="this.src='https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop'"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[#2B2528]/90 via-[#2B2528]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5">
        <span class="text-[9px] sm:text-[11px] uppercase tracking-widest text-[#F8DDE8] font-bold mb-1">${item.tag}</span>
        <h4 class="text-xs sm:text-base font-serif font-bold text-[#FFFFFF] leading-snug line-clamp-2">${item.title}</h4>
        
        <div class="mt-2 flex items-center gap-1 text-[10px] sm:text-xs text-[#FFF2D6] font-medium opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity transform sm:translate-y-2 group-hover:translate-y-0 duration-300">
          <span>Ver foto</span>
          <i class="fas fa-expand-arrows-alt text-[9px]"></i>
        </div>
      </div>
    </div>
  `).join('');
}

function initGalleryFilters() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-[#D94B83]', 'text-[#FFFFFF]', 'border-[#D94B83]', 'font-semibold');
        b.classList.add('bg-[#FFFFFF]', 'text-[#2B2528]', 'border-[#F8DDE8]');
      });

      btn.classList.remove('bg-[#FFFFFF]', 'text-[#2B2528]', 'border-[#F8DDE8]');
      btn.classList.add('bg-[#D94B83]', 'text-[#FFFFFF]', 'border-[#D94B83]', 'font-semibold');

      const filter = btn.getAttribute('data-filter');
      renderGallery(filter);
    });
  });
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('close-lightbox');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
}

function openLightbox(imageUrl, title, tag) {
  const lightbox = document.getElementById('lightbox-modal');
  const imgEl = document.getElementById('lightbox-image');
  const titleEl = document.getElementById('lightbox-title');
  const tagEl = document.getElementById('lightbox-tag');

  if (!lightbox || !imgEl) return;

  imgEl.src = imageUrl;
  if (titleEl) titleEl.textContent = title;
  if (tagEl) tagEl.textContent = tag;

  lightbox.classList.remove('hidden');
  lightbox.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  if (lightbox) {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   5. Interactive Before & After Slider
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.getElementById('ba-slider');
  if (!container) return;

  const beforeLayer = container.querySelector('.ba-image-before');
  const handle = container.querySelector('.ba-handle');
  if (!beforeLayer || !handle) return;

  let isDragging = false;

  function setSliderPosition(x) {
    const rect = container.getBoundingClientRect();
    let posX = x - rect.left;
    if (posX < 0) posX = 0;
    if (posX > rect.width) posX = rect.width;

    const percentage = (posX / rect.width) * 100;
    beforeLayer.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    setSliderPosition(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    setSliderPosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches.length > 0) {
      setSliderPosition(e.touches[0].clientX);
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      setSliderPosition(e.touches[0].clientX);
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  beforeLayer.style.width = '50%';
  handle.style.left = '50%';
}

/* ==========================================================================
   6. Testimonios & FAQs
   ========================================================================== */
function renderTestimonials() {
  const container = document.getElementById('testimonials-track') || document.getElementById('testimonials-grid');
  if (!container) return;

  const items = [...SANDOVAL_DATA.testimonials, ...SANDOVAL_DATA.testimonials, ...SANDOVAL_DATA.testimonials];

  container.innerHTML = items.map(item => `
    <div class="w-72 sm:w-84 shrink-0 bg-[#FFFFFF] p-5 rounded-2xl border border-[#F8DDE8] shadow-sm flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-[#D94B83] hover:shadow-md">
      <div class="absolute top-2 right-3 opacity-15 text-4xl font-serif text-[#D94B83] select-none">“</div>
      
      <div>
        <!-- Estrellas Doradas -->
        <div class="flex items-center gap-1 text-[#C9A24A] text-xs mb-3">
          ${Array(item.rating).fill(0).map(() => `<i class="fas fa-star"></i>`).join('')}
        </div>

        <!-- Comentario -->
        <p class="text-[#2B2528] text-xs sm:text-sm leading-relaxed italic mb-4 line-clamp-4 font-light">
          "${item.comment}"
        </p>
      </div>

      <!-- Info Clienta -->
      <div class="flex items-center justify-between border-t border-[#F8DDE8] pt-3 mt-auto">
        <div>
          <h5 class="text-xs font-bold text-[#2B2528] leading-tight">${item.name}</h5>
          <span class="text-[10px] text-[#D94B83] font-semibold block leading-tight mt-0.5">${item.service}</span>
        </div>
        <span class="text-[9px] text-[#6E6468] font-light">${item.date}</span>
      </div>
    </div>
  `).join('');
}

function renderFaqs() {
  const container = document.getElementById('faqs-container');
  if (!container) return;

  container.innerHTML = SANDOVAL_DATA.faqs.map((faq, index) => `
    <div class="faq-item bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#F8DDE8] shadow-sm transition-all duration-300">
      <button 
        class="faq-question w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-[#2B2528] hover:text-[#D94B83] font-serif text-lg sm:text-xl font-semibold transition-colors"
        onclick="toggleFaq(${index})"
      >
        <span>${faq.question}</span>
        <div class="faq-icon w-8 h-8 rounded-full bg-[#F8DDE8]/60 border border-[#F8DDE8] flex items-center justify-center text-xs text-[#D94B83] shrink-0 transition-transform duration-300" id="faq-icon-${index}">
          <i class="fas fa-chevron-down"></i>
        </div>
      </button>
      <div class="faq-answer hidden px-5 sm:px-6 pb-6 text-[#6E6468] text-xs sm:text-sm leading-relaxed border-t border-[#F8DDE8]/50 pt-3" id="faq-answer-${index}">
        ${faq.answer}
      </div>
    </div>
  `).join('');
}

function toggleFaq(index) {
  const answer = document.getElementById(`faq-answer-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  if (!answer || !icon) return;

  const isHidden = answer.classList.contains('hidden');

  document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
  document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

  if (isHidden) {
    answer.classList.remove('hidden');
    icon.classList.add('rotate-180');
  }
}

/* ==========================================================================
   7. Botón Flotante y Enlaces de Contacto
   ========================================================================== */
function getWhatsAppUrl(message = '') {
  const phone = SANDOVAL_DATA.brand.whatsappNumber;
  const defaultMsg = message || `Hola ${SANDOVAL_DATA.brand.name} ✨ Deseo agendar una cita y conocer más sobre sus servicios.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(defaultMsg)}`;
}

function initFloatingWhatsApp() {
  const waBtn = document.getElementById('floating-wa-btn');
  if (!waBtn) return;

  waBtn.href = getWhatsAppUrl();

  const tooltip = document.getElementById('floating-wa-tooltip');
  if (tooltip) {
    setTimeout(() => {
      tooltip.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
    }, 4000);
  }
}

function initContactLinks() {
  const brand = SANDOVAL_DATA.brand;
  
  document.querySelectorAll('.js-whatsapp-link').forEach(el => {
    el.href = getWhatsAppUrl();
  });

  document.querySelectorAll('.js-instagram-link').forEach(el => {
    el.href = brand.instagramUrl;
  });

  document.querySelectorAll('.js-tiktok-link').forEach(el => {
    el.href = brand.tiktokUrl;
  });

  const waDisplay = document.getElementById('contact-phone-display');
  if (waDisplay) waDisplay.textContent = brand.whatsappDisplay;

  const addressDisplay = document.getElementById('contact-address-display');
  if (addressDisplay) addressDisplay.textContent = brand.address;

  const hoursDisplay = document.getElementById('contact-hours-display');
  if (hoursDisplay) hoursDisplay.textContent = brand.hours;
}
