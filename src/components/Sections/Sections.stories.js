import React from "react";
import { SectionBanner } from "./SectionBanner";
import { SectionHero } from "./SectionHero";
import { SectionSpotlight } from "./SectionSpotlight";

export default {
  title: "COMPONENTS API/Sections",
};

const TemplateBanner = (args) => <SectionBanner {...args} />;

export const BannerDefault = TemplateBanner.bind({});

const TemplateHero = (args) => <SectionHero {...args} />;

export const HeroDefault = TemplateHero.bind({});
HeroDefault.args = {
  imageURL:
    "https://images.unsplash.com/photo-1587271511223-18b7ef9a327a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80",
  buttonTheme: "light",
  buttonSize: "small",
  buttonLabel: "Get inspired",
};

const TemplateSpotlight = (args) => <SectionSpotlight {...args} />;

export const SpotlightDefault = TemplateSpotlight.bind({});
SpotlightDefault.args = {
  title: "This is an example Title",
  subtitle: "This is an example subtitle",
  sectionTheme: "dark",
  tileSize: "large",
  tileContent: [
    {
      key: 1,
      imageURL:
        "https://images.unsplash.com/photo-1569008535331-ce4bc9eaa9a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      title: "Example tile caption 1",
    },
    {
      key: 2,
      imageURL:
        "https://i.pinimg.com/originals/8b/3e/d9/8b3ed919f6702e0ca245e25832c9c2a6.jpg",
      title: "Example tile caption 2",
    },
    {
      key: 3,
      imageURL:
        "https://previews.123rf.com/images/artitwpd/artitwpd1710/artitwpd171000113/87881673-flower-garlands-for-indian-wedding-ceremony-in-bangkok-thailand-.jpg",
      title: "Example tile caption 3",
    },
  ],
};
