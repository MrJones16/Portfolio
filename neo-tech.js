// Add custom cursor
document.addEventListener('DOMContentLoaded', function() {
  // Create cursor elements
  const cursorDot = document.createElement('div');
  cursorDot.classList.add('cursor-dot');
  document.body.appendChild(cursorDot);
  
  const cursorOutline = document.createElement('div');
  cursorOutline.classList.add('cursor-outline');
  document.body.appendChild(cursorOutline);
  
  // Update cursor position
  document.addEventListener('mousemove', function(e) {
    // Center the dot by offsetting by radius (width/2)
    cursorDot.style.top = (e.clientY - 2.5) + 'px';
    cursorDot.style.left = (e.clientX - 2.5) + 'px';
    
    // Add a slight delay to the outline for a smoother effect
    setTimeout(() => {
      // Center the outline by offsetting by radius (width/2)
      cursorOutline.style.top = (e.clientY - 15) + 'px';
      cursorOutline.style.left = (e.clientX - 15) + 'px';
    }, 50);
  });
  
  // Hover effect for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .card, .nav-link');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorOutline.style.transform = 'scale(1.5)';
      cursorOutline.style.border = '2px solid var(--accent-pink)';
      cursorDot.style.backgroundColor = 'var(--accent-pink)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursorOutline.style.transform = '';
      cursorOutline.style.border = '2px solid var(--neon-green)';
      cursorDot.style.backgroundColor = 'var(--neon-green)';
    });
  });
  
  // Random tech-like animations for background
  createTechParticles();
  
  // Enhance digital circuit dividers
  enhanceDigitalCircuits();
  
  // Add circuit animations to neo-brutalist cards
  animateCircuitOverlays();
});

// Create floating tech particles
function createTechParticles() {
  const particleContainer = document.createElement('div');
  particleContainer.style.position = 'fixed';
  particleContainer.style.top = '0';
  particleContainer.style.left = '0';
  particleContainer.style.width = '100%';
  particleContainer.style.height = '100%';
  particleContainer.style.pointerEvents = 'none';
  particleContainer.style.zIndex = '-1';
  document.body.appendChild(particleContainer);
  
  // Symbols to use for particles
  const symbols = ['0', '1', '+', '-', '>', '<', '/', '*', '{', '}', '[', ']', '|', '&'];
  
  // Create particles
  for (let i = 0; i < 40; i++) {
    createParticle(particleContainer, symbols);
  }
}

