import React from 'react';

import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  AboutSection,
  AboutWrapper,
  AboutHeading,
  AboutContainer,
  AboutCard,
  AboutCardInfo,
  AboutCardIcon,
  AboutCardPlan,
  AboutCardCost,
  AboutCardLength,
  AboutCardFeatures,
  AboutCardFeature
} from './About.elements';

function About(props) {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <AboutSection id='about-us'>
        <AboutWrapper>
          <AboutHeading>3 Good Reasons to use Recruitini</AboutHeading>
          <AboutContainer>
            <AboutCard to='/sign-up'>
              <AboutCardInfo>
                <AboutCardIcon>
                  <GiRock />
                </AboutCardIcon>
                <AboutCardPlan>Discover New Opportunities</AboutCardPlan>
                
              
                <AboutCardFeatures>
                  <AboutCardFeature>100 New Users</AboutCardFeature>
                  <AboutCardFeature>$10,000 Budget</AboutCardFeature>
                  <AboutCardFeature>Retargeting analytics</AboutCardFeature>
                </AboutCardFeatures>
         
              </AboutCardInfo>
            </AboutCard>
            <AboutCard to='/sign-up'>
              <AboutCardInfo>
                <AboutCardIcon>
                  <GiCrystalBars />
                </AboutCardIcon>
                <AboutCardPlan>No need to search anymore</AboutCardPlan>
                
                <AboutCardFeatures>
                  <AboutCardFeature>Do you have a resume?</AboutCardFeature>
                  <AboutCardFeature>we find job offers that match perfectly your profile.</AboutCardFeature>
                  <AboutCardFeature>Lead Gen Analytics</AboutCardFeature>
                </AboutCardFeatures>
                
              </AboutCardInfo>
            </AboutCard>
            <AboutCard to='/sign-up'>
              <AboutCardInfo>
                <AboutCardIcon>
                  <GiCutDiamond />
                </AboutCardIcon>
                <AboutCardPlan>Are you hiring? </AboutCardPlan>
      
                <AboutCardFeatures>
                  <AboutCardFeature>Hiring has never been easier and more cost-effective!</AboutCardFeature>
                  <AboutCardFeature>We provide personalized support !</AboutCardFeature>
                  <AboutCardFeature>24/7 Support</AboutCardFeature>
                </AboutCardFeatures>
               
              </AboutCardInfo>
            </AboutCard>
          </AboutContainer>
        </AboutWrapper>
      </AboutSection>
    </IconContext.Provider>
  );
}
export default About;
