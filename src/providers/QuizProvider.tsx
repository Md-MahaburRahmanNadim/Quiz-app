import { View, Text } from "react-native";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import questions from "../questions";
import { Question } from "../types";
// save the best score on phone strage
import AsyncStorage from "@react-native-async-storage/async-storage";

type QuizContext = {
  question?: Question;
  questionIndex: number;
  onNext: () => void;
  selectedOption?: string;
  setSelectedOption: (option: string) => void;
  scoure: number;
  totalQuestion: number;
  bestScoure: number;
  isFinished: boolean;
};
/* The code `export const QuizContext = createContext({});` is creating a new context object using the
`createContext` function provided by React. This context object will be used to share data across
the component tree in a React application. By exporting `QuizContext`, other components can import
and use this context to access the shared data within the context provider. */
export const QuizContext = createContext<QuizContext>({
  questionIndex: 0,
  onNext: () => {},
  setSelectedOption: (option) => {},
  scoure: 0,
  totalQuestion: 0,
  bestScoure: 0,
  isFinished: false,
});

export default function QuizContextProvider({ children }: PropsWithChildren) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];
  const totalQuestion = questions.length;
  const [selectedOption, setSelectedOption] = useState<undefined | string>();
  const [scoure, setScoure] = useState(0);
  const isFinished = questionIndex >= questions.length;
  // show best scoure when the question is finished
  const [bestScoure, setBestScoure] = useState(0);

  useEffect(() => {
    if (isFinished === true && scoure > bestScoure) {
      setBestScoure(scoure);
      saveBestScoure(scoure); // to the phone storage
    }
  }, [isFinished]);
  useEffect(() => {
    getBestScoure();
  }, []);
  const reStart = () => {
    setQuestionIndex(0);
    setSelectedOption("");
    setScoure(0);
  };
  const onNext = () => {
    if (isFinished) {
      reStart();
      return;
    }
    if (selectedOption === question?.correctAnswer) {
      setScoure((currentScoure) => currentScoure + 1);
    }
    setQuestionIndex((currValue) => currValue + 1);
  };
  // saving the bestScore to the phone storage
  const saveBestScoure = async (value: number) => {
    try {
      await AsyncStorage.setItem("best-scoure", value.toString());
    } catch (e) {
      // saving error
    }
  };
  // read bestScoure when our app is mounted

  const getBestScoure = async () => {
    try {
      const value = await AsyncStorage.getItem("best-scoure");
      if (value !== null) {
        // value previously stored
        setBestScoure(Number(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    // shring the value with rest of the ui (QuizContext.Provider)
    <QuizContext.Provider
      value={{
        question,
        questionIndex,
        onNext,
        selectedOption,
        setSelectedOption,
        scoure,
        totalQuestion,
        bestScoure,
        isFinished,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => useContext(QuizContext);
