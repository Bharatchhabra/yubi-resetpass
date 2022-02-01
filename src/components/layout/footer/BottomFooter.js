import * as React from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  Typography,
  Link,
} from "@mui/material";
import logoYubiFooter from "../../../assets/images/logoYubiFooter.png";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import './footer.scss'

export default function BottomFooter() {
  return (
    <Box className="bottom_footer">
      <Grid container spacing={0} justifyContent="center" textAlign="center">
        <Grid item xs={12} lg={5}>
          <Typography sx={{ mt: 1, mb: 2 }} variant="div" component="div">
            <img src={logoYubiFooter} alt="Logo Footer"/>
          </Typography>
          <List sx={{ display: "flex", }}>
            <ListItem>
              <Link href="#" underline="none" className="footer_links">
                <FiTwitter />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#" underline="none" className="footer_links">
                <FiLinkedin />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#" underline="none" className="footer_links">
                <FiInstagram />
              </Link>
            </ListItem>
          </List>
          <Link href="#" underline="none" className="copyright">
          ©Yubi Corporation 2021
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
