export interface JobProp {
  data: {
    company: string;
    dates: string;
    title: string;
  };
  duties: string[];
}

export interface ProjectProp {
  title: string;
  tags: string;
  image: string;
  url: string;
  github: string;
  content: string;
}
