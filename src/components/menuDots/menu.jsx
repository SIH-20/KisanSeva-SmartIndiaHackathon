import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./menu.css";
const options = [
 'BlackList',
 'Warn'
];

const ITEM_HEIGHT = 48;

export default function LongMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
   

  };
 const handleCloseAndSelect = (type)=>{
  setAnchorEl(null);

  props.open(type);
 }
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
      className="bt-pos"
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        
          <MenuItem selected={false} onClick={()=> handleCloseAndSelect('BlackList')}>
            BlackList
          </MenuItem>
          <MenuItem selected={false} onClick={()=> handleCloseAndSelect('Warn')}>
      Warn<sup>({props.warnings})</sup>
          </MenuItem>
     
      </Menu>
    </div>
  );
}
