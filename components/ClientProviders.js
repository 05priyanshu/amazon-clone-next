"use client";

import React from "react";
import {StateProvider} from "@/components/StateProvider";
import reducer, { initialState } from "@/components/reducer";
import { ToastContainer } from "react-toastify";
 

const ClientProviders = ({ children }) => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      {children}
      <ToastContainer />
    </StateProvider>
  );
};

export default ClientProviders;
