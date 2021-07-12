import { Container } from './styled';
import { Date } from '../Date';
import Link from 'next/link';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ author, category, date }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Date date={date} /> por {author} |{' '}
      <Link href={`/categories/${category}`}>{category}</Link>
    </Container>
  );
};
