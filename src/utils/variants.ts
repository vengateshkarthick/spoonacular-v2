import { Variants } from "framer-motion";

export const tapEffect: Variants = {
  hover: {
    scale: 1.1,
  },
  onTap: {
    scale: 0.95,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

export const fadeEffect: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

export const listEffect = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const listItemEffect = {
  visible: ({ itemIdx = 1 }) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * itemIdx,
    },
  }),
  hidden: {
    opacity: 0,
    y: 20,
  },
};

export const listItemEffectV2 = {
  visible: ({ itemIdx = 1 }) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.175 * itemIdx,
    },
  }),
  hidden: {
    opacity: 0,
    y: -1,
  },
};

export const accordionEffect: Variants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
  collapsed: { height: 0, opacity: 0 },
};
