import { Body, Controller, Post, Headers } from '@nestjs/common';
import { GithubService } from './github.service';
import { GithubEvent, GithubPayload } from '../interfaces/github.interfaces';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Post()
  webhookHandler(
    @Headers('x-github-event') githubEvent: GithubEvent,
    @Body() body: GithubPayload,
  ) {
    console.log({ githubEvent, body });
    return { githubEvent };
  }
}
