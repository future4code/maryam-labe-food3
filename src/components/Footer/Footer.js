import React, {useEffect, useState} from "react";
import { DivButtons, PaperStyled } from "./FooterStyles";
import { useHistory } from "react-router";
import { goToFeed, goToCart, goToProfile } from "../../routes//coordinator";

import BottomNavigation from '@mui/material/BottomNavigation';
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const Footer = () => {
  const history = useHistory();
  const [toggleHome, setToggleHome] = useState(true);
  const [toggleCart, setToggleCart] = useState(true);
  const [toggleProfile, setToggleProfile] = useState(true);

  const onClickButton = (goTo, state, setState) => {
    setState(!state);
    setToggleHome(false)
    goTo(history);
  }

  console.log(toggleProfile)

  return (
    <PaperStyled sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation showLabels>
        <DivButtons>
          {toggleHome ? 
              <IconButton color="primary" aria-label="add to shopping cart" onClick={() => onClickButton(goToFeed, toggleHome, setToggleHome)}>
                <HomeOutlinedIcon fontSize="large" />
              </IconButton> 
                :
              <IconButton color="secondary" aria-label="add to shopping cart" onClick={() => onClickButton(goToFeed, toggleHome, setToggleHome)}>
                <HomeOutlinedIcon fontSize="large" />
              </IconButton> 
          }
          {toggleCart ? 
              <IconButton color="primary" aria-label="add to shopping cart" onClick={() => onClickButton(goToCart, toggleCart, setToggleCart)}>
                <ShoppingCartOutlinedIcon fontSize="large" />
              </IconButton> 
                :
              <IconButton color="secondary" aria-label="add to shopping cart" onClick={() => onClickButton(goToCart, toggleCart, setToggleCart)}>
                <ShoppingCartOutlinedIcon fontSize="large" />
              </IconButton> 
          }
          {toggleProfile ? 
              <IconButton color="primary" aria-label="add to shopping cart" onClick={() => onClickButton(goToProfile, toggleProfile, setToggleProfile)}>
                <PersonOutlineOutlinedIcon fontSize="large" />
              </IconButton> 
                :
              <IconButton color="secondary" aria-label="add to shopping cart" onClick={() => onClickButton(goToProfile, toggleProfile, setToggleProfile)}>
                <PersonOutlineOutlinedIcon fontSize="large" />
              </IconButton> 
          }
        </DivButtons>
      </BottomNavigation>
    </PaperStyled>
  );
};

export default Footer;
