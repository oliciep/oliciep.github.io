const projectCards = document.querySelectorAll('.in-cont');

projectCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)'; // Enlarge the hovered card
    projectCards.forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.style.opacity = 0.7;
        otherCard.style.transform = 'scale(0.95)'; // Reset the scale of other cards
      }
    });
  });

  card.addEventListener('mouseout', () => {
    projectCards.forEach(otherCard => {
        otherCard.style.opacity = 1;
        otherCard.style.transform = 'scale(1)'; // Reset the scale of all cards
    });
  });
});





