import Card from './Card';
import VariantSection from './VariantSection';
import ElementSection from './ElementSection';
import kodamaImage from '../assets/kodama.jpg';
import nightwalkerImage from '../assets/nightwalker.png';

export default function CardDisplay() {
  return (
    <ElementSection title="Card">
      <VariantSection
        title="Card"
        availableVariants={['imgSource', 'altText', 'link']}
      >
        <Card
          imgSource={kodamaImage}
          altText="A picture of a Kodama."
          link="https://google.com"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Card>
        <Card
          imgSource={nightwalkerImage}
          altText="A picture of the Nightwalker."
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Card>
      </VariantSection>
    </ElementSection>
  );
}
