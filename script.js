/**
 * CARNAGE — Landing Page Interactivity & Visual Effects
 * Alltar Systems (2026)
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. Interactive Garage Fleet Data & Tab Switcher (Direct from carnage/src/roster.js)
     ========================================================================== */
  const FLEET_DATA = {
    'beater': {
      tier: 'TIER 1 • THE STARTER',
      name: 'THE BEATER',
      perk: 'Paid Off. Nothing to lose.',
      lore: 'A rusty four-door sedan with mismatched doors and zero trade-in value. Built to be written off.',
      speed: '45%',
      weight: '50%',
      handling: '60%',
      armor: '40%',
      price: 'FREE / STARTER',
      svg: 'assets/cars/roster_beater.svg'
    },
    'fare-dodger': {
      tier: 'TIER 2 • COMMERCIAL',
      name: 'FARE DODGER',
      perk: 'Ex-Taxi. The meter still runs.',
      lore: 'A retired yellow cab with a rigged fare meter that bills the city for every yard of tarmac.',
      speed: '65%',
      weight: '55%',
      handling: '70%',
      armor: '50%',
      price: '$5,000,000',
      svg: 'assets/cars/roster_fare.svg'
    },
    'liability': {
      tier: 'TIER 2 • UNINSURABLE',
      name: 'THE LIABILITY',
      perk: 'Brakes sold separately.',
      lore: 'An 80s wedge muscle chassis. Fast, loud, completely lethal, and legally uninsurable in 48 states.',
      speed: '95%',
      weight: '50%',
      handling: '35%',
      armor: '45%',
      price: '$9,000,000',
      svg: 'assets/cars/roster_liability.svg'
    },
    'ice-scream': {
      tier: 'TIER 3 • PUBLIC NUISANCE',
      name: 'ICE SCREAM VAN',
      perk: 'The jingle draws a crowd.',
      lore: 'Plays cheerful 8-bit chimes that lure pedestrians into traffic lanes. Tall slab body reads from blocks away.',
      speed: '52%',
      weight: '75%',
      handling: '40%',
      armor: '65%',
      price: '$16,000,000',
      svg: 'assets/cars/roster_icecream.svg'
    },
    'overtaker': {
      tier: 'TIER 3 • HEAVYWEIGHT',
      name: 'THE OVERTAKER',
      perk: 'A hearse. Roomy. Inevitable.',
      lore: '3.0 tonnes of solid black steel that plows through police roadblocks without losing speed.',
      speed: '60%',
      weight: '90%',
      handling: '40%',
      armor: '85%',
      price: '$30,000,000',
      svg: 'assets/cars/roster_overtaker.svg'
    },
    'golden-parachute': {
      tier: 'TIER 5 • EXECUTIVE EXCESS',
      name: 'GOLDEN PARACHUTE',
      perk: 'Executive escape vehicle.',
      lore: 'A six-wheel executive stretch limousine with five side windows and high-altitude ramp launch aerodynamics.',
      speed: '85%',
      weight: '85%',
      handling: '55%',
      armor: '80%',
      price: '$54,000,000',
      svg: 'assets/cars/roster_parachute.svg'
    },
    'litigator': {
      tier: 'TIER 5 • CORPORATE LEGAL',
      name: 'THE LITIGATOR',
      perk: 'Every vehicle destroyed pays +60% settlement.',
      lore: 'A massive executive barge and the widest body on the road. Square corners, slab flanks, and chrome grille.',
      speed: '80%',
      weight: '85%',
      handling: '65%',
      armor: '75%',
      price: '$97,000,000',
      svg: 'assets/cars/roster_litigator.svg'
    },
    'chaser': {
      tier: 'TIER 5 • EMERGENCY SPEC',
      name: 'AMBULANCE CHASER',
      perk: 'Multiplier combo chains take twice as long to die.',
      lore: 'A souped-up wagon with roof rails and a scavenged emergency light bar. Chases the biggest payouts.',
      speed: '90%',
      weight: '70%',
      handling: '80%',
      armor: '65%',
      price: '$180,000,000',
      svg: 'assets/cars/roster_chaser.svg'
    }
  };

  const carTabs = document.querySelectorAll('.car-tab');
  const carTier = document.getElementById('car-tier');
  const carName = document.getElementById('car-name');
  const carPerk = document.getElementById('car-perk');
  const carLore = document.getElementById('car-lore');
  const statSpeed = document.getElementById('stat-speed');
  const statWeight = document.getElementById('stat-weight');
  const statHandling = document.getElementById('stat-handling');
  const statArmor = document.getElementById('stat-armor');
  const carPrice = document.getElementById('car-price');
  const carSpriteImg = document.getElementById('car-sprite-img');

  carTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      carTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const carKey = tab.getAttribute('data-car');
      const data = FLEET_DATA[carKey];
      if (!data) return;

      carTier.textContent = data.tier;
      carName.textContent = data.name;
      carPerk.innerHTML = `<strong>Perk:</strong> <em>${data.perk}</em>`;
      carLore.textContent = data.lore;
      statSpeed.style.width = data.speed;
      statWeight.style.width = data.weight;
      statHandling.style.width = data.handling;
      statArmor.style.width = data.armor;
      carPrice.textContent = data.price;
      if (carSpriteImg) {
        carSpriteImg.src = data.svg;
        carSpriteImg.alt = data.name;
      }
    });
  });

  /* ==========================================================================
     2. FAQ Accordion
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;
    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });

  /* ==========================================================================
     3. Ambient Ember Particle Background Canvas
     ========================================================================== */
  const canvas = document.getElementById('ambient-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(width > 768 ? 40 : 20, 50);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        speedY: -(Math.random() * 0.8 + 0.2),
        speedX: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.6 + 0.2,
        color: Math.random() > 0.5 ? '255, 184, 0' : '255, 42, 58'
      });
    }

    function renderParticles() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${p.color}, 0.8)`;
        ctx.fill();
      });

      requestAnimationFrame(renderParticles);
    }

    renderParticles();
  }
});
