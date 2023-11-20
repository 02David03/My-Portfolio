import Welcome from "./sections/Welcome";
import Skills from "./sections/Skills";
import {SectionsContainer, Section} from "react-fullpage";
import './about-me.scss';

function AboutMe() {
  const sectionOptions = {
    sectionClassName:     'section',
    anchors:              ['Welcome', 'Skills' ],
    navigation:           true,
    verticalAlign:        false,
    arrowNavigation:      true
  };

  return (
    <SectionsContainer {...sectionOptions}>
      <Section className="md:h-screen" >
        <Welcome />
      </Section>
      <Section className="h-screen snap-start">
        <Skills />
      </Section>
    </SectionsContainer>
  );
}

export default AboutMe;