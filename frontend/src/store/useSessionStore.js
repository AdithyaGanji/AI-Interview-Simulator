import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { useConfigStore } from "./useConfigStore";
import toast from "react-hot-toast";

export const useSessionStore = create((set, get ) => ({
  questions: [],
  answers: [],
  questionNum: 1,
  isLoading: false,
  interviewCompleted: false,
  feedback: {},

  setQuestionNum: (nextQuestionNum) => set({ questionNum: Math.min(nextQuestionNum, useConfigStore.getState().questionCount) }),
  appendAnswer: (answer) => set({ answers: [...get().answers, answer] }),
  setIsLoading: (newLoadingState) => set( {isLoading: newLoadingState} ),
  finishInterview: async () => {
    const { selectedFile, selectedRole, selectedExperience } = useConfigStore.getState();
    const { answers, questions } = get();

    try {
      set({ isLoading: true });

      const formData = new FormData();
      formData.append("selectedRole", selectedRole);
      formData.append("selectedExperience", selectedExperience);
      formData.append("questions", JSON.stringify(questions));
      formData.append("answers", JSON.stringify(answers));
      formData.append("file", selectedFile);

      const result = await axiosInstance.post(
        "/get-feedback",
        formData,
        {
          headers: {"Content-Type": "multipart/form-data"}
        }
      );

      set({ feedback: result.data.parsedFeedback });
      set({ interviewCompleted: true });

      return true;
    } catch (error) {
      toast.error("Please try again.");
      return false;
    } finally {
      set({ isLoading: false });
    }
  }
}));
