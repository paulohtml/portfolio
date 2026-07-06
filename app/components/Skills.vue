<script setup lang="ts">
interface SkillGroup {
  title: string
  eyebrow: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    eyebrow: 'lang',
    skills: ['Java', 'C++', 'Python', 'JavaScript', 'HTML5', 'CSS3']
  },
  {
    title: 'Frameworks',
    eyebrow: 'frameworks',
    skills: ['Vue.js', 'Nuxt 3']
  },
  {
    title: 'Database',
    eyebrow: 'data',
    skills: ['MySQL']
  },
  {
    title: 'Development Tools',
    eyebrow: 'tools',
    skills: ['Git', 'GitHub', 'Visual Studio Code']
  },
  {
    title: 'Software Engineering',
    eyebrow: 'core',
    skills: ['Object-Oriented Programming', 'Data Structures', 'Algorithms', 'Responsive Web Design', 'Software Development Fundamentals']
  }
]
</script>

<template>
  <section id="skills" class="skills section section--alt">
    <div class="container">
      <div class="section-header" v-reveal>
        <span class="section-eyebrow">// 02. technical-skills</span>
        <h2 class="section-title">What I work with</h2>
        <p class="section-subtitle">
          Languages, tools, and fundamentals I've been building and practicing with.
        </p>
      </div>

      <div class="skills__grid">
        <div v-for="group in skillGroups" :key="group.title" class="card card--hover skills__card" v-reveal>
          <span class="skills__tag">{{ group.eyebrow }}</span>
          <h3 class="skills__title">{{ group.title }}</h3>
          <div class="skills__chips">
            <span v-for="skill in group.skills" :key="skill" class="skills__chip">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.skills__card {
  padding: 1.75rem;
}

.skills__tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-primary);
  background: rgba(37, 99, 235, 0.08);
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.skills__title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.1rem;
}

.skills__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skills__chip {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-secondary);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 0.4rem 0.85rem;
  transition: border-color 0.25s ease, color 0.25s ease;
}

.skills__chip:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

@media (max-width: 900px) {
  .skills__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .skills__grid {
    grid-template-columns: 1fr;
  }
}
</style>
