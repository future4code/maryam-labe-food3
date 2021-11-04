import React, {useEffect, useState} from "react";
import { DivFooter, DivButtons, PaperStyled } from "./FooterStyles";
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
  const [toggleCart, setToggleCart] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);

  const onClickButton = (goTo, setState) => {
    goTo(history);
    setState(true);
    setToggleHome(!toggleHome)
  }

  useEffect(() => {

  }, [onClickButton]);

  return (
    <PaperStyled sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation showLabels>
        <DivButtons>
          {toggleHome ? 
              <IconButton color="primary" aria-label="add to shopping cart">
                <HomeOutlinedIcon fontSize="large" onClick={() => onClickButton(goToFeed, setToggleHome)}/>
              </IconButton> 
                :
              <IconButton color="secondary" aria-label="add to shopping cart">
                <HomeOutlinedIcon fontSize="large" onClick={() => onClickButton(goToFeed, setToggleHome)}/>
              </IconButton> 
          }
          {toggleCart ? 
              <IconButton color="primary" aria-label="add to shopping cart">
                <ShoppingCartOutlinedIcon fontSize="large" onClick={() => onClickButton(goToCart, setToggleCart)}/>
              </IconButton> 
                :
              <IconButton color="secondary" aria-label="add to shopping cart">
                <ShoppingCartOutlinedIcon fontSize="large" onClick={() => onClickButton(goToCart, setToggleCart)}/>
              </IconButton> 
          }
          {toggleProfile ? 
              <IconButton color="primary" aria-label="add to shopping cart">
                <PersonOutlineOutlinedIcon fontSize="large" onClick={() => onClickButton(goToProfile, setToggleProfile)}/>
              </IconButton> 
                :
              <IconButton color="secondary" aria-label="add to shopping cart">
                <PersonOutlineOutlinedIcon fontSize="large" onClick={() => onClickButton(goToProfile, setToggleProfile)}/>
              </IconButton> 
          }
        {/* <IconButton color="primary" aria-label="add to shopping cart">
          <PersonOutlineOutlinedIcon fontSize="large" onClick={() => goToProfile(history)}/>
        </IconButton> */}
        </DivButtons>
        </BottomNavigation>
    </PaperStyled>
  );
};

export default Footer;
