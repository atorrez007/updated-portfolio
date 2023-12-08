export type menuVariantsType = {
  initial: {
    scaleX: number;
  };
  animate: {
    scaleX: number;
    transition: {
      duration: number;
      // ease: number[];
    };
  };
  exit: {
    scaleX: number;
  };
};

export type projectType = {
  title: string;
  imgUrl: string;
  description: string;
  tags: string[];
  link: string;
};

export const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 0.9,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};
