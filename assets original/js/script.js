const header = document.querySelector('.header');
window.addEventListener('scroll', () => header?.classList.toggle('scrolled', window.scrollY > 20));

const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const tilt = document.querySelector('.tilt-card');
if (tilt && matchMedia('(pointer:fine)').matches) {
  tilt.parentElement.addEventListener('mousemove', e => {
    const r = tilt.parentElement.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    tilt.style.transform = `rotateY(${x * 9 - 5}deg) rotateX(${-y * 7 + 2}deg) translateY(-3px)`;
  });
  tilt.parentElement.addEventListener('mouseleave', () => {
    tilt.style.transform = 'rotateY(-7deg) rotateX(3deg)';
  });
}

const galleryImage = document.querySelector('#gallery-image');
document.querySelectorAll('.gallery-tab').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.gallery-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  galleryImage.style.opacity = '0';
  setTimeout(() => {
    galleryImage.src = btn.dataset.image;
    galleryImage.style.opacity = '1';
  }, 180);
}));

const form = document.querySelector('#contact-form');
const msg = document.querySelector('#form-message');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  const texto = [
    'Olá, vim pelo site da IA-XTECH.',
    '',
    `*Nome:* ${data.nome || ''}`,
    `*Telefone:* ${data.telefone || ''}`,
    `*Empresa:* ${data.empresa || ''}`,
    `*Segmento:* ${data.segmento || ''}`,
    `*Mensagem:* ${data.mensagem || ''}`
  ].join('\n');
  const url = `https://wa.me/5534996790001?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank', 'noopener');
  msg.textContent = 'Abrimos o WhatsApp para concluir sua solicitação.';
});

document.querySelector('#year').textContent = new Date().getFullYear();
