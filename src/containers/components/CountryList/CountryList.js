import React, { useState, useEffect, useCallback } from 'react';

import CountryListItem from './CountryListItem';

import { appSettings } from '../../../data';

const CountryList = ({ countries }) => {
  // Helper function to get new item set based on page number parameter.
  // We're using the useCallback hook because we don't want this function
  // to be "re-created" in each render cycle (for example when the countriesShown
  // state variable changes).
  const getNextItemSet = useCallback(page => (
    countries.slice(appSettings.itemsPerPage * (page - 1), appSettings.itemsPerPage * page)
  ), [countries]);

  // Local state
  const [isFetching, setIsFetching] = useState(false);
  const [countriesShown, setCountriesShown] = useState(getNextItemSet(1));
  const [currentPage, setCurrentPage] = useState(1);

  // Effect that runs only when component is mounted.
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle scroll event. We make sure to only update our state
  // if user has reached the end of the page.
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setIsFetching(true);
  };

  // Function called each time that isFetching is set to true.
  // Here we calculate next page and update our local state.
  const loadMoreItems = useCallback(() => {
    // Only load more items when there are actually more items to load
    if (countries.length > countriesShown.length) {
      const nextPage = currentPage + 1;

      let newCountries = [...countriesShown];
      newCountries = countriesShown.concat(getNextItemSet(nextPage));

      setCurrentPage(nextPage);
      setCountriesShown(newCountries);
      setIsFetching(false);
    }
  }, [currentPage]);

  // Effect that runs each time that isFetching is changed.
  // Second parameter is loadMoreItems but this function does not get "re-created"
  // on each render cycle because we're using useCallback (see above) so
  // that does not cause the effect to be triggered.
  useEffect(() => {
    if (isFetching) {
      loadMoreItems();
    }
  }, [isFetching, loadMoreItems]);

  return countriesShown.map(country => <CountryListItem key={country.code} country={country} />);
};

export default CountryList;
