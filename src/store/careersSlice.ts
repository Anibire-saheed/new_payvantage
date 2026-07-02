import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SelectedJob {
  id: string | number;
  title: string;
}

interface CareersState {
  isCVModalOpen: boolean;
  isJobModalOpen: boolean;
  selectedJob: SelectedJob | null;
  selectedDepartment: string;
}

const initialState: CareersState = {
  isCVModalOpen: false,
  isJobModalOpen: false,
  selectedJob: null,
  selectedDepartment: "All Departments",
};

const careersSlice = createSlice({
  name: "careers",
  initialState,
  reducers: {
    openCVModal(state) {
      state.isCVModalOpen = true;
    },
    closeCVModal(state) {
      state.isCVModalOpen = false;
    },
    openJobModal(state, action: PayloadAction<SelectedJob>) {
      state.selectedJob = action.payload;
      state.isJobModalOpen = true;
    },
    closeJobModal(state) {
      state.isJobModalOpen = false;
    },
    setDepartment(state, action: PayloadAction<string>) {
      state.selectedDepartment = action.payload;
    },
  },
});

export const { openCVModal, closeCVModal, openJobModal, closeJobModal, setDepartment } =
  careersSlice.actions;

export default careersSlice.reducer;
