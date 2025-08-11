import { Author, Project } from "@/sanity.types";

export type ProjectTypeCard = Omit<Project, 'author'> & {author ? : Author};
