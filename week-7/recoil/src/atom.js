import { atom, selector } from "recoil";

// create atom
export const notificationAtom = atom({
  key: "notificationAtom",
  default: 104,
});

export const messageAtom = atom({
  key: "messageAtom",
  default: 12,
});

export const jobAtom = atom({
  key: "jobAtom",
  default: 14,
});

// selector (derived value of a state)
export const meSelector = selector({
  key: "meSelector",
  get: ({ get }) => {
    const notification = get(notificationAtom);
    const message = get(messageAtom);
    const job = get(jobAtom);

    return notification + message + job;
  },
});