function createParticle(container, symbols) {
  const particle = document.createElement('div');
  
  // Random properties
  const size = Math.random() * 10 + 8; // 8-18px
  const symbol = symbols[Math.floor(Math.random() * symbols.length)];
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const duration = Math.random() * 60 + 30; // 30-90s
  const delay = Math.random() * 10; // 0-10s
  
  // Styling
  particle.style.position = 'absolute';
  particle.style.top = y + 'px';
  particle.style.left = x + 'px';
  particle.style.fontSize = size + 'px';
  particle.style.color = 'rgba(47, 227, 98, 0.19)';
  particle.style.fontFamily = 'JetBrains Mono, monospace';
  particle.textContent = symbol;
  
  // Animation
  particle.style.animation = `float ${duration}s linear ${delay}s infinite`;
  
  // Add the animation if it doesn't exist
  if (!document.querySelector('#particle-animation')) {
    const style = document.createElement('style');
    style.id = 'particle-animation';
    style.textContent = `
      @keyframes float {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 0.07;
        }
        25% {
          opacity: 0.1;
        }
        50% {
          transform: translateY(-${window.innerHeight * 0.7}px) rotate(180deg);
          opacity: 0.03;
        }
        100% {
          transform: translateY(-${window.innerHeight * 1.4}px) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  container.appendChild(particle);
  
  // Remove and recreate particle after animation
  setTimeout(() => {
    particle.remove();
    createParticle(container, symbols);
  }, (duration + delay) * 1000);
}

// Enhance digital circuit dividers with animations
function enhanceDigitalCircuits() {
  const digitalCircuits = document.querySelectorAll('.digital-circuit');
  
  digitalCircuits.forEach(circuit => {
    // Clear existing nodes
    while (circuit.querySelector('.digital-node')) {
      circuit.querySelector('.digital-node').remove();
    }
    
    // Create a random number of nodes (5-10)
    const nodeCount = Math.floor(Math.random() * 6) + 5;
    
    // Create horizontal line with random breaks
    const horizontalLine = document.createElement('div');
    horizontalLine.style.position = 'absolute';
    horizontalLine.style.height = '2px';
    horizontalLine.style.backgroundColor = 'var(--neon-green)';
    horizontalLine.style.top = '50%';
    horizontalLine.style.left = '5%';
    horizontalLine.style.width = '90%';
    circuit.appendChild(horizontalLine);
    
    // Create nodes along the horizontal line
    for (let i = 0; i < nodeCount; i++) {
      const node = document.createElement('div');
      node.classList.add('digital-node');
      node.style.position = 'absolute';
      node.style.width = '8px';
      node.style.height = '8px';
      node.style.backgroundColor = 'var(--neon-green)';
      node.style.borderRadius = '50%';
      node.style.top = '50%';
      node.style.left = `${5 + (90 / (nodeCount - 1)) * i}%`;
      node.style.transform = 'translate(-50%, -50%)';
      node.style.boxShadow = '0 0 5px var(--neon-green)';
      
      // Add a small vertical line at random nodes
      if (Math.random() > 0.6) {
        const verticalLine = document.createElement('div');
        verticalLine.style.position = 'absolute';
        verticalLine.style.width = '2px';
        verticalLine.style.backgroundColor = 'var(--neon-green)';
        verticalLine.style.left = '50%';
        verticalLine.style.transform = 'translateX(-50%)';
        
        // Decide if line goes up or down
        if (Math.random() > 0.5) {
          verticalLine.style.top = '0';
          verticalLine.style.height = '50%';
        } else {
          verticalLine.style.bottom = '0';
          verticalLine.style.height = '50%';
        }
        
        node.appendChild(verticalLine);
      }
      
      circuit.appendChild(node);
      
      // Add pulse animation
      setTimeout(() => {
        node.style.transition = 'box-shadow 0.5s ease-in-out';
        setInterval(() => {
          node.style.boxShadow = '0 0 10px var(--neon-green)';
          setTimeout(() => {
            node.style.boxShadow = '0 0 5px var(--neon-green)';
          }, 500);
        }, 2000 + Math.random() * 3000);
      }, i * 300);
    }
  });
}

// Add parallax effect to sections
document.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  
  // Apply subtle scaling effect to specific sections
  document.querySelectorAll('.container').forEach((section, index) => {
    // Get the section's position relative to the viewport
    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // Check if section is visible in viewport
    if (rect.top < viewportHeight && rect.bottom > 0) {
      // Calculate how far through the viewport the section is (0 to 1)
      const viewportFactor = 1 - (rect.top / viewportHeight);
      
      // Subtle scale effect based on scroll position
      // Scale between 0.98 and 1.02 for a subtle effect
      const scale = 0.98 + (Math.min(viewportFactor, 1) * 0.04);
      
      section.style.transform = `scale(${scale})`;
      section.style.transition = 'transform 0.2s ease-out';
    }
  });
});

// Animate circuit overlays in neo-brutalist cards
function animateCircuitOverlays() {
  const circuitOverlays = document.querySelectorAll('.circuit-overlay');
  
  circuitOverlays.forEach(overlay => {
    // Create pulse effect for circuit lines
    setInterval(() => {
      overlay.style.opacity = '0.8';
      setTimeout(() => {
        overlay.style.opacity = '0.5';
      }, 500);
    }, 3000 + Math.random() * 2000); // Random timing for more tech-like feel
    
    // Create random data-node effects
    createRandomDataNodes(overlay.parentElement);
  });
}

// Create random data nodes (small dots that appear and disappear)
function createRandomDataNodes(container) {
  const nodeCount = Math.floor(Math.random() * 3) + 2; // 2-4 nodes
  
  for (let i = 0; i < nodeCount; i++) {
    const node = document.createElement('div');
    node.classList.add('data-node');
    
    // Random position within the container
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    
    // Style
    node.style.position = 'absolute';
    node.style.top = `${top}%`;
    node.style.left = `${left}%`;
    node.style.width = '4px';
    node.style.height = '4px';
    node.style.backgroundColor = 'var(--neon-green)';
    node.style.borderRadius = '50%';
    node.style.opacity = '0';
    node.style.zIndex = '1';
    node.style.boxShadow = '0 0 4px var(--neon-green)';
    node.style.transition = 'opacity 0.3s ease';
    
    container.appendChild(node);
    
    // Animate the node
    setInterval(() => {
      node.style.opacity = '1';
      setTimeout(() => {
        node.style.opacity = '0';
      }, 500);
    }, 4000 + Math.random() * 5000); // Random timing
  }
} 