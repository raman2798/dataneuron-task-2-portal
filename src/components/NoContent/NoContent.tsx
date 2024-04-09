/* eslint-disable react/no-danger */
import { FC, ReactElement } from 'react';
import EmptyImg from '@/assets/images/empty.png';
import { CenteredEmptyContentWrapper, EmptyContentWrapper } from './NoContent.style';
import { NoContentProps } from './NoContent.types';

const NoContent: FC<NoContentProps> = ({ textContent }): ReactElement => {
  const createMarkup = (): { __html: string } => ({ __html: textContent });

  return (
    <CenteredEmptyContentWrapper>
      <EmptyContentWrapper>
        <img src={EmptyImg} alt="empty" />
        <p dangerouslySetInnerHTML={createMarkup()} />
      </EmptyContentWrapper>
    </CenteredEmptyContentWrapper>
  );
};

export { NoContent };
