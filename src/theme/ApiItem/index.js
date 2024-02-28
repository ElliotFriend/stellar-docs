import React from 'react';
import ApiItem from '@theme-original/ApiItem';
import DocItem from '@theme-original/DocItem';

export default function ApiItemWrapper(props) {
  if (
    props.location?.pathname?.includes('admin-guide')
    || props.location?.pathname?.startsWith('/platforms/hubble')
  ) {
    return (
      <>
        <DocItem {...props} />
      </>
    )
  }
  return (
    <>
      <ApiItem {...props} />
    </>
  );
}
