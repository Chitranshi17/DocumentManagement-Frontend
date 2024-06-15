import { Box, Button, Card, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate, useParams } from "react-router-dom";
import BackBtn from "../Components/BackBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  editDoc,
  getDeleteDocument,
  getSingleDocument,
} from "../feature/document/documentSlice";
import LoadingPage from "../Components/LoadingPage";
import { toast } from "react-toastify";

const SingleDocument = () => {
  const { document, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.document
  );

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getSingleDocument(params.id));
    if (isError || message) {
      toast.error(message);
    }
  }, [isError, message]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!document) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography color="error" variant="h3">
          Data Not Found!!
        </Typography>
      </Box>
    );
  }

  const handleDelete = () => {
    console.log("Delete");
    dispatch(getDeleteDocument(document._id));
    navigate("/document/allDocument");
  };

  const handleEdit = (data) => {
    dispatch(editDoc(data));
    navigate(`/document/update/${document._id}`);
  };
  return (
    <Box
      className="pt-5 registerSec"
      sx={{
        width: "100%",
        height: {
          xs: "auto",
          sm: 665,
          md: 600,
          lg: 730,
          xl: 670,
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingBlock: "2rem",
      }}
    >
      <BackBtn Location={"/document/allDocument"} />

      <Typography variant="h3" color="gray" align="center" fontWeight={"700"}>
        Single Document Details
      </Typography>

      <Card
        sx={{
          width: {
            xs: "90%",
            sm: "95%",
            md: "90%",
            lg: "90%",
            xl: 800,
          },
          height: {
            xs: "auto",
            sm: "auto",
            md: "auto",
            lg: "auto",
            xl: "60%",
          },
          marginTop: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          align="end"
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Link to={`/document/update/${document._id}`}>
            <Button color="warning" onClick={() => handleEdit(document)}>
              <EditIcon />
            </Button>
          </Link>

          <Button onClick={handleDelete} color="warning">
            <CloseIcon />
          </Button>
        </Box>

        <Card
          sx={{
            width: "100%",
            height: {
              xs: 700,
              sm: 800,
              md: 300,
              lg: 800,
              xl: 800,
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: 300,
                sm: "60%",
                md: "50%",
                lg: 800,
                xl: "70%",
              },
              height: {
                xs: 500,
                sm: "60%",
                md: "90%",
                lg: 800,
                xl: "90%",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={"https://documentmanagement-backend.onrender.com/" + document.photo}
              alt="noImg"
              width="80%"
              height="90%"
            />
          </Box>
          <Box
            sx={{
              width: "60%",

              height: "70%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "column",
              paddingInline: "1.5rem",
              paddingBlock: "2.5rem",
            }}
          >
            <Typography variant="h4" align="center">
              Title : {document.title}
            </Typography>

            <Typography variant="h6" align="center">
              Date : {new Date(document.createdAt).toLocaleDateString("en-In")}
            </Typography>

            <Typography
              variant="body1"
              align="center"
              sx={{
                width: "80%",
                lineBreak: "2",
                overflowY: "scroll",
              }}
            >
              Description : {document.description}
            </Typography>
          </Box>
        </Card>
      </Card>
    </Box>
  );
};

export default SingleDocument;
