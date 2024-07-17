import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import logo from "../../assets/FullLogo.png";
import "../../index.css";

const Wrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: 24,
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
  },
}));

export default function Header() {
  return (
    <Wrapper>
      <img src={logo}  className="logo" alt="" style={{ marginTop: "-20px"}}/>
      <hr />
      <Typography variant="h6" marginTop={1} style={{color: "black"}}>
        <b>Get your hands dirty in the Orange fields and enjoy the fruits of our $SOL reward pool. Harvest daily gains of up to 12% and score a bonus of up to 16% for bringing in fellow farmers. Join the farm today!</b>
       &nbsp;
       <strong>(<a href="https://orangefarmer.gitbook.io/orange-farmer/" target="_blank" style={{ color: "black" }}>Documentation</a>)</strong>
      </Typography>

      
    </Wrapper>
  );
}
