"use client";

import { createContext, useContext } from "react";

type LoaderContextValue = {
  isLoaderComplete: boolean;
};

export const LoaderContext = createContext<LoaderContextValue>({
  isLoaderComplete: false,
});

export function useLoaderComplete() {
  return useContext(LoaderContext).isLoaderComplete;
}
