declare module "lightbox2" {
  const lightbox: {
    option: (options: {
      resizeDuration?: number;
      fadeDuration?: number;
      wrapAround?: boolean;
      albumLabel?: string;
    }) => void;
  };

  export default lightbox;
}
