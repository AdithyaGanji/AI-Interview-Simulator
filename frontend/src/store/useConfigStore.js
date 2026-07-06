import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { useSessionStore } from "./useSessionStore";
import toast from "react-hot-toast";

export const useConfigStore = create((set, get) => ({
  step: 1,
  selectedFile: null,
  selectedRole: "",
  selectedExperience: "",
  questionCount: 10,
  isLoading: false,

  setStep: (newStep) => set({ step: newStep }),
  setSelectedFile: (file) => set({ selectedFile: file }),
  setSelectedRole: (role) => set({ selectedRole: role }),
  setSelectedExperience: (experience) => set({ selectedExperience: experience }),
  setQuestionCount: (newQuestionCount) => set({ questionCount: newQuestionCount }),
  setIsLoading: (newLoadingState) => set( {isLoading: newLoadingState} ),

  handleStartInterview: async () => {
    const { selectedFile, selectedRole, selectedExperience, questionCount } = get();

    try {
      set({ isLoading: true });

      const formData = new FormData();
      formData.append("selectedRole", selectedRole);
      formData.append("selectedExperience", selectedExperience);
      formData.append("questionCount", questionCount);
      formData.append("file", selectedFile);

      const result = await axiosInstance.post(
        "/get-questions",
        formData,
        {
          headers: {"Content-Type": "multipart/form-data"}
        }
      );

      useSessionStore.setState({
        questions: result.data.parsedQuestions,
        answers: [],
        questionNum: 1,
        interviewCompleted: false,
        feedback: {}
      });
      set({ step: 5 });
    } catch (error) {
      toast.error("Please try again.");
    } finally {
      set({ isLoading: false });
    }
  }
}));
