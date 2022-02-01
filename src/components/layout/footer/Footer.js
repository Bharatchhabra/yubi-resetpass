import * as React from "react";
import {
  Box,
  Grid,
  List,
  ListItemText,
  ListItem,
  Typography,
} from "@mui/material";

export default function Footer() {
  return (
    <Box className="footer_section">
      <Grid container spacing={0}>
        <Grid item xs={12} lg={3}>
          <Typography className="footer_link_heading" variant="h6" component="div">
            Categories
          </Typography>
          <List>
            <ListItem className="footer_list_link">
              <ListItemText primary=" Agriculture" />
            </ListItem>
            <ListItem className="footer_list_link">
              <ListItemText primary="Energy" />
            </ListItem>
            <ListItem className="footer_list_link">
              <ListItemText primary="Forest Products" />
            </ListItem>
            <ListItem className="footer_list_link">
              <ListItemText primary="Livestock & Meat" />
            </ListItem>
            <ListItem className="footer_list_link">
              <ListItemText primary="Metals" />
            </ListItem>
            <ListItem className="footer_list_link">
              <ListItemText primary="OEM Products" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Typography className="footer_link_heading" variant="h6" component="div">
            About
          </Typography>
          <List>
          <ListItem className="footer_list_link">
            <ListItemText primary=" Careers" />
            </ListItem>
            <ListItem className="footer_list_link">
              <ListItemText primary="Press & News" />
            </ListItem>
            <ListItem className="footer_list_link">
              <ListItemText primary="Partnerships" />
            </ListItem>
            <ListItem className="footer_list_link">
              <ListItemText primary="Terms of Use" />
            </ListItem>
            <ListItem className="footer_list_link">
              <ListItemText primary="Investor Relations" />
            </ListItem>
            <ListItem className="footer_list_link">
              <ListItemText primary="OEM Products" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Typography className="footer_link_heading" variant="h6" component="div">
            Support
          </Typography>
          <List>
            <ListItem className="footer_list_link">
              <ListItemText primary="Help & Support" />
            </ListItem>
            <ListItem className="footer_list_link">
              <ListItemText primary="Trust & Safety" />
            </ListItem>
            <ListItem className="footer_list_link">
              <ListItemText primary="Selling on Yubi" />
            </ListItem>
            <ListItem className="footer_list_link">
              <ListItemText primary="Buying on Yubi" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Typography className="footer_link_heading" variant="h6" component="div">
            Community
          </Typography>
          <List>
            <ListItem className="footer_list_link">
              <ListItemText primary="Events" />
            </ListItem>
            <ListItem className="footer_list_link">
              <ListItemText primary="Blog" />
            </ListItem>
            <ListItem className="footer_list_link">
              <ListItemText primary="Forum" />
            </ListItem>
            <ListItem className="footer_list_link">
              <ListItemText primary="Community Standards" />
            </ListItem>
            <ListItem className="footer_list_link">
              <ListItemText primary="Podcasts" />
            </ListItem>
            <ListItem className="footer_list_link">
              <ListItemText primary="Invite Others" />
            </ListItem>
            <ListItem className="footer_list_link">
              <ListItemText primary="Become a Seller" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
