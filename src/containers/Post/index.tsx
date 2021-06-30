import { PostData } from '../../domain/posts/post';
import { PostCover } from '../../components/PostCover';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { Footer } from '../../components/Footer';
import { Heading } from '../../components/Heading';
import { PostDetails } from '../../components/PostDetails';
import { PostContainer } from '../../components/PostContainer';

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
        <PostDetails
          author={post.author.name}
          category={post.category.name}
          date={post.created_at}
        />
        <PostContainer content={post.content} />
      </MainContainer>
      <Footer />
    </>
  );
};
