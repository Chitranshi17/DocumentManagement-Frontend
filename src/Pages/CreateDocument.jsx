import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import BackBtn from "../Components/BackBtn";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCreateDocument } from "../feature/document/documentSlice";

const CreateDocument = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [photo, setphoto] = useState("");

  let formData = new FormData();
  formData.append("photo", photo);
  formData.append("title", title);
  formData.append("description", description);

  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && photo) {
      // console.log(formData);
      dispatch(getCreateDocument(formData));
      // navigate("/document/allDocument");
    } else {
      console.log("fill all details");
    }
    settitle("");
    setdescription("")
    setphoto("")
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
            xl: 670,
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}>
        <Card
          sx={{
            width: {
              xs: 380,
              sm: "70%",
              md: "50%",
              lg: "50%",
              xl:"35%",
            },
            height: {
              xs: 500,
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
          }}>
          <BackBtn Location={"/"} />

          <Typography
            variant="h5"
            color="gray"
            align="center"
            fontWeight={"700"}>
            Create Document
          </Typography>
          <Box
            sx={{
              width: "80%",
              height: "88%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "column",
            }}>
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
              color="warning"
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon 
              type="file"
              accept="image/*"
              sx={{width:"60%"}}
              // value={formData.photo}
              onChange={(e) => setphoto(e.target.files[0])}
              />}>
              <input
                type="file"
                id="uploadInput"
                // value={formData.photo}
                accept="image/*"
                onChange={(e) => setphoto(e.target.files[0])}
              />
            </Button>

            
            <Button
              variant="contained"
              color="warning"
              fullWidth
              sx={{ paddingBlock: ".6rem" }}
              type="submit"
              onClick={handleSubmit}>
              Create Document
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default CreateDocument;
