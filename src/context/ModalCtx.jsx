import React, { useContext, useState } from 'react';

const defaultState = {
    isModalOpen: false,
    openModal: () => {},
    closeModal: () => {},
};

const ModalContext = React.createContext(defaultState);

export const ModalContextProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const value = {
        isModalOpen,
        openModal,
        closeModal,
    };

    return (
        <>
            <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
        </>
    );
};

export const useModalContext = () => {
    return useContext(ModalContext);
};
