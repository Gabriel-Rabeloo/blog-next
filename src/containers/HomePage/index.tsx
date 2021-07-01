import Head from 'next/head';
import { PostData } from '../../domain/posts/post';
import { Container } from './styles';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostCard } from '../../components/PostCart';
import { Footer } from '../../components/Footer';
import { SITE_NAME } from '../../config/app-config';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Este é meu blog para estudos" />
      </Head>
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
