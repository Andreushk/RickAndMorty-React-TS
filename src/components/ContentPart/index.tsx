import { ICharactersResponse, ICharacterInfo } from '@responsesTypes/charactersResponse';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CenteredMessage, Loader } from '@common/index';
import PaginationLoader from './PaginationLoader';
import CharactersCards from './CharactersCards';
import BackToTopButton from './BackToTopButton';
import { StyledContainer } from './styles';
import api from '@constants/apiURL';

const ERROR_MESSAGE = 'Error in receiving characters data.';

const ContentPart: React.FC = () => {
  const [charactersData, setCharactersData] = useState<ICharacterInfo[]>([]);
  const [isNextPageLoading, setNextPageLoading] = useState<boolean>(false);
  const [isErrorInGettingCharactersData, setError] = useState<boolean>(false);
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);
  const [page, setPage] = useState<number>(1);

  const totalAmountOfPages = useRef<number | null>(null);
  const handleScrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect((): void => {
    const fetchCharactersData = async (): Promise<void> => {
      try {
        const response: ICharactersResponse = await api.get(`character/?page=${page}`).json();

        totalAmountOfPages.current = response.info.pages;
        const prevCharactersData: ICharacterInfo[] = [...charactersData];
        const newCharactersData: ICharacterInfo[] = prevCharactersData.concat(response.results);

        setNextPageLoading(false);
        setCharactersData(newCharactersData);
      } catch (error) {
        setError(true);
      }
    };

    fetchCharactersData();
  }, [page]);

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      if (handleScrollTimeout.current !== null) {
        clearTimeout(handleScrollTimeout.current);
      }

      handleScrollTimeout.current = setTimeout(() => {
        const scrollThreshold: number = 400;
        const currentPageThreshold: number = 1;

        if (
          window.scrollY > scrollThreshold &&
          page > currentPageThreshold &&
          !showBackToTopButton
        ) {
          setShowBackToTopButton(true);
        } else if (window.scrollY <= scrollThreshold && showBackToTopButton) {
          setShowBackToTopButton(false);
        }
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
      if (handleScrollTimeout.current !== null) {
        clearTimeout(handleScrollTimeout.current);
      }
    };
  }, [page, showBackToTopButton]);

  const handlePagination = useCallback((): void => {
    if (isNextPageLoading) return;

    setNextPageLoading(true);
    setPage(page + 1);
  }, [page, isNextPageLoading]);

  const handleScrollBack = useCallback((): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (charactersData.length === 0 && !isErrorInGettingCharactersData) {
    return (
      <StyledContainer>
        <Loader />
      </StyledContainer>
    );
  }

  if (isErrorInGettingCharactersData) {
    return (
      <StyledContainer>
        <CenteredMessage message={ERROR_MESSAGE} />
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <CharactersCards charactersData={charactersData} paginationCB={handlePagination} />
      {isNextPageLoading && <PaginationLoader />}
      {showBackToTopButton && <BackToTopButton clickCB={handleScrollBack} />}
    </StyledContainer>
  );
};

export default ContentPart;
