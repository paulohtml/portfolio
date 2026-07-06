<script setup lang="ts">
const year = new Date().getFullYear()

const quickLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
]
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <span class="footer__logo">&lt;PM/&gt;</span>
        <h3 class="footer__name">Paul Angelo Magbanua</h3>
        <p class="footer__role">Aspiring Software Developer</p>
      </div>

      <div class="footer__col">
        <h4 class="footer__heading">Contact</h4>
        <a href="tel:+639128460552" class="footer__link">0912 846 0552</a>
        <a href="mailto:paulangelomagbanua1@gmail.com" class="footer__link">paulangelomagbanua1@gmail.com</a>
      </div>

      <div class="footer__col">
        <h4 class="footer__heading">Quick Links</h4>
        <a v-for="link in quickLinks" :key="link.id" :href="`#${link.id}`" class="footer__link">
          {{ link.label }}
        </a>
      </div>
    </div>

    <div class="footer__bottom">
      <p>&copy; {{ year }} Paulo Anghelo Magbanua. All rights reserved.</p>
      <p class="footer__built">Designed &amp; developed using Nuxt 3</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--gradient-secondary);
  color: #cbd5e1;
  padding-top: 4rem;
}

.footer__inner {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 2.5rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.footer__logo {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-accent);
  display: inline-block;
  margin-bottom: 0.75rem;
}

.footer__name {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
}

.footer__role {
  color: #94a3b8;
  font-size: 0.92rem;
}

.footer__heading {
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.footer__link {
  color: #94a3b8;
  font-size: 0.92rem;
  transition: color 0.25s ease;
  width: fit-content;
}

.footer__link:hover {
  color: var(--color-accent);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1.5rem 1.5rem;
  max-width: var(--max-width);
  margin: 0 auto;
  font-size: 0.85rem;
  color: #64748b;
}

@media (max-width: 700px) {
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer__bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
