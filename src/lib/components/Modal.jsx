import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: ${(props) => (props.displayIt === true ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 0 !important;
  background: rgba(255, 255, 255, 0);
`;

const Button = styled.button`
	display: block;
	width: 100%;
	padding: 8px;
	font-size: 1rem;
	font-weight: bold;
	margin-top: 1rem;
	border-color: ${(props) => props.bgColor};
	background-color: ${(props) => props.bgColor};
	color: ${(props) => props.Color};
	cursor: pointer;
`;

const Overlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background: #333333d3;
`;

const ModalInfo = styled.div`
	display: block;
	width: 95%;
	height: auto;
	max-width: 500px;
	min-width: 300px;
	padding: 30px;
    background: ${(props) => props.bgColor};
	border-radius: 10px;
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Message = styled.p`
  margin-top: 0;
  font-family: Montserrat, sans-serif;
  font-size: 26px;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.Color};
  background-color: rgb(255, 255, 255, 0);
`;

/**
 * Modal is a React Component that takes in four props, and returns a div popping up on the screen with a message,
 * and a button to close the popup and revert to a given link if any.
 *
 * @prop {Boolean} display to display or not the popup
 * @prop {function} setDisplay to toggle the display
 * @prop {String} message message to display
 * @prop {Object} params { bgColor, Color, link }
 *
 * @returns React.JSX.Element React component.
 */
function Modal({ display, setDisplay, message, params }) {
    const navigate = useNavigate();

    const toggleModal = () => {
        setDisplay(!display);
        if (params.link) navigate(params.link);
    };

    return (
        <ModalContainer displayIt={display}>
            <Overlay></Overlay>
            <ModalInfo bgColor={params.bgColor}>
                <Message Color={params.textColor}>{message}</Message>
                <Button bgColor={params.btColor} Color={params.btTextColor} onClick={toggleModal}>
                    OK
                </Button>
            </ModalInfo>
        </ModalContainer>
    );
}

export default Modal;