import Card from './Card';
import VariantSection from './VariantSection';
import ElementSection from './ElementSection';
import kodamaImage from '../assets/kodama.jpg';
import nightwalkerImage from '../assets/nightwalker.png';

export default function CardDisplay() {
  return (
    <ElementSection title="Card">
      <VariantSection
        id="card-card"
        title="Card"
        availableVariants={['imgSource', 'altText', 'link']}
      >
        <Card
          imgSource={kodamaImage}
          altText="A picture of a Kodama."
          link="https://en.wikipedia.org/wiki/Kodama_(spirit)"
        >
          <p>
            <span className="font-bold">Kodama</span> (コダマ) are children of
            old trees, and are a sign that the forest is healthy. They have
            white skin with black and grey, glowing eyes.
          </p>
        </Card>
        <Card
          imgSource={nightwalkerImage}
          altText="A picture of the Nightwalker."
        >
          <p>
            The <span className="font-bold">Forest Spirit</span> (シシ神)
            transforms into a gigantic, translucent humanoid during the night
            called the Night-Walker.
          </p>
        </Card>
      </VariantSection>
    </ElementSection>
  );
}

// href, imgAlt, imgSrc, children
