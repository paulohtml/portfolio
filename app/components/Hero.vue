<script setup lang="ts">
const roles = ['Aspiring Software Developer', 'Web Development Enthusiast', 'Future Full-Stack Developer']
const roleIndex = ref(0)

let interval: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  interval = setInterval(() => {
    roleIndex.value = (roleIndex.value + 1) % roles.length
  }, 3200)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <section id="home" class="hero">
    <div class="container hero__inner">
      <div class="hero__content">
        <p class="hero__greeting">
          <span class="hero__prompt">&gt;</span> Hello, I'm
        </p>
        <h1 class="hero__name">Paul Angelo Magbanua</h1>

        <div class="hero__role-wrap">
          <transition name="role-fade" mode="out-in">
            <p :key="roleIndex" class="hero__role">{{ roles[roleIndex] }}</p>
          </transition>
        </div>

        <p class="hero__degree">Bachelor of Science in Information Technology Student</p>

        <p class="hero__intro">
          Passionate about software development, problem solving, and building modern web
          applications using clean, maintainable, and efficient code. Continuously learning new
          technologies while developing practical software solutions.
        </p>

        <div class="hero__actions">
          <a href="#projects" class="btn btn-primary">View Projects</a>
          <a href="#contact" class="btn btn-outline">Contact Me</a>
          <a href="/resume.pdf" class="btn btn-ghost" download>Download Resume ↓</a>
        </div>
      </div>

      <div class="hero__visual">
        <div class="hero__blob" aria-hidden="true" />

        <div class="hero__photo-frame">
          <div class="hero__frame-bar">
            <span class="hero__dot hero__dot--red" />
            <span class="hero__dot hero__dot--yellow" />
            <span class="hero__dot hero__dot--green" />
            <span class="hero__frame-label">paulo.dev</span>
          </div>
          <img
            src="/profile.jpg"
            alt="Portrait of Paulo Anghelo Magbanua"
            class="hero__photo"
          />
        </div>

        <div class="hero__badge hero__badge--top">
          <span class="hero__badge-tag">&lt;/&gt;</span>
        </div>
        <div class="hero__badge hero__badge--bottom">
          <span class="hero__status-dot" /> Available for internships
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding: 5rem 0 6rem;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 85% 15%, rgba(56, 189, 248, 0.12), transparent 45%),
    radial-gradient(circle at 10% 80%, rgba(37, 99, 235, 0.08), transparent 45%);
  z-index: -1;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 3rem;
}

.hero__greeting {
  font-family: var(--font-mono);
  color: var(--color-primary);
  font-size: 1.05rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.hero__prompt {
  color: var(--color-accent);
  animation: blink 1.1s step-end infinite;
}

.hero__name {
  font-size: clamp(2.25rem, 4.5vw, 3.4rem);
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 0.9rem;
  letter-spacing: -0.01em;
}

.hero__role-wrap {
  height: 2rem;
  margin-bottom: 0.6rem;
}

.hero__role {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-secondary);
}

.role-fade-enter-active,
.role-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.role-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.role-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.hero__degree {
  font-size: 1rem;
  color: var(--color-text-soft);
  margin-bottom: 1.5rem;
}

.hero__intro {
  font-size: 1.05rem;
  max-width: 540px;
  margin-bottom: 2.25rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

/* Visual side */
.hero__visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 380px;
}

.hero__blob {
  position: absolute;
  width: 340px;
  height: 340px;
  border-radius: 50%;
  background: var(--gradient-primary);
  opacity: 0.18;
  filter: blur(30px);
  animation: float 7s ease-in-out infinite;
}

.hero__photo-frame {
  position: relative;
  width: 300px;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  background: var(--color-card);
  animation: float 7s ease-in-out infinite;
  animation-delay: 0.3s;
  border: 1px solid var(--color-border);
}

.hero__frame-bar {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 0.8rem;
  background: var(--color-secondary);
}

.hero__dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
}

.hero__dot--red { background: #f87171; }
.hero__dot--yellow { background: #fbbf24; }
.hero__dot--green { background: #34d399; }

.hero__frame-label {
  margin-left: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #cbd5e1;
}

.hero__photo {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.hero__badge {
  position: absolute;
  background: var(--color-card);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-sm);
  padding: 0.6rem 0.9rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: float 6s ease-in-out infinite;
}

.hero__badge--top {
  top: 4%;
  right: 2%;
  color: var(--color-primary);
  font-family: var(--font-mono);
  animation-delay: 0.6s;
}

.hero__badge--bottom {
  bottom: 6%;
  left: -4%;
  animation-delay: 1s;
}

.hero__status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  display: inline-block;
}

@media (max-width: 900px) {
  .hero__inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__intro {
    margin-left: auto;
    margin-right: auto;
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__visual {
    order: -1;
    min-height: 320px;
  }

  .hero__badge--bottom {
    left: 4%;
  }
}
</style>
