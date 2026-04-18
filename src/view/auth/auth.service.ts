import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/model';

@Injectable()
export class AuthService {
    login(userDTO: UserDTO): string {
        let string_output: string = '';

        if (userDTO.username.length != 0) {
            string_output = 'Twój Username: ' + userDTO.username + '\n';
        } else {
            string_output = 'Brak Username\n';
        }

        if (userDTO.password.length != 0) {
            string_output += 'Twoje hasło: ' + userDTO.password;
        } else {
            string_output = 'Brak hasła';
        }
        return string_output;
    }
}
