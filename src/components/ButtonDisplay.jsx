import Button from './Button';
import VariantSection from './VariantSection';
import ElementSection from './ElementSection';

export default function ButtonDisplay() {
  return (
    <ElementSection title="Button">
      <VariantSection
        id="btn-size"
        title="Size"
        availableVariants={['small', 'medium', 'large']}
      >
        <Button size="small">Button</Button>
        <Button size="medium">Button</Button>
        <Button size="large">Button</Button>
      </VariantSection>
      <VariantSection
        id="btn-color"
        title="Color"
        availableVariants={['gray', 'red', 'yellow', 'blue']}
      >
        <Button color="gray">Button</Button>
        <Button color="red">Button</Button>
        <Button color="yellow">Button</Button>
        <Button color="blue">Button</Button>
      </VariantSection>
      <VariantSection
        id="btn-disabled"
        title="Disabled"
        availableVariants={['disabled']}
      >
        <Button disabled>Button</Button>
      </VariantSection>
    </ElementSection>
  );
}
