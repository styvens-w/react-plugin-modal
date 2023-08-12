# Getting Started with react-component-modal

Link [GitHub](https://github.com/styvens-w/react-plugin-modal) and Link [npm](https://www.npmjs.com/package/@styvens-w/react-component-modal).


## Definition

Modal is a React Component that takes in four props, and returns a div popping up on the screen with a message, and a button to close the popup and revert to a given link if any.

### Props :

@prop {boolean} display -> to display or not the popup.\
@prop {function} setDisplay -> to toggle the display.\
@prop {String} message -> message to display.\
@prop {Object} params -> { bgColour, textColour, btColour, btTextColour, link }

#### Params :
bgColour {string} -> The color of the modal.\
textColour {string} -> The text color of the modal.\
btColour {string} -> Button color.\
btTextColour {string} -> Button text color.\
link {string} -> Link to the page to display after clicking "Ok".


## How to install ?

To install this plugin, go to the root of the project and run the command :

### `npm install @styvens-w/react-component-modal`


## How to Use ?

### Exemple :

    import React, { useState } from "react";\
    import { Modal } from "@styvens-w/react-component-modal";\

    function Error() {
        const messageModal = "Error";
        const bgColour = "white";
        const textColour = "#96ab49";
        const btColour = "#96ab49";
        const btTextColour = "white";
        const paramsModal = { bgColour: bgColour, textColour: textColour, btColour: btColour, btTextColour: btTextColour, link: "/error" };
    
        const [openModal, setOpenModal] = useState(true);
    
        return (
            <Modal display={openModal} setDisplay={setOpenModal} message={errorMessage} params={paramsModal}/>
        )
    }