import styles from "./styles.module.scss";

interface ImageItemProps {
  src: string;
  alt: string;
  baseUrl: string;
}

function ImageItem({ baseUrl, src, alt }: ImageItemProps) {
  return (
    <img className={styles.container} src={`${baseUrl}${src}`} alt={alt} />
  );
}

export default ImageItem;
