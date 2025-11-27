export const handleImageChange = (
  setFormData: any, 
  setFormErrors: any, 
  setImage: any,
  e: React.ChangeEvent<HTMLInputElement>
) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if(file.size > 500 * 1024) {
      // setError("File size should be less than 500KB");
      setFormErrors((prevErrors: any) => (
        {
          ...prevErrors,
          upload: "File size should be less than 500KB",
        }
      ))
      return;
    }

    setFormErrors((prevErrors: any) => (
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