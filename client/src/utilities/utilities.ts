export function scrollToBottom(element?: HTMLDivElement) {
  element?.scrollTo({ behavior: "smooth", top: element?.scrollHeight });
}
