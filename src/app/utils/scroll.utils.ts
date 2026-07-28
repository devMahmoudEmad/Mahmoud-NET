export function scrollToSection(sectionId: string, headerHeight = 80): void {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.offsetTop - headerHeight;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });
  }
}
