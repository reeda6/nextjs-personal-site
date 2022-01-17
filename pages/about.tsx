import React from 'react';
import { Title, Text, Container, Grid, Link, Card } from '@components';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import {
  SiJava,
  SiNodedotjs,
  SiVercel,
  SiMysql,
  SiAmazonaws,
  SiReact,
  SiNextdotjs,
  SiPython,
} from 'react-icons/si';
import { getPosts, Post } from '@posts';
// import { TransparentLink } from '@components';

interface AboutProps {
  experiences: Post[];
}

const About = ({ experiences }: AboutProps): JSX.Element => {
  const stacks = React.useMemo(
    () => [
      {
        Icon: SiJava,
        url: 'https://www.java.com',
      },
      {
        Icon: SiPython,
        url: 'https://www.python.org/',
      },
      {
        Icon: SiMysql,
        url: 'https://www.mysql.com/',
      },
      {
        Icon: SiNextdotjs,
        url: 'https://nextjs.org/',
      },
      {
        Icon: SiReact,
        url: 'https://reactjs.org/',
      },
      {
        Icon: SiAmazonaws,
        url: 'https://aws.amazon.com/',
      },
      {
        Icon: SiNodedotjs,
        url: 'https://nodejs.org/en/',
      },
      {
        Icon: SiVercel,
        url: 'https://vercel.com/',
      },
    ],
    [],
  );

  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>
      <Container alignContent="center" alignItems="center">
        <Title fontSize={['3rem', '4rem']} as="h2">
          Engineer at heart
        </Title>
        <Container maxWidth={['100%', '700px']} marginY="2rem">
          <Text>
            I&apos;m a developer with a diverse set of skills and interests.
          </Text>
          <Text>
            During my free time I like being outdoors, reading current events,
            and spending time with friends. I am also developing a photography
            interest and hope to create a separate page with some cool pictures
            I've taken.
          </Text>
        </Container>
      </Container>

      <Container
        paddingY="4rem"
        gridGap="2rem"
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
        paddingTop="0rem"
      >
        <Title fontSize="40px" as="h2">
          Technologies I frequently use
        </Title>
        <Grid
          gridTemplateColumns={['repeat(2 , 1fr)', 'repeat(4 , 1fr)']}
          gridGap="1rem"
          justifyItems="center"
          maxWidth="40rem"
        >
          {stacks.map(({ Icon, url }, i) => (
            <Link href={url} key={url}>
              <Card key={i}>
                <Icon size="32px" />
              </Card>
            </Link>
          ))}
        </Grid>
      </Container>
      <Container
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
        paddingBottom="4rem"
        gridGap="3rem"
      >
        <Title fontSize="40px" as="h2">
          Work Experiences
        </Title>
        <Container width="100%">
          {experiences.map(({ data }, i) => (
            <Grid
              key={i}
              gridTemplateColumns="1fr 4fr"
              justifyItems="flex-start"
              gridGap="1rem"
              paddingY="2rem"
              borderBottom="1px solid rgba(0,0,0,0.1)"
            >
              <Container width="100%">
                <Text>0{experiences.length - i}</Text>
              </Container>
              <Grid width="100%" gridTemplateColumns="4fr 1fr">
                <Container
                  width="100%"
                  alignItems="flex-start"
                  textAlign="start"
                >
                  <Grid
                    width="100%"
                    gridTemplateColumns="repeat(2, auto)"
                    justifyItems="flex-start"
                    justifyContent="flex-start"
                    gridGap="1rem"
                  >
                    <Title fontSize="1.5rem" margin={0} as="h3">
                      {data.title}
                    </Title>
                    <Text
                      fontSize="smaller"
                      margin={0}
                      color="rgba(0, 0, 0, 0.1)"
                    >
                      {data.date}
                    </Text>
                  </Grid>
                  <Text fontSize="1rem">{data.caption}</Text>
                </Container>
                {/* <Text fontSize="1.5rem">&rarr;</Text> */}
              </Grid>
            </Grid>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const experiences = await getPosts('experiences');
  experiences.sort((a, b) =>
    b.data.date.toString().localeCompare(a.data.date.toString()),
  );

  return {
    props: {
      experiences,
    },
  };
};

export default About;
