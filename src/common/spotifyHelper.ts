import { IUser } from 'src/interfaces/IUser';

export function SpotifyToUser(
  user: SpotifyApi.CurrentUsersProfileResponse
): IUser {
  return {
    id: user.id,
    nome: user.display_name,
    image: user.images.pop().url,
  };
}
