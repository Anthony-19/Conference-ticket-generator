export const handleChange = (
    setFormData: any, 
    setFormErrors: any, 
    e: React.ChangeEvent<HTMLInputElement>
) => {
  const { name, value } = e.target;
  setFormData((prevData: any) => (
    {
      ...prevData,
      [name]: value,
    }
  ))

  setFormErrors((prevErrors: any) => (
    {
      ...prevErrors,
      [name]: "",
    }
  ))
}

// const validateUserInput = (): boolean => {
//   let isValid = true;
//   const newErrors = {
//     upload: "",
//     fullName: "",
//     email: "",
//     gitHubUser: "",
//   }
//   if(!formData.fullName.trim()){
//     newErrors.fullName = "Full Name is required";
//     isValid = false;
//   }
//   if(!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)){
//     newErrors.email = "Valid Email is required";
//     isValid = false;
//   }
//   if(!formData.gitHubUser.trim()){
//     newErrors.gitHubUser = "GitHub Username is required";
//     isValid = false;
//   }
