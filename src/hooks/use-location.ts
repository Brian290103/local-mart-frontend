import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { toast } from "sonner";

const useLocationStore = create(
  persist(
    (set, get) => ({
      locationId: null,
      setLocationId: (id) => {
        set({ locationId: id });
        // console.log("Location is set");
        toast.success("Location has been set");
      },
    }),
    {
      name: "location-storage", // Key for localStorage
      getStorage: () => createJSONStorage(() => localStorage),
    },
  ),
);

export default useLocationStore;