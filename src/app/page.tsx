"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState, useRef } from "react";
import {useRouter} from "next/navigation";
import { handleImageChange } from "../../utils/handleImage";
import { handleChange } from "../../utils/handleChange";
import { validateUser } from "../../utils/validateUserInput";
import { removeImage } from "../../utils/removeImage";

export default function Home() {
  const [formData, setFormData] = useState({
    upload: "",
    fullName: "",
    email: "",
    gitHubUser: "",
  });
  const [formErrors, setFormErrors] = useState({
    upload: "",
    fullName: "",
    email: "",
    gitHubUser: "",
  });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = e.target;
//   setFormData((prevData) => (
//     {
//       ...prevData,
//       [name]: value,
//     }
//   ))

//   setFormErrors((prevErrors) => (
//     {
//       ...prevErrors,
//       [name]: "",
//     }
//   ))
// }

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

//   // if(!isValid) {
//   //   setFormErrors(newErrors);
//   // }
//   // else{
//   //   setFormErrors({
//   //     fullName: "",
//   //     email: "",
//   //     gitHubUser: "",
//   //   });
//   // },
//   setFormErrors(newErrors);
//   return isValid;
// }

const router = useRouter();

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if(!validateUser(formData, setFormErrors)) return;

  const generateNum = Math.floor(Math.random() * 100000);
  const ticketID = `#${generateNum.toString().padStart(5, "0")}`;

  const formsData = {
    ...formData,
    ticketID,
    image
  }
  localStorage.setItem("ticketData", JSON.stringify(formsData));
  router.push("/ticketGenerated");
  // console.log("Form submitted", formData);
  // alert("Form submitted successfully!");
}


  const [image, setImage] = useState<string | null>(null);
  // const [error, setError] = useState<string | null>(null);

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     if(file.size > 500 * 1024) {
//       // setError("File size should be less than 500KB");
//       setFormErrors((prevErrors) => (
//         {
//           ...prevErrors,
//           upload: "File size should be less than 500KB",
//         }
//       ))
//       return;
//     }

//     setFormErrors((prevErrors) => (
//       {
//         ...prevErrors,
//         upload: "",
//       }
//     ))
//     // setError(null);
//      const reader = new FileReader();
//   reader.onloadend = () => {
//     setImage(reader.result as string); // Base64 string
//   };
//   reader.readAsDataURL(file); // Converts file to Base64
// };
    // const blobUrl = URL.createObjectURL(file);
    // setImage(blobUrl);
  // };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // const removeImage = () => {
  //   if (image) URL.revokeObjectURL(image);
  //   setImage(null);
  //   if (fileInputRef.current) fileInputRef.current.value = "";
  //   setFormErrors((prevErrors) => (
  //     {
  //       ...prevErrors,
  //       upload: "",
  //     }
  //   ))
  //   // setError("");
  // };



  return (
    <>
      <main className="main">
        <h1 className="title">Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p className="description">
          Secure your spot at next year's biggest coding conference.
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.uploadContainer}>
            <label htmlFor="upload">Upload Avatar</label>
            <label htmlFor="uploadImage">
              <input
                type="file"
                ref={fileInputRef}
                name="upload"
                // value={formData.upload}
                onChange={(e) => handleImageChange(setFormData, setFormErrors, setImage, e)}
                accept="image/*"
                placeholder="Drag and drop or click to upload"
                id="uploadImage"
                className={styles.hiddenInput}
              />
              {!image && (
                <section className={styles.uploadImgContainer}>
                  <div className={styles.iconUploadContainer}>
                    <Image
                      src="/images/icon-upload.svg"
                      alt="icon-upload"
                      width={40}
                      height={30}
                      className={styles.iconUpload}
                    />
                  </div>
                  <p className={styles.iconUploadText}>
                    Drag and drop or click to upload
                  </p>
                </section>
              )}

              
            </label>

            {image && (
                <section className={styles.uploadImgContainer}>
                  <Image
                    src={image}
                    alt="icon-upload"
                    width={50}
                    height={50}
                    unoptimized
                    className={styles.iconUploaded}
                  />
                  <div className={styles.buttonContainer}>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage(image,setImage, fileInputRef, setFormErrors);
                      }}
                    >
                      Remove Image
                    </button>
                    <button type="button" onClick={() => fileInputRef.current?.click()}>
                      Change Image
                    </button>
                  </div>
                </section>
              )}
            <div className={styles.uploadDescriptionContainer}>
              <Image
                src="/images/icon-info.svg"
                alt="icon-info"
                width={15}
                height={15}
                className={formErrors.upload ? styles.iconInfoError : styles.iconInfo}
              />
              {formErrors.upload ? <p className={formErrors.upload && `${styles.uploadDescription} ${styles.errorText}`}>
                {" "}
                File too large. Please Upload a photo less than 500KB.
                
              </p>  :
               <p className={styles.uploadDescription}>
                {" "}
                Upload your photo (JPG or PNG, max size: 500KB).
              </p> }
            </div>
            <section></section>
          </div>
          <div className={styles.fullNameContainer}>
            <label htmlFor="fullName"> Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={(e) => handleChange(setFormData, setFormErrors, e)}
              // placeholder="Drag and drop or click to upload"
            />
             {formErrors.fullName && 
            <div className={styles.uploadDescriptionContainer}>
              <Image
                src="/images/icon-info.svg"
                alt="icon-info"
                width={15}
                height={15}
                className={formErrors.fullName ? styles.iconInfoError : styles.iconInfo}
              />
            <p className={styles.errorText}>{formErrors.fullName}</p>
            </div>
            }
          </div>

          <div className={styles.emailContainer}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
               onChange={(e) => handleChange(setFormData, setFormErrors, e)}
              placeholder="example@email.com"
            />
            {formErrors.email && 
            <div className={styles.uploadDescriptionContainer}>
              <Image
                src="/images/icon-info.svg"
                alt="icon-info"
                width={15}
                height={15}
                className={formErrors.email ? styles.iconInfoError : styles.iconInfo}
              />
            <p className={styles.errorText}>{formErrors.email}</p>
            </div>
            }
          </div>
          <div className={styles.gitHubContainer}>
            <label htmlFor="email">GitHub Username</label>
            <input
              type="text"
              name="gitHubUser"
              value={formData.gitHubUser}
               onChange={(e) => handleChange(setFormData, setFormErrors, e)}
              placeholder="@yourusername"
            />

             {formErrors.gitHubUser && 
            <div className={styles.uploadDescriptionContainer}>
              <Image
                src="/images/icon-info.svg"
                alt="icon-info"
                width={15}
                height={15}
                className={formErrors.gitHubUser ? styles.iconInfoError : styles.iconInfo}
              />
              <p className={styles.errorText}>{formErrors.gitHubUser}</p>
            </div>
            }
          </div>

          <button className={styles.generateBtn}>Generate My Ticket</button>
        </form>
      </main>
    </>
    // </div>
  );
}
