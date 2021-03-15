import {User} from './user';

export interface UserResponse{
  data: User[];
  meta: {
    last_page: number;
  };
}
