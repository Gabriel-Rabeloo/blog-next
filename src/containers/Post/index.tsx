import { PostData } from '../../domain/posts/post';
import { PostCover } from '../../components/PostCover';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { Footer } from '../../components/Footer';
import { Heading } from '../../components/Heading';

export type PostPros = {
  post: PostData;
};

export const Post = ({ post }: PostPros) => {
  return (
    <>
      <Header />

      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostCover coverUrl={post.cover.formats.large.url} alt={post.title} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContainer>
      <Footer />
    </>
  );
};
