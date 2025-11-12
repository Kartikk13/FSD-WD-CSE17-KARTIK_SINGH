const projectItems = document.querySelectorAll('.project-item');
const descriptionBox = document.getElementById('description-box');
projectItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const text = item.getAttribute('data-description');
    descriptionBox.textContent = text;

    // Allow box to resize naturally first
    setTimeout(() => {
      const boxRect = descriptionBox.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // If box goes off-screen bottom, lift it up just enough
      if (boxRect.bottom > windowHeight - 30) {
        const liftAmount = boxRect.bottom - windowHeight + 50;
        descriptionBox.style.transform = `translateY(-${liftAmount}px)`;
      } else {
        descriptionBox.style.transform = 'translateY(0)';
      }
    }, 50); // Small delay ensures browser recalculates new height
  });
  item.addEventListener('mouseleave', () => {
    descriptionBox.textContent = 'Hover over a project name to see details here.';
    descriptionBox.style.transform = 'translateY(0)';
  });
});
const projectItemsList = document.querySelectorAll(".project-item");

window.addEventListener("scroll", () => {
  projectItemsList.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add("visible");
    }
  });
});
const skillCategories = document.querySelectorAll('.skill-category');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.2
});
skillCategories.forEach(category => {
  category.style.opacity = '0';
  category.style.transform = 'translateY(40px)';
  category.style.transition = 'all 0.6s ease';
  observer.observe(category);
});
const fadeElements = document.querySelectorAll('.project-item, .left');
const appearOnScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeUp 0.8s ease forwards';
      appearOnScroll.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});
fadeElements.forEach(el => appearOnScroll.observe(el));
function scrambleEffect(element, text, speed = 50, randomCycles = 1, onComplete = null) {
  const chars = "ABCDgopqrstuvwxyz0789";
  const words = text.split(" ");
  element.textContent = "";
  let currentWordIndex = 0;
  function animateWord() {
    if (currentWordIndex >= words.length) {
      if (onComplete) onComplete();
      return;
    }
    const word = words[currentWordIndex];
    let frame = 0;
    const totalFrames = word.length * randomCycles;
    let revealed = "";
    const interval = setInterval(() => {
      const progress = Math.min(1, frame / totalFrames);
      const revealedCount = Math.floor(progress * word.length);
      revealed = word
        .split("")
        .map((letter, i) => {
          if (i < revealedCount) return word[i];
          return Math.random() < 0.4 ?
            chars[Math.floor(Math.random() * chars.length)] :
            letter;
        })
        .join("");
      const displayText =
        words
        .slice(0, currentWordIndex)
        .join(" ") +
        (currentWordIndex > 0 ? " " : "") +
        revealed;
      element.textContent = displayText;
      frame++;
      if (frame >= totalFrames) {
        clearInterval(interval);
        element.textContent =
          words.slice(0, currentWordIndex + 1).join(" ");
        currentWordIndex++;
        setTimeout(animateWord, 100);
      }
    }, speed);
  }
  animateWord();
}
window.addEventListener("load", () => {
  const nameEl = document.getElementById("name1");
  const helloEl = document.getElementById("txt1");
  const aboutEl = document.getElementById("txt2");
  const imgWrapper = document.querySelector(".img-wrapper");
  nameEl.textContent = "";
  helloEl.textContent = "";
  aboutEl.style.opacity = "0";
  aboutEl.style.transform = "translateY(20px)";
  aboutEl.style.transition = "opacity 1.2s ease, transform 1.2s ease";
  imgWrapper.style.opacity = "0";
  imgWrapper.style.transform = "translateY(50px)";
  imgWrapper.style.transition = "opacity 1.4s ease, transform 1.4s ease";
  scrambleEffect(nameEl, "KARTIK SINGH", 25, 4, () => {
    scrambleEffect(helloEl, "HELLO!", 25, 4, () => {
      setTimeout(() => {
        aboutEl.style.opacity = "1";
        aboutEl.style.transform = "translateY(0)";
      }, 300);
      setTimeout(() => {
        imgWrapper.classList.add("glow-in");
        imgWrapper.style.opacity = "1";
        imgWrapper.style.transform = "translateY(0) rotate(3deg)";
      }, 500);
    });
  });
});