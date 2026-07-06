// Registers a lightweight `v-reveal` directive that fades/slides elements
// into view as they enter the viewport. Client-only (relies on IntersectionObserver).
export default defineNuxtPlugin((nuxtApp) => {
  const observer =
    typeof window !== 'undefined'
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible')
                observer.unobserve(entry.target)
              }
            })
          },
          { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
        )
      : null

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement) {
      el.classList.add('reveal')
      observer?.observe(el)
    }
  })
})
