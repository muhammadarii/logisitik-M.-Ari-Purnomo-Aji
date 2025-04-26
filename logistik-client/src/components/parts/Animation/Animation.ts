export const containerVariantsY = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      delay: 0.1,
      ease: [0.16, 0.77, 0.47, 0.97],
    },
  },
};

export const containerVariantsX = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      delay: 0.1,
      ease: [0.16, 0.77, 0.47, 0.97],
    },
  },
};

export const fadeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.6,
      ease: [0.16, 0.77, 0.47, 0.97],
    },
  },
};
