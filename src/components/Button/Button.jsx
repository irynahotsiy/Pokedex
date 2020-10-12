import React from 'react';

import {ButtonBox, LoadButton} from './style';

export function Button(props) {
  return (
    <ButtonBox>
      <LoadButton onClick={() => props.onLoadMore()} disabled={props.isLoaded}>Load More</LoadButton>
    </ButtonBox>
  )
}