import create from "zustand";

const useEventHandler = create((set, get) => ({
  sidebarIsOpen: true,
  sidebarTogglerHandler: () =>
    set((state) => ({ sidebarIsOpen: !state.sidebarIsOpen })),
}));

export { useEventHandler };
