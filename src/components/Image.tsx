interface Props {
  imageSrc?: string;
  altText?: string;
  className?: string;
}

const Image = ({ imageSrc, altText, className }: Props) => {
  return <img src={imageSrc} alt={altText} className={className} />;
};

export default Image;
