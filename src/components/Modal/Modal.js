import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import "./Modal.scss";

export default function TransitionsModal({
  btnFull = false,
  mainBtnFull = false,
  mainBtnVariant = "text",
  mainBtnColor = "default",
  className = "",
  isOpen = false,
  btnText = "",
  title,
  btnClass = "",
  childBtnText,
  children,
  mainBtnClass = "",
}) {
  const [open, setOpen] = React.useState(isOpen);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="modalContainer">
      {getBtn(
        btnText,
        handleOpen,
        mainBtnClass,
        mainBtnVariant,
        mainBtnColor,
        mainBtnFull
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={"modal"}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={"modalWindow " + className}>
            <h2 id="transition-modal-title">{title}</h2>
            <IconButton
              aria-label="Закрыть окно"
              className={"modalWindowClose"}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            {children}
            {getBtn(childBtnText, handleClose, btnClass, "", "", btnFull)}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

function getBtn(
  name,
  handle,
  btnClass = "",
  variant = "",
  color = "",
  isFull = false
) {
  if (name) {
    return (
      <Button
        className={"modalBtn " + btnClass}
        color="secondaty"
        onClick={handle}
        variant={variant}
        color={color}
        fullWidth={isFull}
      >
        {name}
      </Button>
    );
  }
}
