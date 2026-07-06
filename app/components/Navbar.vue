<script setup lang="ts">
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const activeSection = ref('home')

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
]

function closeMenu() {
  isMenuOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 12

  // Determine active section based on scroll position
  for (const link of navLinks) {
    const el = document.getElementById(link.id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 120 && rect.bottom >= 120) {
        activeSection.value = link.id
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="container navbar__inner">
      <a href="#home" class="navbar__logo" @click="closeMenu">
        <span class="navbar__logo-bracket">&lt;</span>PM<span class="navbar__logo-bracket">/&gt;</span>
      </a>

      <nav class="navbar__links" aria-label="Primary">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="navbar__link"
          :class="{ 'navbar__link--active': activeSection === link.id }"
        >
          {{ link.label }}
        </a>
      </nav>

      <button
        class="navbar__toggle"
        :class="{ 'navbar__toggle--open': isMenuOpen }"
        aria-label="Toggle navigation menu"
        :aria-expanded="isMenuOpen"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span />
        <span />
        <span />
      </button>
    </div>

    <transition name="mobile-menu">
      <nav v-if="isMenuOpen" class="navbar__mobile" aria-label="Mobile">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="navbar__mobile-link"
          :class="{ 'navbar__link--active': activeSection === link.id }"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(248, 250, 252, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
}

.navbar--scrolled {
  box-shadow: var(--shadow-sm);
  border-bottom-color: var(--color-border);
  background: rgba(248, 250, 252, 0.95);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.navbar__logo {
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 1.15rem;
  color: var(--color-secondary);
  letter-spacing: 0.02em;
}

.navbar__logo-bracket {
  color: var(--color-primary);
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar__link {
  position: relative;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-muted);
  padding: 0.35rem 0.1rem;
  transition: color 0.25s ease;
}

.navbar__link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  border-radius: 2px;
  transition: width 0.25s ease;
}

.navbar__link:hover {
  color: var(--color-secondary);
}

.navbar__link--active {
  color: var(--color-primary);
}

.navbar__link--active::after {
  width: 100%;
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.navbar__toggle span {
  display: block;
  height: 2px;
  width: 100%;
  background: var(--color-secondary);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.navbar__toggle--open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.navbar__toggle--open span:nth-child(2) {
  opacity: 0;
}

.navbar__toggle--open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.navbar__mobile {
  display: none;
  flex-direction: column;
  padding: 0.5rem 1.5rem 1.5rem;
  background: var(--color-card);
  border-bottom: 1px solid var(--color-border);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.navbar__mobile-link {
  padding: 0.85rem 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-muted);
  border-bottom: 1px solid var(--color-border);
}

.navbar__mobile-link:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .navbar__links {
    display: none;
  }

  .navbar__toggle {
    display: flex;
  }

  .navbar__mobile {
    display: flex;
  }
}
</style>
