import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';
import type { User } from '@prisma/client';
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  // REGISTER
  async register(
    createAuthDto: CreateAuthDto,
  ): Promise<{ access_token: string }> {
    const normalizedEmail = createAuthDto.email.trim().toLowerCase();
    const existingUser = await this.prisma.user.findUnique({
      where: { email: normalizedEmail },
    });
    if (existingUser) {
      throw new ConflictException('Email already in use');
    }
    const hashedPassword = await bcrypt.hash(createAuthDto.password, 10);
    const user: User = await this.prisma.user.create({
      data: {
        name: createAuthDto.name,
        email: normalizedEmail,
        password: hashedPassword,
      },
    });
    return this.generateToken(user);
  }

  private generateToken(user: User): { access_token: string } {
    const payload = { sub: user.id, email: user.email };
    const access_token = this.jwtService.sign(payload, { expiresIn: '1d' });
    return { access_token };
  }
  async login(loginAuthDto: LoginAuthDto): Promise<{ access_token: string }> {
    if (!loginAuthDto.email || !loginAuthDto.password) {
      throw new BadRequestException('Email and password are required');
    }
    const normalizedEmail = loginAuthDto.email.trim();
    const user = await this.prisma.user.findFirst({
      where: {
        email: {
          equals: normalizedEmail,
          mode: 'insensitive',
        },
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(loginAuthDto.password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.generateToken(user);
  }
}
