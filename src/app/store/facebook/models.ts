export interface FacebookUserProfile {
  id: string;
  name: string;
  email: string;
  picture: {
    data: {
      is_silhouette: boolean,
      url: string,
    }
  };
}
