export type JobProps = {
  company: string;
  title: string;
  duties: string[];
  time: string;
  isActive: boolean;
};

export type JobsProps = {
  jobs: {
    data: {
      company: string;
      title: string;
      dates: string;
    };
    duties: string[];
  }[];
};

export type ProjectProps = {
  title: string;
  tags: string;
  image: string;
  url: string;
  github: string;
};

export type ProjectsProps = {
  projects: ProjectProps[];
};
