import { Controller, Post } from '@nestjs/common';
import type { UserDTO } from 'src/model';
import { AuthService } from 'src/view';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/login')
    loginUser(userDTO: UserDTO): string {
        return this.authService.login(userDTO);
    }
}
