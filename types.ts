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
