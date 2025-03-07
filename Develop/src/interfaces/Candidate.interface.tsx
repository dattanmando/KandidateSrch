// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    id: number;
    login: string;
    email?: string;
    organizations_url: string;
    avatar_url: string;
    html_url: string;
    // name, username, location, avatar, email, html_url, and company
  }