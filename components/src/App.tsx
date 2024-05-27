import React from 'react';
import { useState } from 'react';
import './App.css';
import { Modal } from 'vwh-wtc-lv2-payments-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <h1 style={{ marginBottom: '20px' }}>Component Modules</h1>
      <button type='button' onClick={openModal}>
        모달 열기
      </button>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        type='prompt'
        size='medium'
        title='Modal Title'
        description='Modal Description'
        placeholder='Enter Text'
        confirmLabel='Confirm'
        cancelLabel='Cancel'
        onConfirm={() => console.log('onConfirm')}
        onCancel={() => console.log('onCancel')}
        onClose={() => console.log('onClose')}
        onOpen={() => console.log('onOpen')}
      ></Modal>
    </>
  );
}

export default App;
