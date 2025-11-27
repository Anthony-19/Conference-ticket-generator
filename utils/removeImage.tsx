export  const removeImage = (
    image:any,
    setImage:any, 
    fileInputRef:any, 
    setFormErrors:any
) => {
    if (image) URL.revokeObjectURL(image);
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setFormErrors((prevErrors:any) => (
      {
        ...prevErrors,
        upload: "",
      }
    ))
    // setError("");
  };