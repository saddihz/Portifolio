// Scroll suave para todos os links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Animação flutuante nos cards ao passar o mouse
document.querySelectorAll('.project-card, .feedback-card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'translateY(-8px) scale(1.02)';
  });
  card.addEventListener('mouseout', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// Animação de digitação no título (efeito máquina de escrever)
const title = document.querySelector('header h1');
const fullText = title.textContent;
let currentIndex = 0;

function typeEffect() {
  if (currentIndex < fullText.length) {
    title.textContent = fullText.slice(0, currentIndex + 1);
    currentIndex++;
    setTimeout(typeEffect, 80);
  }
}

title.textContent = '';
typeEffect();
