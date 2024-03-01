import React from 'react';
import ApiItem from '@theme-original/ApiItem';
import DocItem from '@theme-original/DocItem';

export default function ApiItemWrapper(props) {
  if (
    props.location?.pathname?.includes('admin-guide')
    || props.location?.pathname?.startsWith('/network/hubble')
    || props.location?.pathname?.startsWith('/network/soroban-rpc')
  ) {
    return (
      <>
        <DocItem {...props} />
      </>
    );
  }
  return (
    <>
      <ApiItem {...props} />
    </>
  );
}
