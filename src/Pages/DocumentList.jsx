import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import BackBtn from "../Components/BackBtn";
import { useDispatch, useSelector } from "react-redux";
import { getAllDocuments } from "../feature/document/documentSlice";
import { toast } from "react-toastify";
import LoadingPage from "../Components/LoadingPage";
import DocumentTableData from "../Components/DocumentTableData";

const DocumentList = () => {
  const { documents, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.document
  );

  // console.log(documents)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDocuments());
    if (isError || message) {
      toast.error(message);
    }
  }, [isError, message]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: {
          xs: 600,
          sm: 665,
          md: 640,
          lg: 860,
          xl: 800,
        },
        flexDirection: "column",
        paddingBottom: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="display pt-5 registerSec"
    >
      {/* <BackBtn Location={"/"} /> */}
      <BackBtn Location={"/"} />
      <Typography
        variant="h3"
        align="center"
        color="gray"
        sx={{ paddingBlock: "1rem" }}
      >
        All Document Data
      </Typography>
      <Paper
        sx={{
          width: {
            xs: "95%",
            sm: "95%",
            md: "90%",
            lg: "90%",
            xl: "95%",
          },
          height: {
            xs: "auto",
            sm: "80%",
            md: "80%",
            lg: "80%",
            xl: "80%",
          },
          overflow: {
            xs: "scroll",
            sm: "scroll",
            md: "scroll",
            lg: "scroll",
            xl: "scroll",
          },
        }}
        align="end"
      >
        <TableContainer
          sx={{
            // maxHeight: 440,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "0rem",
          }}
        >
          <Table
            sx={{ width: "100%", height: "100%" }}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead sx={{ height: "4rem", marginTop: "0rem" }}>
              <TableRow sx={{ marginTop: "2rem" }}>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "medium",
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  Sr
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "medium",
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  Title
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "medium",
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  Date
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontSize: "medium",
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  View More
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody sx={{ marginTop: "5rem", paddingTop: "8rem" }}>
              {documents.map((document, index) => (
                <DocumentTableData
                  key={document._id}
                  index={index}
                  document={document}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default DocumentList;
