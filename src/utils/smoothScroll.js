const SCROLL_DURATION = 1400

export function smoothScrollTo(element) {
  if (!element) return

  const startPosition = window.scrollY
  const targetPosition =
    element.getBoundingClientRect().top + window.scrollY
  const distance = targetPosition - startPosition
  const startTime = performance.now()

  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / SCROLL_DURATION, 1)
    const easedProgress =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2

    window.scrollTo(0, startPosition + distance * easedProgress)

    if (progress < 1) {
      window.requestAnimationFrame(animateScroll)
    }
  }

  window.requestAnimationFrame(animateScroll)
}
