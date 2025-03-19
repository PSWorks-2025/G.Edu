const highlightText = (text, subtextToHighlight) => {
  const result = text.replace(new RegExp(subtextToHighlight, 'gi'), (match) => {
    return `<span class="bg-yellow-200">${match}</span>`;
  });
  return result;
};

export default highlightText;
