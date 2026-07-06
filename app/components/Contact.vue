<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitted = ref(false)

function handleSubmit() {
  // Placeholder submit handler — wire up to an API route or form service later.
  isSubmitted.value = true
  setTimeout(() => {
    isSubmitted.value = false
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  }, 3000)
}

const contactDetails = [
  { icon: '📞', label: 'Phone', value: '0912 846 0552', href: 'tel:+639128460552' },
  { icon: '✉️', label: 'Email', value: 'paulangelomagbanua1@gmail.com', href: 'mailto:paulangelomagbanua1@gmail.com' }
]

const socials = [
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Facebook', href: '#' }
]
</script>

<template>
  <section id="contact" class="contact section">
    <div class="container">
      <div class="section-header" v-reveal>
        <span class="section-eyebrow">// 05. contact</span>
        <h2 class="section-title">Let's work together</h2>
        <p class="section-subtitle">
          Have an opportunity, internship, or project in mind? I'd love to hear from you.
        </p>
      </div>

      <div class="contact__grid">
        <div class="contact__info" v-reveal>
          <h3 class="contact__info-title">Paul Angelo Magbanua</h3>
          <p class="contact__info-text">
            Feel free to reach out directly, or send a message using the form — I try to respond
            as quickly as I can.
          </p>

          <ul class="contact__details">
            <li v-for="detail in contactDetails" :key="detail.label" class="contact__detail">
              <span class="contact__detail-icon">{{ detail.icon }}</span>
              <div>
                <span class="contact__detail-label">{{ detail.label }}</span>
                <a :href="detail.href" class="contact__detail-value">{{ detail.value }}</a>
              </div>
            </li>
          </ul>

          <div class="contact__socials">
            <a v-for="s in socials" :key="s.label" :href="s.href" class="contact__social" target="_blank" rel="noopener">
              {{ s.label }}
            </a>
          </div>
        </div>

        <form class="card contact__form" @submit.prevent="handleSubmit" v-reveal>
          <div class="contact__field">
            <label for="name">Full Name</label>
            <input id="name" v-model="form.name" type="text" placeholder="Juan Dela Cruz" required />
          </div>

          <div class="contact__field">
            <label for="email">Email</label>
            <input id="email" v-model="form.email" type="email" placeholder="you@example.com" required />
          </div>

          <div class="contact__field">
            <label for="subject">Subject</label>
            <input id="subject" v-model="form.subject" type="text" placeholder="Internship opportunity" required />
          </div>

          <div class="contact__field">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" rows="5" placeholder="Tell me a bit about the opportunity..." required />
          </div>

          <button type="submit" class="btn btn-primary contact__submit">
            {{ isSubmitted ? 'Message Sent ✓' : 'Send Message' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 2.5rem;
}

.contact__info-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.contact__info-text {
  margin-bottom: 2rem;
}

.contact__details {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.contact__detail {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.contact__detail-icon {
  font-size: 1.3rem;
  background: rgba(37, 99, 235, 0.08);
  border-radius: var(--radius-sm);
  padding: 0.6rem;
}

.contact__detail-label {
  display: block;
  font-size: 0.8rem;
  color: var(--color-text-soft);
  margin-bottom: 0.15rem;
}

.contact__detail-value {
  font-weight: 600;
  color: var(--color-secondary);
  transition: color 0.25s ease;
}

.contact__detail-value:hover {
  color: var(--color-primary);
}

.contact__socials {
  display: flex;
  gap: 0.75rem;
}

.contact__social {
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  color: var(--color-secondary);
  transition: border-color 0.25s ease, color 0.25s ease;
}

.contact__social:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.contact__form {
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contact__field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact__field label {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--color-secondary);
}

.contact__field input,
.contact__field textarea {
  font-family: var(--font-body);
  font-size: 0.95rem;
  padding: 0.75rem 1rem;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-bg);
  color: var(--color-text);
  resize: vertical;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.contact__field input:focus,
.contact__field textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

.contact__submit {
  margin-top: 0.5rem;
  width: 100%;
}

@media (max-width: 900px) {
  .contact__grid {
    grid-template-columns: 1fr;
  }
}
</style>
