interface ScrollResult {
  scrollToElement: (id: string) => void;
}

export const useScroll = (): ScrollResult => {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);

    if (!element) {
      console.error(`Element with id ${id} does not exist`);
      return;
    }

    element.scrollIntoView({ behavior: 'smooth' });
  }

  return { scrollToElement };
};
