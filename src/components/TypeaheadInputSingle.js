// @flow

import React from 'react';

import Hint from './Hint';
import Input from './Input';

import withClassNames from '../behaviors/classNames';

import type { RefCallback, ReferenceElement, ShouldSelect } from '../types';

type Props = {
  inputRef: RefCallback<HTMLInputElement>,
  referenceElementRef: RefCallback<ReferenceElement>,
  shouldSelectHint?: ShouldSelect,
};

export default withClassNames(({
  inputRef,
  referenceElementRef,
  shouldSelectHint,
  ...props
}: Props) => (
  <Hint shouldSelect={shouldSelectHint}>
    <Input
      {...props}
      ref={(node) => {
        inputRef(node);
        referenceElementRef(node);
      }}
    />
  </Hint>
));
