import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function ImageUploader() {
  let navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [siteName, setSiteName] = useState("");
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleSiteNameChange = (event) => {
    setSiteName(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append("image", image);
  //   formData.append("caption", caption);
  //   formData.append("siteName", siteName);

  //   fetch(
  //     `${apiUrl}/cloudImg/upload`,
  //     {
  //       method: "POST",
  //       body: formData,
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${jwt}`,
  //       },
  //     }
  //   ).then((response) => response.json());
  //   navigate("/dashboard");
  //   window.location.reload();
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append("image", image);
    formData.append("caption", caption);
    formData.append("siteName", siteName);
  
    try {
      // eslint-disable-next-line
      const response = await axios.post(`${apiUrl}/cloudImg/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${jwt}`,
        },
      });
   
      navigate("/dashboardBihar");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const username = localStorage.getItem("username");
  function handledelete() {
    if ( username.startsWith("master_admin") ) {
      navigate("/gallaryBihar");
    } else {
      window.alert("Sorry! You are not authorized to access this feature");
    }
  }

  return (
    <>
      <div>
        <button onClick={() => handledelete()}>Delete Images</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageChange} />
        <input
          type="text"
          placeholder="Caption"
          value={caption}
          onChange={handleCaptionChange}
        />
        <input
          type="text"
          placeholder="Site Name"
          value={siteName}
          onChange={handleSiteNameChange}
        />
        <button type="submit">Upload</button>
      </form>
    </>
  );
}

export default ImageUploader;
