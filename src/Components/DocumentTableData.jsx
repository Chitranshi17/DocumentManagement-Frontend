import { Button, TableCell, TableRow } from "@mui/material";
import React from "react";
// import { useDispatch } from "react-redux";

import { Link} from "react-router-dom";
// import { getDeleteDocument } from "../feature/document/documentSlice";





const DocumentTableData = ({ document, index }) => {

// const dispatch = useDispatch();
// const navigate = useNavigate();

// const handleDelete = () => {
//   console.log("Delete");
//   dispatch(getDeleteDocument(document._id));
//   navigate("/document/allDocument");
// };



  return (
    <>
      <TableRow>
        <TableCell align="center" sx={{ fontSize: "1.6rem" }}>
          {index + 1}
        </TableCell>
        <TableCell align="center" sx={{ fontSize: "1.6rem" }}>
          {/* iPhone */}
          {document.title}
        </TableCell>
        <TableCell align="center" sx={{ fontSize: "1.3rem", width: "30%" }}>
          {new Date(document.createdAt).toLocaleDateString("en-In")}
        </TableCell>

        <TableCell align="center" sx={{ fontSize: "1.6rem" }}>
          <Link to={`/document/${document._id}`}>
            <Button
              variant="contained"
              color="warning"
              sx={{ borderRadius: "0" }}
            >
              View
            </Button>
          </Link>
          {/* <Button onClick={handleDelete}>
            Delt
          </Button> */}
        </TableCell>
      </TableRow>
    </>
  );
};

export default DocumentTableData;
