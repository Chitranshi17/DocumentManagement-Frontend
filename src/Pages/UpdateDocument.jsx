import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BackBtn from "../Components/BackBtn";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCreateDocument,
  getSingleDocument,
  getUpdateDocument,
} from "../feature/document/documentSlice";

const UpdateDocument = () => {
  // const { user } = useSelector((state) => state.auth);

  const { edit } = useSelector((state) => state.document);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [photo, setphoto] = useState("");
  // const [photopreview, setphotopreview] = useState("")
  // const [photovalue , setphotovalue] = useState("")

  // let formData = new FormData();
  // // formData.append("photo", photo || photovalue);
  // formData.append("title", title);
  // formData.append("description", description);
  // console.log(formData);

  let config = {
    "content-type": "multipart/form-data",
  };

  useEffect(() => {
    if (edit.isEdit) {
      settitle(edit.edit.title);
      setdescription(edit.edit.description);
    }
  }, [edit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("photo", photo);
    formData.append("title", title);
    formData.append("description", description);
    console.log(formData);

    try {
      if (edit.isEdit) {
        const data = {
          ...edit.edit,
          title: title,
          description: description,
        };
        await dispatch(getUpdateDocument(data));
        console.log("Sccess Editing");
      } else {
        await dispatch(getCreateDocument(formDataForRequest));
      }
      navigate("/document/allDocument");
    } catch (error) {
      console.log("Error occurred: ", error);
    }
  };

  return (
    <>
      <Box
        className="pt-5 registerSec"
        sx={{
          width: "100%",
          height: {
            xs: 600,
            sm: 665,
            md: 600,
            lg: 730,
            xl: 800,
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Card
          sx={{
            width: {
              xs: "95%",
              sm: "70%",
              md: "50%",
              lg: "50%",
              xl: "35%",
            },
            height: {
              xs: "75%",
              sm: "60%",
              md: "70%",
              lg: "70%",
              xl: "70%",
            },
            paddingBlock: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <BackBtn Location={"/"} />

          <Typography
            variant="h5"
            color="gray"
            align="center"
            fontWeight={"700"}
          >
            Update Document
          </Typography>
          <Box
            sx={{
              width: "80%",
              height: "88%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              placeholder="Title Here"
              fullWidth
              required
              onChange={(e) => settitle(e.target.value)}
              value={title}
            />
            <TextField
              id="outlined-basics"
              label="Description"
              variant="outlined"
              placeholder="Description Here"
              required
              fullWidth
              onChange={(e) => setdescription(e.target.value)}
              value={description}
            />

            <Button
              variant="contained"
              color="warning"
              fullWidth
              sx={{ paddingBlock: ".6rem" }}
              type="submit"
              onClick={handleSubmit}
            >
              Update Document
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default UpdateDocument;
