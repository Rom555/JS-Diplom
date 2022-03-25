export const accordion = () => {
  const accordion = document.querySelector('.faq .accordion');
  const titleBlocks = document.querySelectorAll('.faq .title_block');

  let timeout;

  accordion.addEventListener('click', (e) => {
    if (e.target.classList.contains('title_block')) {
      e.preventDefault();

      if (!e.target.classList.contains('msg-active')) {
        clearTimeout(timeout);

        titleBlocks.forEach((titleBlock) => {
          titleBlock.classList.remove('msg-active');
        });

        timeout = setTimeout(() => e.target.classList.add('msg-active'), 500);
      }
    }
  });
};
