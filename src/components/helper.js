import React from 'react';

export const DisplayFormikState = props =>
  <div style={{ margin: '1rem 0' }}>
   {/* // <h3 style={{ fontFamily: 'monospace' }} /> */}
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem',
      }}
    >
      <strong>props</strong> ={' '}
      {JSON.stringify(props, null, 2)}
    </pre>
  </div>;

export const MoreResources = props =>
  <div>
    <hr style={{ margin: '3rem 0' }} />
    <h3>More Examples</h3>   
    
  </div>;
