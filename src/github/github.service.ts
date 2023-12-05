import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubService {
  public handlePayload(event: GithubEvent, payload: GithubPayload) {
    let message = '';

    switch (event) {
      case 'star':
        message: this.handleStar(payload as GithubPayload);
    }
  }

  githubPayload() {
   
  }
}
