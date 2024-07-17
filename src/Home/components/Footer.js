import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { config } from "../../config";
// import solIcon from "../assets/SOLIcon.png";
import tgIcon from "../assets/TGIcon.png";
import twIcon from "../assets/TWIcon.png";

export default function Footer() {
  return (
    <div>
      <Typography variant="h7" marginTop={2} textAlign={'left'} style={{ paddingLeft: "5px", paddingRight: "5px" }}>
        <br/>
          <span style={{ display: 'block', paddingLeft: "10px", paddingRight: "10px" }}><b>#1 - STAKE</b> $SOL to purchase $ORANGES.</span>
          <span style={{ display: 'block', paddingLeft: "10px", paddingRight: "10px" }}><b>#2 - COMPOUND:</b> To maximize your earnings, click on the <b>"COMPOUND"</b> button <br/>
            This action will automatically reinvest your rewards back into $ORANGES</span>
            <span style={{ display: 'block', paddingLeft: "10px", paddingRight: "10px" }}><b>#3 - CLAIM REWARDS:</b> This will transfer your accumulated $SOL rewards directly into your wallet.</span>
      </Typography>

      <Typography variant="h7" marginTop={2}>
      <br/>
      <i>The key to maximizing your rewards lies in the quantity of oranges you hold and how frequently you compound them. The more oranges you accumulate and the more often you reinvest your rewards, the greater the potential for earning more  $SOL rewards.</i>

      </Typography>
      
      <Grid container justifyContent="center" spacing={3} marginTop={4}>
        <Grid item>
          <a href="https://twitter.com/Orange_Farmer_" target="__blank">
            <img src={twIcon} alt="" width={44} height={44} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://t.me/orangefarmer" target="__blank">
            <img src={tgIcon} alt="" width={46} height={46} />
          </a>
        </Grid>
      </Grid>
      <center>
      <Typography variant="h8" marginTop={4}>
        <br/>
        COPYRIGHT © 2024 Orange Farmer
      </Typography>
      </center>
    </div>
  );
}
