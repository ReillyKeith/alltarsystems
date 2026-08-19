/**
 * CARNAGE — Landing Page Interactivity & Visual Effects
 * Alltar Systems (2026)
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. Interactive Garage Fleet Data & Tab Switcher
     ========================================================================== */
  const FLEET_DATA = {
    'beater': {
      tier: 'TIER 1 • ENTRY LEVEL',
      name: 'THE BEATER',
      perk: 'Paid Off — Junk under $1,000 pays double.',
      lore: 'A rusty four-door saloon with mismatched doors and zero trade-in value. Built to be written off.',
      speed: '45%',
      weight: '50%',
      handling: '60%',
      armor: '40%',
      price: 'FREE / STARTER',
      svg: 'assets/cars/beater.svg'
    },
    'fare-dodger': {
      tier: 'TIER 2 • COMMERCIAL',
      name: 'FARE DODGER',
      perk: 'Ex-Taxi — The meter bills the city as you drive.',
      lore: 'A retired yellow cab with a rigged fare meter that bills the city for every yard of tarmac.',
      speed: '65%',
      weight: '55%',
      handling: '70%',
      armor: '50%',
      price: '$5,000,000',
      svg: 'assets/cars/fare.svg'
    },
    'liability': {
      tier: 'TIER 2 • UNINSURABLE',
      name: 'THE LIABILITY',
      perk: 'No Brakes — Extreme top speed, but zero brakes or reverse gear.',
      lore: 'An 80s wedge muscle chassis. Fast, loud, completely lethal, and legally uninsurable in 48 states.',
      speed: '95%',
      weight: '60%',
      handling: '35%',
      armor: '45%',
      price: '$9,000,000',
      svg: 'assets/cars/liability.svg'
    },
    'ice-scream': {
      tier: 'TIER 3 • PUBLIC NUISANCE',
      name: 'ICE SCREAM VAN',
      perk: 'Mister Softee — Pedestrians walk directly toward your front bumper.',
      lore: 'Plays cheerful 8-bit chimes that lure pedestrians into traffic lanes. Tall slab body reads from blocks away.',
      speed: '50%',
      weight: '75%',
      handling: '45%',
      armor: '65%',
      price: '$16,000,000',
      svg: 'assets/cars/icecream.svg'
    },
    'overtaker': {
      tier: 'TIER 3 • HEAVYWEIGHT',
      name: 'THE OVERTAKER',
      perk: 'Final Journey — 3.2 tonnes of steel that refuses to lose momentum.',
      lore: 'A solid black vintage hearse. Roomy, inevitable, and plows through squad cars without slowing down.',
      speed: '60%',
      weight: '95%',
      handling: '40%',
      armor: '85%',
      price: '$30,000,000',
      svg: 'assets/cars/overtaker.svg'
    },
    'golden-parachute': {
      tier: 'TIER 5 • EXECUTIVE EXCESS',
      name: 'GOLDEN PARACHUTE',
      perk: 'Bailout — Executive escape vehicle built for ramp launches.',
      lore: 'A six-wheel executive stretch limousine with five side windows and high-altitude ramp launch aerodynamics.',
      speed: '85%',
      weight: '90%',
      handling: '55%',
      armor: '80%',
      price: '$54,000,000',
      svg: 'assets/cars/parachute.svg'
    },
    'litigator': {
      tier: 'TIER 5 • CORPORATE LEGAL',
      name: 'THE LITIGATOR',
      perk: 'Sue Whomever It Hits — Every vehicle you wreck pays +60% legal settlement.',
      lore: 'A massive executive barge and the widest body on the road. Square corners, slab flanks, and chrome grille.',
      speed: '80%',
      weight: '85%',
      handling: '65%',
      armor: '75%',
      price: '$97,000,000',
      svg: 'assets/cars/litigator.svg'
    },
    'chaser': {
      tier: 'TIER 5 • EMERGENCY SPEC',
      name: 'AMBULANCE CHASER',
      perk: 'Follow the Money — Multiplier combo chains take twice as long to die.',
      lore: 'A souped-up wagon with roof rails and a scavenged emergency light bar. Chases the biggest payouts.',
      speed: '90%',
      weight: '70%',
      handling: '80%',
      armor: '65%',
      price: '$180,000,000',
      svg: 'assets/cars/chaser.svg'
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
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  /* ==========================================================================
     3. Video Trailer Modal
     ========================================================================== */
  const trailerModal = document.getElementById('trailer-modal');
  const btnWatchTrailer = document.getElementById('btn-watch-trailer');
  const modalClose = document.getElementById('modal-close');
  const videoEl = document.getElementById('teaser-video');

  if (btnWatchTrailer && trailerModal) {
    btnWatchTrailer.addEventListener('click', () => {
      trailerModal.classList.add('open');
      if (videoEl) videoEl.play();
    });

    const closeModal = () => {
      trailerModal.classList.remove('open');
      if (videoEl) {
        videoEl.pause();
        videoEl.currentTime = 0;
      }
    };

    if (modalClose) modalClose.addEventListener('click', closeModal);
    trailerModal.addEventListener('click', (e) => {
      if (e.target === trailerModal) closeModal();
    });
  }

  /* ==========================================================================
     4. Ambient Canvas Particles (Isometric Money Pings & Debris Sparks)
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
    const NUM_PARTICLES = 30;
    const CASH_PINGS = ['+$100', '+$1,000', '+$25,000', '+$85,000', '+$2,500,000', '+$60,000'];

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 20;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = -0.5 - Math.random() * 1.2;
        this.isText = Math.random() > 0.65;
        this.text = CASH_PINGS[Math.floor(Math.random() * CASH_PINGS.length)];
        this.size = this.isText ? (11 + Math.random() * 4) : (1.5 + Math.random() * 2.5);
        this.alpha = 0.1 + Math.random() * 0.45;
        this.color = Math.random() > 0.5 ? '#ffb800' : '#ff3344';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.y < -30 || this.x < -30 || this.x > width + 30) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        if (this.isText) {
          ctx.font = `700 ${this.size}px "JetBrains Mono", monospace`;
          ctx.fillStyle = this.color;
          ctx.fillText(this.text, this.x, this.y);
        } else {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();
  }
});
