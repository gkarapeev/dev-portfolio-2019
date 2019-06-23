const code =
`onScroll = () => {
  if (window.innerHeight + window.scrollY >= (document.body.offsetHeight - 300)) {
    this.getPosts();
  }
}`;

export default code;