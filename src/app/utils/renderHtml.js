// utils/renderHtml.js
export const renderHtml = (content) => {
    return { __html:content.join('') };
  };
  