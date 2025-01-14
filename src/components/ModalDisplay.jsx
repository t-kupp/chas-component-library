import ElementSection from './ElementSection';
import VariantSection from './VariantSection';
import Modal from './Modal';
import { useState } from 'react';

export default function ModalDisplay() {
  return (
    <ElementSection title="Modal">
      <VariantSection title="Modal" availableVariants={['size']}>
        <Modal
          show={false}
          title="Open Modal"
          size="large"
          color="blue"
        ></Modal>
      </VariantSection>
    </ElementSection>
  );
}
