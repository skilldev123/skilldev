import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function PhotoGallery() {
  const jwt = localStorage.getItem("jwt");
  const state = localStorage.getItem("state");
  const [images, setImages] = useState([]);
  const [deleting, setDeleting] = useState(false);
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${apiUrl}/cloudImg/allImages?stateName=${state}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((res) => setImages(res.data))
      .catch((err) => console.error(err));
  }, [jwt, apiUrl, state]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  function deleteFile(id) {
    setDeleting(true);
    axios
      .post(
        `${apiUrl}/cloudImg/delete`,
        { fileId: `${id}` },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })

      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setDeleting(false);
        toast("Image deleted!", { autoClose: 3000 });
      });
  }

  return (
    <div>
      {deleting && <div className="loader"></div>}
      <div className="photo-gallery">
        {images.map((image) => (
          <div className="photo-card">
            <img src={image.fileUrl.replace('/upload/', '/upload/w_150,h_84/')} alt="images" />
            <button onClick={() => deleteFile(image.fileId)}>
              <AiFillDelete />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
