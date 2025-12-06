export interface Project {
  name: string;
  client: string;
  role: string;
  description: string;
  location: string;
  responsibilities: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  duration?: string;
  description: string;
  projects?: Project[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  score: string;
}

export interface PassportDetails {
  number: string;
  issueDate: string;
  expiryDate: string;
  placeOfIssue: string;
}

export interface PersonalDetails {
  dob: string;
  maritalStatus: string;
  nationality: string;
  gender: string;
  fatherName: string;
  passport?: PassportDetails;
}

export interface ResumeData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    address: string;
    summary: string;
    languages: string[];
    photoUrl?: string;
    details: PersonalDetails;
  };
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  projects: Project[]; // Standalone projects list if not nested in experience
}