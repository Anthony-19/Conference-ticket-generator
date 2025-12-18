import type { FormDataTypes } from "@/app/page";
import type { FormErrorDataTypes } from "@/app/page";
import type { Dispatch, SetStateAction } from "react";
export const handleImageChange = (
  setFormData: Dispatch<SetStateAction<FormDataTypes>>, 
  setFormErrors: Dispatch<SetStateAction<FormErrorDataTypes>>, 
  setImage:Dispatch<SetStateAction<string | null>> ,
  e: React.ChangeEvent<HTMLInputElement>
) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if(file.size > 500 * 1024) {
      // setError("File size should be less than 500KB");
      setFormErrors((prevErrors: FormErrorDataTypes) => (
        {
          ...prevErrors,
          upload: "File size should be less than 500KB",
        }
      ))
      return;
    }

    setFormErrors((prevErrors: FormErrorDataTypes) => (
      {
        ...prevErrors,
        upload: "",
      }
    ))
    // setError(null);
     const reader = new FileReader();
  reader.onloadend = () => {
    setImage(reader.result as string); // Base64 string
  };
  reader.readAsDataURL(file); // Converts file to Base64
};