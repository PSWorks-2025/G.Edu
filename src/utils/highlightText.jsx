const highlightText = (text, searchText) => {
  const result = text.replace(new RegExp(searchText, 'gi'), (match) => {
    return `<span class="bg-yellow-200">${match}</span>`;
  });
  return result;
};

export default highlightText;
