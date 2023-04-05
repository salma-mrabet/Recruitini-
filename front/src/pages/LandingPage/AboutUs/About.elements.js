import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AboutSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutHeading = styled.h1`
  color: #242424;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const AboutCard = styled(Link)`
  background: #cbd5e0;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 400px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const AboutCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const AboutCardIcon = styled.div`
  margin: 24px 0;
`;

export const AboutCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
  align-items: center;
`;

export const AboutCardCost = styled.h4`
  font-size: 40px;
  align-items: center;
`;

export const AboutCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
    align-items: center;
`;

export const AboutCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #242424;
`;

export const AboutCardFeature = styled.li`
  margin-bottom: 10px;
  align-items: center;
`;
