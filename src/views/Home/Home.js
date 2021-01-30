import React from "react";
import { SectionHero } from "../../components/Sections/SectionHero";
import { SectionSpotlight } from "../../components/Sections/SectionSpotlight";
import { SectionBanner } from "../../components/Sections/SectionBanner";
import { SectionStatement } from "../../components/Sections/SectionStatement";

const Home = () => {
  const heroContent = {
    key: 1,
    imageURL:
      "https://images.unsplash.com/photo-1587271511223-18b7ef9a327a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80",
  };

  const recommendation_items = [
    {
      key: 1,
      imageURL:
        "https://d397bfy4gvgcdm.cloudfront.net/127708-2667-VR062817-HJP25588fx2.jpeg",
      title: "From thali to reception",
    },
    {
      key: 2,
      imageURL:
        "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/9ff1272d-8d93-4db9-8c39-04de37a44731.jpg",
      title: "From mehndi to gurudwara",
    },
    {
      key: 3,
      imageURL:
        "https://i0.wp.com/mvslim.com/wp-content/uploads/2018/07/21-Indian-muslim-wedding-Indian-couple-Indian-bride-jewellery-Wedding-jewellery-Jhoomer-Indian-wedding-decor-Indian-wedding-inspiration-wedding-salad-Indian-wedding-Indian-wedding-photographer-N.jpg?resize=710%2C473",
      title: "A wedding from 1001 nights",
    },
    {
      key: 4,
      imageURL:
        "https://images.unsplash.com/photo-1525772764200-be829a350797?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      title: "The perfect event",
    },
  ];

  const featured_items = [
    {
      key: 1,
      imageURL:
        "https://images.unsplash.com/photo-1569008535331-ce4bc9eaa9a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      title: "Template photographer",
    },
    {
      key: 2,
      imageURL:
        "https://i.pinimg.com/originals/8b/3e/d9/8b3ed919f6702e0ca245e25832c9c2a6.jpg",
      title: "Template Make-up artist",
    },
    {
      key: 3,
      imageURL:
        "https://previews.123rf.com/images/artitwpd/artitwpd1710/artitwpd171000113/87881673-flower-garlands-for-indian-wedding-ceremony-in-bangkok-thailand-.jpg",
      title: "Template jewler",
    },
  ];

  const comunity_items = [
    {
      key: 1,
      imageURL:
        "https://images.unsplash.com/photo-1555244162-803834f70033?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
      title: "Template Service",
    },
    {
      key: 2,
      imageURL:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80",
      title: "Template Partner",
    },
    {
      key: 3,
      imageURL:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80",
      title: "Template Engineer",
    },
  ];

  const statementTitle = "And so the \n adventure begins";

  const statementText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  const bannerHeader = "Give us a \n helping hand";
  const bannerImageURL =
    "https://images.unsplash.com/photo-1519802772250-a52a9af0eacb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2135&q=80";

  const Heroheader = "Dive into \n inspirations";

  return (
    <div>
      <SectionHero
        imageURL={heroContent.imageURL}
        headingText={Heroheader}
        headingColor="#fff"
        mainHeaderSize="80"
        mainHeaderWeight="xl-thick"
        buttonTheme="light"
        buttonSize="small"
        buttonLabel="Get inspired"
      />
      <SectionSpotlight
        title="Choose your moment"
        sectionTheme="light"
        tileContent={recommendation_items}
      />
      <SectionSpotlight
        title="In the Spotlight"
        subtitle="Services that made moments truly special"
        headingColor="#fff"
        sectionTheme="dark"
        tileSize="large"
        tileContent={featured_items}
        buttonTheme="dark"
        buttonSize="small"
        buttonLabel="Explore all"
      />
      <SectionStatement
        statementTitle={statementTitle}
        statementText={statementText}
      />
      <SectionBanner
        imageURL={bannerImageURL}
        headingText={bannerHeader}
        headingColor="#fff"
        mainHeaderSize="80"
      />
      <SectionSpotlight
        title="Join the community"
        sectionTheme="light"
        tileSize="large"
        tileType="rectangle"
        tileContent={comunity_items}
      />
    </div>
  );
};

export default Home;
