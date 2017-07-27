export interface Event {
  id: any;
  type: string;
  actor: {
    id: any;
    login: string;
    display_login: string;
    gravatar_id: any;
    url: any;
    avatar_url: any;
  };
  repo: {
    id: any;
    name: any;
    url: any;
  };
}
