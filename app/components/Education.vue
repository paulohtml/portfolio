<script setup lang="ts">
const coursework = [
  'Programming',
  'Data Structures',
  'Algorithms',
  'Database Systems',
  'Web Development',
  'Software Engineering'
]

const currentlyLearning = [
  { icon: '🟢', label: 'Nuxt 3' },
  { icon: '💚', label: 'Vue.js' },
  { icon: '🔗', label: 'REST APIs' },
  { icon: '🛠️', label: 'Backend Fundamentals' },
  { icon: '🌿', label: 'Git Workflow' },
  { icon: '📐', label: 'Software Engineering Best Practices' }
]
</script>

<template>
  <section id="education" class="education section section--alt">
    <div class="container">
      <div class="section-header" v-reveal>
        <span class="section-eyebrow">// 04. education</span>
        <h2 class="section-title">Education & learning journey</h2>
        <p class="section-subtitle">
          My academic background and the technologies I'm actively building fluency in.
        </p>
      </div>

      <div class="education__grid">
        <div class="card education__timeline-card" v-reveal>
          <div class="education__timeline-marker" aria-hidden="true" />
          <span class="education__badge">Undergraduate</span>
          <h3 class="education__degree">Bachelor of Science in Information Technology</h3>
          <h4 class="education__degree">Consolatrix College of Toledo City Inc.</h4>
          <p class="education__note">Relevant coursework covering foundational and applied topics:</p>
          <ul class="education__coursework">
            <li v-for="course in coursework" :key="course">{{ course }}</li>
          </ul>
        </div>

        <div class="card education__learning-card" v-reveal>
          <span class="education__badge education__badge--accent">Currently Learning</span>
          <h3 class="education__degree">Building my skill set, one topic at a time</h3>
          <ul class="education__learning-list">
            <li v-for="item in currentlyLearning" :key="item.label" class="education__learning-item">
              <span class="education__learning-icon">{{ item.icon }}</span>
              {{ item.label }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.education__timeline-card,
.education__learning-card {
  position: relative;
  padding: 2.25rem;
}

.education__timeline-marker {
  position: absolute;
  top: 2.25rem;
  left: 0;
  width: 4px;
  height: calc(100% - 4.5rem);
  background: var(--gradient-primary);
  border-radius: 0 4px 4px 0;
}

.education__badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--color-primary);
  background: rgba(37, 99, 235, 0.08);
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  margin-bottom: 1rem;
}

.education__badge--accent {
  color: #0369A1;
  background: rgba(56, 189, 248, 0.14);
}

.education__degree {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.education__note {
  font-size: 0.92rem;
  margin-bottom: 1rem;
}

.education__coursework {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
}

.education__coursework li {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-secondary);
  background: var(--color-bg);
  border-radius: var(--radius-sm);
  padding: 0.6rem 0.85rem;
}

.education__learning-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.education__learning-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-secondary);
  background: var(--color-bg);
  border-radius: var(--radius-sm);
  padding: 0.75rem 1rem;
}

.education__learning-icon {
  font-size: 1.1rem;
}

@media (max-width: 900px) {
  .education__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .education__coursework {
    grid-template-columns: 1fr;
  }
}
</style>
