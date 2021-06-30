import { PostData } from '../../domain/posts/post';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { Footer } from '../../components/Footer';

export type PostPros = {
  post: PostData;
};

export const Post = ({ post }: PostPros) => {
  return (
    <>
      <Header />

      <MainContainer>
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContainer>
      <Footer />
    </>
  );
};
