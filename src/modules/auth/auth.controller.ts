import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ENDPOINTS } from '@shared/constants/endpoints.constant';
import { Public } from 'core/decorators/public.decorator';
import { CreateStudentDto } from 'modules/students/dto/create-student.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';

@ApiTags(ENDPOINTS.AUTH.CONTROLLER)
@Controller(ENDPOINTS.AUTH.CONTROLLER)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post(ENDPOINTS.AUTH.REGISTER_STUDENT)
  async registerStudent(@Body() createStudentDto: CreateStudentDto) {
    return await this.authService.registerStudent(createStudentDto);
  }

  @Public()
  @Post(ENDPOINTS.AUTH.REGISTER_MODERATOR)
  async createModerator() {
    return await this.authService.createModerator();
  }

  @Public()
  @Post(ENDPOINTS.AUTH.LOGIN)
  async logUserIn(@Body() loginUserDto: LoginUserDto) {
    return await this.authService.logUserIn(loginUserDto);
  }
}
