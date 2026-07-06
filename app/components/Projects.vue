<script setup lang="ts">
interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  demo: string
  emoji: string
}

const projects: Project[] = [
  {
    title: 'Student Management System',
    description:
      'A desktop application for managing student records, grades, and enrollment data with a focus on clean, structured data handling.',
    tech: ['Java', 'MySQL'],
    github: '#',
    demo: '#',
    emoji: '🗂️'
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A responsive personal portfolio built to showcase skills and projects, featuring reusable components and a component-based architecture.',
    tech: ['Nuxt 3', 'Vue 3', 'CSS'],
    github: '#',
    demo: '#',
    emoji: '🧑‍💻'
  },
  {
    title: 'Task Management Application',
    description:
      'A lightweight task tracker that lets users create, organize, and manage daily tasks, with data persisted using local storage.',
    tech: ['Vue.js', 'Local Storage'],
    github: '#',
    demo: '#',
    emoji: '✅'
  }
]
</script>

<template>
  <section id="projects" class="projects section">
    <div class="container">
      <div class="section-header" v-reveal>
        <span class="section-eyebrow">// 03. projects</span>
        <h2 class="section-title">Things I've built</h2>
        <p class="section-subtitle">
          A few projects that reflect what I've been learning and practicing so far.
        </p>
      </div>

      <div class="projects__grid">
        <article v-for="project in projects" :key="project.title" class="card card--hover projects__card" v-reveal>
          <div class="projects__thumb">
            <span class="projects__emoji">{{ project.emoji }}</span>
          </div>

          <div class="projects__body">
            <h3 class="projects__title">{{ project.title }}</h3>
            <p class="projects__desc">{{ project.description }}</p>

            <div class="projects__tech">
              <span v-for="t in project.tech" :key="t" class="projects__tech-chip">{{ t }}</span>
            </div>

            <div class="projects__actions">
              <a :href="project.github" class="btn btn-outline projects__btn" target="_blank" rel="noopener">
                GitHub
              </a>
              <a :href="project.demo" class="btn btn-primary projects__btn" target="_blank" rel="noopener">
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
}

.projects__card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.projects__thumb {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
}

.projects__emoji {
  font-size: 2.75rem;
}

.projects__body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.projects__title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.65rem;
}

.projects__desc {
  font-size: 0.92rem;
  margin-bottom: 1.25rem;
  flex: 1;
}

.projects__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.projects__tech-chip {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-primary);
  background: rgba(37, 99, 235, 0.08);
  padding: 0.3rem 0.65rem;
  border-radius: 6px;
}

.projects__actions {
  display: flex;
  gap: 0.75rem;
}

.projects__btn {
  flex: 1;
  padding: 0.65rem 1rem;
  font-size: 0.85rem;
}

@media (max-width: 900px) {
  .projects__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}
</style>
