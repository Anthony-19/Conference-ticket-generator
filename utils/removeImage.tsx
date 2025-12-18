 import type { Dispatch, SetStateAction } from "react";
 import type { FormErrorDataTypes } from "@/app/page";
 export  const removeImage = (
    image:string | null,
    setImage: Dispatch<SetStateAction<string | null>>, 
    fileInputRef:React.RefObject<HTMLInputElement | null> , 
    setFormErrors:Dispatch<SetStateAction<FormErrorDataTypes>>
) => {
    if (image) URL.revokeObjectURL(image);
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setFormErrors((prevErrors: FormErrorDataTypes) => (
      {
        ...prevErrors,
        upload: "",
      }
    ))
    // setError("");
  };