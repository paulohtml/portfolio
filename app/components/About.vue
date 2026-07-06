<script setup lang="ts">
const highlights = [
  { icon: '🎓', text: 'BS in Information Technology student' },
  { icon: '💻', text: 'Passionate about software development' },
  { icon: '🌐', text: 'Interested in Web Development' },
  { icon: '⚙️', text: 'Interested in Software Engineering' },
  { icon: '🧩', text: 'Enjoys solving programming challenges' },
  { icon: '📚', text: 'Continuously learning modern technologies' }
]
</script>

<template>
  <section id="about" class="about section">
    <div class="container">
      <div class="section-header" v-reveal>
        <span class="section-eyebrow">// 01. about-me</span>
        <h2 class="section-title">Getting to know me</h2>
        <p class="section-subtitle">
          A quick look at who I am, what drives me, and where I'm headed as a developer.
        </p>
      </div>

      <div class="about__grid">
        <div class="card about__card" v-reveal>
          <p class="about__lead">
            I'm an Information Technology student with a genuine passion for building software
            that solves real problems. I enjoy the process of turning an idea into working code —
            from planning the logic to polishing the final interface.
          </p>
          <p class="about__lead">
            I'm particularly drawn to <strong>web development</strong> and
            <strong>software engineering</strong>, and I spend much of my free time sharpening
            my skills through personal projects, coursework, and self-directed learning. My goal
            is to grow into a well-rounded <strong>Full Stack Software Developer</strong>,
            capable of building complete, reliable applications from front to back.
          </p>

          <ul class="about__highlights">
            <li v-for="item in highlights" :key="item.text" class="about__highlight">
              <span class="about__highlight-icon">{{ item.icon }}</span>
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </div>

        <div class="about__goal-card card" v-reveal>
          <span class="about__goal-label">Current goal</span>
          <p class="about__goal-title">Become a Full Stack Software Developer</p>
          <p class="about__goal-text">
            Building strong foundations today in programming, data structures, and web
            technologies — one project at a time.
          </p>
          <div class="about__progress">
            <div class="about__progress-track">
              <div class="about__progress-fill" />
            </div>
            <span class="about__progress-label">Learning journey in progress</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  align-items: start;
}

.about__card {
  padding: 2.5rem;
}

.about__lead {
  font-size: 1.02rem;
  margin-bottom: 1.25rem;
}

.about__lead strong {
  color: var(--color-secondary);
}

.about__highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
  margin-top: 1.75rem;
}

.about__highlight {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--color-secondary);
  background: var(--color-bg);
  border-radius: var(--radius-sm);
  padding: 0.65rem 0.85rem;
}

.about__highlight-icon {
  font-size: 1.1rem;
}

.about__goal-card {
  padding: 2.25rem;
  background: var(--gradient-secondary);
  color: #fff;
  height: 100%;
}

.about__goal-label {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.about__goal-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.4rem;
  margin: 0.85rem 0 0.75rem;
  color: #fff;
}

.about__goal-text {
  color: #CBD5E1;
  font-size: 0.95rem;
  margin-bottom: 1.75rem;
}

.about__progress-track {
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  overflow: hidden;
}

.about__progress-fill {
  width: 68%;
  height: 100%;
  border-radius: 999px;
  background: var(--gradient-primary);
}

.about__progress-label {
  display: block;
  margin-top: 0.6rem;
  font-size: 0.82rem;
  color: #94A3B8;
}

@media (max-width: 900px) {
  .about__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .about__highlights {
    grid-template-columns: 1fr;
  }

  .about__card {
    padding: 1.75rem;
  }
}
</style>
