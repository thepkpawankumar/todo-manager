import { Typography, IconButton, Menu, MenuItem, useMediaQuery} from "@material-ui/core";
import {
  DeleteTwoTone as DeleteIcon,
  EditTwoTone as EditIcon,
  MoreVert,
  MoreHoriz
} from "@material-ui/icons";
import React, { useState } from "react";

const ITEM_HEIGHT = 48;

function useChangeMenuIcon() {
  const Icon = () =>
    useMediaQuery("(max-width: 768px)") ? <MoreVert /> : <MoreHoriz />;
  return Icon;
}

export default function ActionsMenu({
  deleteTodo,
  setEditOpen,
  todo,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const MenuIcon = useChangeMenuIcon();

  const options = [
    {
      name: "Edit",
      iconColor: "primary",
      textColor: "primary",
      icon: EditIcon,
      method: () => {
        setEditOpen(true);
        setAnchorEl(null);
      },
    },
    {
      name: "Delete",
      iconColor: "error",
      textColor: "error",
      icon: DeleteIcon,
      method: (e) => {
        deleteTodo(e);
        setAnchorEl(null);
      },
    },
  ];
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleEvent = (option, e) => {
   if (option === "Edit") setEditOpen(true);
    else if (option === "Delete") deleteTodo(e);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        centerRipple={false}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleEvent}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.name} onClick={option.method}>
            <option.icon
              color={option.iconColor}
              htmlColor={option.customColor}
            />
            &nbsp;
            <Typography
              color={option.textColor}
              style={{ color: option.customColor }}
            >
              {option.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
