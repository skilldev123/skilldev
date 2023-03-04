import React, { useState } from 'react';

function TextTruncate(props) {
  const { text, limit } = props;
  const [isHovering, setIsHovering] = useState(false);
  const truncatedText = text.length > limit ? text.substring(0, limit) + '...' : text;

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ position: 'relative', cursor: 'default'}}
    >
      {isHovering ?
      <>
        <div className='inner-text-table-header'>
          {text}
        </div>
         <div>{truncatedText}</div>
         </>
        :
        <div>{truncatedText}</div>
      }
    </div>
  );
}

export default TextTruncate;


