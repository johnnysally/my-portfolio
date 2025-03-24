// DOM Elements
const themeToggle = document.querySelector(".theme-toggle")
const body = document.body
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")
const scrollTop = document.querySelector(".scroll-top")
const filterBtns = document.querySelectorAll(".filter-btn")
const projectCards = document.querySelectorAll(".project-card")
const contactForm = document.getElementById("contactForm")

// Check for saved theme preference or prefer-color-scheme
const savedTheme = localStorage.getItem("theme")
if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  body.classList.add("dark")
}

// Theme Toggle
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark")
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light")
})

// Mobile Menu Toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navLinks.classList.toggle("active")
})

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navLinks.classList.remove("active")
  })
})

// Scroll to Top Button
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTop.classList.add("active")
  } else {
    scrollTop.classList.remove("active")
  }
})

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Project Filtering
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"))
    // Add active class to clicked button
    btn.classList.add("active")

    const filter = btn.getAttribute("data-filter")

    projectCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  })
})

// Form Submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form values
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const subject = document.getElementById("subject").value
  const message = document.getElementById("message").value

  // Here you would typically send the form data to a server
  // For demonstration, we'll just log it and show an alert
  console.log({ name, email, subject, message })

  // Show success message
  alert("Thank you for your message! I will get back to you soon.")

  // Reset form
  contactForm.reset()
})

// Animate on scroll (simple implementation)
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".skill-card, .project-card, .timeline-item")

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top
    const screenPosition = window.innerHeight / 1.3

    if (elementPosition < screenPosition) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

// Set initial styles for animation
document.querySelectorAll(".skill-card, .project-card, .timeline-item").forEach((element) => {
  element.style.opacity = "0"
  element.style.transform = "translateY(20px)"
  element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
})

// Run animation on load and scroll
window.addEventListener("load", animateOnScroll)
window.addEventListener("scroll", animateOnScroll)

// Typing animation for hero section
const typingEffect = () => {
  const text = "Building the future, one line of code at a time."
  const typingElement = document.querySelector(".hero-content p")
  let i = 0

  typingElement.textContent = ""

  const typing = setInterval(() => {
    if (i < text.length) {
      typingElement.textContent += text.charAt(i)
      i++
    } else {
      clearInterval(typing)
    }
  }, 50)
}

// Run typing animation on page load
window.addEventListener("load", typingEffect)

