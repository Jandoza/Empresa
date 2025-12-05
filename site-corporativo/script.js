document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('is-open');
    });

    navLinks.addEventListener('click', (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        navLinks.classList.remove('is-open');
      }
    });
  }

  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const nomeInput = document.getElementById('nome');
      const emailInput = document.getElementById('email');
      const tipoSelect = document.getElementById('tipo');
      const mensagemTextarea = document.getElementById('mensagem');

      const nome =
        nomeInput && 'value' in nomeInput ? nomeInput.value.trim() : '';
      const email =
        emailInput && 'value' in emailInput ? emailInput.value.trim() : '';
      const tipo =
        tipoSelect && 'value' in tipoSelect ? tipoSelect.value : 'Não informado';
      const mensagem =
        mensagemTextarea && 'value' in mensagemTextarea
          ? mensagemTextarea.value.trim()
          : '';

      const texto = [
        'Olá Luiz, vim pelo seu site e gostaria de falar sobre um projeto.',
        '',
        `Nome: ${nome || 'não informado'}`,
        `E-mail: ${email || 'não informado'}`,
        `Tipo de projeto: ${tipo}`,
        `Mensagem: ${mensagem || '—'}`
      ].join('\n');

      const whatsappUrl =
        'https://wa.me/5515991236697?text=' + encodeURIComponent(texto);

      window.open(whatsappUrl, '_blank');
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if (revealItems.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    revealItems.forEach((el) => observer.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add('in-view'));
  }
});


