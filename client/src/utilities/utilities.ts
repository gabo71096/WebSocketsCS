export function scrollToBottom(element: HTMLDivElement | null) {
  element?.scrollTo({ behavior: "smooth", top: element?.scrollHeight });
}
