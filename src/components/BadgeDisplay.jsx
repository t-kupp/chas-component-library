import Badge from './Badge';
import VariantSection from './VariantSection';
import ElementSection from './ElementSection';

export default function ButtonDisplay() {
  return (
    <ElementSection title="Badge">
      <VariantSection
        id="badge-color"
        title="Color"
        availableVariants={['gray', 'red', 'green', 'cyan', 'purple', 'yellow']}
      >
        <Badge color="gray">Badge</Badge>
        <Badge color="red">Badge</Badge>
        <Badge color="green">Badge</Badge>
        <Badge color="cyan">Badge</Badge>
        <Badge color="purple">Badge</Badge>
        <Badge color="yellow">Badge</Badge>
      </VariantSection>
      <VariantSection
        id="badge-size"
        title="Size"
        availableVariants={['small', 'large']}
      >
        <Badge size="small">Badge</Badge>
        <Badge size="large">Badge</Badge>
      </VariantSection>
      <VariantSection
        id="badge-icon"
        title="Icon"
        availableVariants={[
          'warning',
          'checkmark',
          'info',
          'trending',
          'achievement',
        ]}
      >
        {' '}
        <Badge color="red" icon="warning">
          Badge
        </Badge>
        <Badge color="green" icon="checkmark">
          Badge
        </Badge>
        <Badge color="cyan" icon="info">
          Badge
        </Badge>
        <Badge color="purple" icon="trending">
          Badge
        </Badge>
        <Badge color="yellow" icon="achievement">
          Badge
        </Badge>
      </VariantSection>
    </ElementSection>
  );
}
