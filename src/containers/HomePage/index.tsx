import { PostData } from '../../domain/posts/post';
import { Container } from './styles';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostCard } from '../../components/PostCart';
import { Footer } from '../../components/Footer';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              cover={post.cover.formats.small.url}
              slug={post.slug}
              title={post.title}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
