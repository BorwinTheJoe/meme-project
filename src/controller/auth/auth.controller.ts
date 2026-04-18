import { Controller, Post, Body } from '@nestjs/common';
import type { UserDTO } from 'src/model';
import { AuthService } from 'src/view';

@Controller('login')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    loginUser(@Body() userDTO: UserDTO): string {
        console.log(userDTO);
        return this.authService.login(userDTO);
    }
}
