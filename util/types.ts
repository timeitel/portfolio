export type JobProp = {
  data: {
    company: string;
    dates: string;
    title: string;
  };
  duties: string[];
};

export type ProjectProp = {
  title: string;
  tags: string;
  image: string;
  url: string;
  github: string;
  content: string;
};

export type ProjectsProps = {
  projects: ProjectProp[];
};
