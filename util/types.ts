export type JobProps = {
  data: {
    company: string;
    dates: string;
    title: string;
  };
  duties: string[];
};

export type ProjectProps = {
  title: string;
  tags: string;
  image: string;
  url: string;
  github: string;
  content: string;
};

export type ProjectsProps = {
  projects: ProjectProps[];
};
