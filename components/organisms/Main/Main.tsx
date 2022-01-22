import { memo } from 'react';
import { Sofa } from '../../../types';
import Header from '../../molecules/Header/Header';
import { HomeBanner } from '../../molecules/HomeBanner/HomeBanner';
import { StyledMainWrapper, StyledMainContent } from './Main.styles';

// type MainProps = {
//   readonly results: Boots[]
// }

export const Main = () => {
  return (
    <StyledMainWrapper>
      <Header />
      <StyledMainContent>
        <HomeBanner />
      </StyledMainContent>
    </StyledMainWrapper>
  );
};
