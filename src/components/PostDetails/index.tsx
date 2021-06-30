import { Container } from './styled';
import { Date } from '../Date';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ author, category, date }: PostDetailsProps) => {
  return (
    <Container>
      Publicado por <Date date={date} />
    </Container>
  );
};