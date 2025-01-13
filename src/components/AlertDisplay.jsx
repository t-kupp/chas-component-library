import Alert from './Alert';
import VariantSection from './VariantSection';
import ElementSection from './ElementSection';

export default function ButtonDisplay() {
  return (
    <ElementSection title="Alert">
      <VariantSection
        id="alert-color"
        title="Color"
        availableVariants={['gray', 'green', 'red']}
      >
        <Alert color="gray">Info Alert!</Alert>
        <Alert color="green">Info Alert!</Alert>
        <Alert color="red">Info Alert!</Alert>
      </VariantSection>
      <VariantSection
        id="alert-icon"
        title="Icon"
        availableVariants={['info', 'checkmark', 'question']}
      >
        <Alert color="gray" icon="info">
          Info Alert!
        </Alert>
        <Alert color="green" icon="checkmark">
          Info Alert!
        </Alert>
        <Alert color="red" icon="question">
          Info Alert!
        </Alert>
      </VariantSection>
    </ElementSection>
  );
}
