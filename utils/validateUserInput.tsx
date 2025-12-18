import type { FormDataTypes } from "@/app/page";
import type { FormErrorDataTypes } from "@/app/page";
import type { Dispatch, SetStateAction } from "react";

export const validateUser = (formData: FormDataTypes, setFormErrors:  Dispatch<SetStateAction<FormErrorDataTypes>>): boolean => {
  let isValid = true;
  const newErrors = {
    upload: "",
    fullName: "",
    email: "",
    gitHubUser: "",
  }
  if(!formData.fullName.trim()){
    newErrors.fullName = "Full Name is required";
    isValid = false;
  }
  if(!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)){
    newErrors.email = "Valid Email is required";
    isValid = false;
  }
  if(!formData.gitHubUser.trim()){
    newErrors.gitHubUser = "GitHub Username is required";
    isValid = false;
  }

    setFormErrors(newErrors);
  return isValid;
}

