import React from "react";
import { Card, Typography, Button } from "@material-ui/core";
import { useStyles } from "./card.style";
import { ProjectModel } from "../../../../store/projects";
import { MonetizationOn, SearchOutlined } from "@material-ui/icons";
import { useStoreState } from "../../../../store";

const ProjectCard: React.FC<ProjectModel> = props => {
  const classes = useStyles();
  const { web3, address, isLoggedIn } = useStoreState(state => state.user);
  const { name, budget, imageURL, category, location, address: target } = props;
  const handleFundClick = async () => {
    const ethAmount: string = "1";
    const res = await web3.eth.sendTransaction({
      from: address,
      to: target,
      value: web3.utils.toWei(ethAmount, "ether")
    });
  };
  return (
    <Card className={classes.card}>
      <img src={imageURL} className={classes.img} alt="User Profile" />
      <div className={classes.container}>
        <Typography>{name}</Typography>
        <div className={classes.rowContainer}>
          <Typography variant="caption">{category}</Typography>
          <span className={classes.dot}>&#183;</span>

          <Typography variant="caption">{location}</Typography>
        </div>
      </div>
      <div className={classes.container}>
        <Typography>$ {budget}</Typography>
        <div className={classes.rowContainer}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<SearchOutlined />}
          >
            VIEW
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            startIcon={<MonetizationOn />}
            onClick={handleFundClick}
            disabled={!isLoggedIn}
          >
            FUND
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
