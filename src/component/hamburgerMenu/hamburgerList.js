import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { Button, Divider, fabClasses, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HamburgerList({ setState, setIsSelect }) {
  const navigate = useNavigate();
  return (
    <div>
      <Divider />
      <div
        style={{ marginTop: "15px", justifyContent: "center", display: "flex" }}
      >
        <List
          onMouseLeave={() => setIsSelect(0)}
          sx={{ width: "100%", maxWidth: 350, bgcolor: "background.paper" }}
        >
          <ListItem
            sx={{
              margin: "10px 0px 10px 0px",
              padding: "0px 6px 0px 6px ",
            }}
            disablePadding
          >
            <ListItemButton>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant="h6"
                    style={{ color: "rgba(0,0,0,.9)", fontSize: "26px",textAlign:"center" }}
                  >
                    Products Menu
                  </Typography>
                }
              />
            </ListItemButton>
      
          </ListItem>
          <Divider />
          <ListItem
            sx={{
              margin: "10px 0px 10px 0px",
              padding: "0px 6px 0px 6px ",
            }}
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                navigate(`/products/c76f7cef-f05f-4142-8a80-da88be374b66`);
                setState(false);
              }}
            >
              <ListItemText
                disableTypography
                // onClick={() => setState(false)}
                onClick={() => {
                  navigate(`/products/c76f7cef-f05f-4142-8a80-da88be374b66`);
                  setState(false);
                }}
                onMouseEnter={() => setIsSelect(1)}
                primary={
                  <Typography
                    variant="h5"
                    style={{ color: "rgba(0,0,0,.9)", fontSize: "24px" }}
                  >
                    Deneme
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem
            sx={{
              margin: "10px 0px 10px 0px",
              padding: "0px 6px 0px 6px ",
            }}
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                navigate(`/products/ca333a93-4630-4cd9-8176-2969887072c2`);
                setState(false);
              }}
            >
              <ListItemText
                disableTypography
                // onClick={() => setState(false)}

                onMouseEnter={() => setIsSelect(2)}
                primary={
                  <Typography
                    variant="h5"
                    style={{ color: "rgba(0,0,0,.9)", fontSize: "24px" }}
                  >
                    Sofas
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem
            sx={{
              margin: "10px 0px 10px 0px",
              padding: "0px 6px 0px 6px ",
            }}
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                navigate(`/products/ea6b1aaf-65c0-4023-9248-cfa2ac8e3cbc`);
                setState(false);
              }}
            >
              <ListItemText
                disableTypography
                // onClick={() => setState(false)}
                onClick={() => {
                  navigate(`/products/ea6b1aaf-65c0-4023-9248-cfa2ac8e3cbc`);
                }}
                onMouseEnter={() => setIsSelect(3)}
                primary={
                  <Typography
                    variant="h5"
                    style={{ color: "rgba(0,0,0,.9)", fontSize: "24px" }}
                  >
                    Beds
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem
            sx={{
              margin: "10px 0px 10px 0px",
              padding: "0px 6px 0px 6px ",
            }}
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                navigate(`/products/a76ec128-c8be-4234-be0c-158518585153`);
                setState(false);
              }}
            >
              <ListItemText
                disableTypography
                // onClick={() => setState(false)}

                onMouseEnter={() => setIsSelect(4)}
                primary={
                  <Typography
                    variant="h5"
                    style={{ color: "rgba(0,0,0,.9)", fontSize: "24px" }}
                  >
                    Chair
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem
            sx={{
              margin: "10px 0px 10px 0px",
              padding: "0px 6px 0px 6px ",
            }}
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                navigate(`/products/635e94eb-75ac-4933-a75c-07a21db3a319`);
                setState(false);
              }}
            >
              <ListItemText
                disableTypography
                // onClick={() => setState(false)}
                onClick={() => {
                  navigate(`/products/635e94eb-75ac-4933-a75c-07a21db3a319`);
                }}
                onMouseEnter={() => setIsSelect(5)}
                primary={
                  <Typography
                    variant="h5"
                    style={{ color: "rgba(0,0,0,.9)", fontSize: "24px" }}
                  >
                    Tables
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem
            sx={{
              margin: "10px 0px 10px 0px",
              padding: "0px 6px 0px 6px ",
            }}
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                navigate(`/products/775f98ce-a2f2-4c9b-bd70-fcb99481af9a`);
                setState(false);
              }}
            >
              <ListItemText
                disableTypography
                // onClick={() => setState(false)}

                onMouseEnter={() => setIsSelect(6)}
                primary={
                  <Typography
                    variant="h5"
                    style={{ color: "rgba(0,0,0,.9)", fontSize: "24px" }}
                  >
                    Bergere
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem
            sx={{
              margin: "10px 0px 10px 0px",
              padding: "0px 6px 0px 6px ",
            }}
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                navigate(`/products/888cce34-8ce8-4207-9628-be245d6930c0`);
                setState(false);
              }}
            >
              <ListItemText
                disableTypography
                // onClick={() => setState(false)}

                onMouseEnter={() => setIsSelect(7)}
                primary={
                  <Typography
                    variant="h5"
                    style={{ color: "rgba(0,0,0,.9)", fontSize: "24px" }}
                  >
                    Lampshade
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem
            sx={{
              margin: "10px 0px 10px 0px",
              padding: "0px 6px 0px 6px ",
            }}
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                navigate(`/products/1161f244-93cb-4415-9940-d2ceb6ea3a7c`);
                setState(false);
              }}
            >
              <ListItemText
                disableTypography
                // onClick={() => setState(false)}

                onMouseEnter={() => setIsSelect(8)}
                primary={
                  <Typography
                    variant="h5"
                    style={{ color: "rgba(0,0,0,.9)", fontSize: "24px" }}
                  >
                    Mirror
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem
            sx={{
              margin: "10px 0px 10px 0px",
              padding: "0px 6px 0px 6px ",
            }}
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                navigate(`/products/e557af58-0800-4ac6-8783-8ecc9f7cf337`);
                setState(false);
              }}
            >
              <ListItemText
                disableTypography
                // onClick={() => setState(false)}

                onMouseEnter={() => setIsSelect(9)}
                primary={
                  <Typography
                    variant="h5"
                    style={{ color: "rgba(0,0,0,.9)", fontSize: "24px" }}
                  >
                    Tv Units
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem
            sx={{
              margin: "10px 0px 10px 0px",
              padding: "0px 6px 0px 6px ",
            }}
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                navigate(`/products/f48538c8-e405-4e5b-bea7-28d948aba48a`);
                setState(false);
              }}
            >
              <ListItemText
                disableTypography
                // onClick={() => setState(false)}

                onMouseEnter={() => setIsSelect(10)}
                primary={
                  <Typography
                    variant="h5"
                    style={{ color: "rgba(0,0,0,.9)", fontSize: "24px" }}
                  >
                    Console Table
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </div>
    </div>
  );
}
