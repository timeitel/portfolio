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
