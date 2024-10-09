import { Ipost } from './../../modules/ipost';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  totpost: number = 4;
  posts: Ipost[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((arrayPosts) => {
        let Aposts = arrayPosts.posts;
        for (let i = 0; i < 4; i++) {
          let body: Ipost = {
            id: Aposts[i].id,
            title: Aposts[i].title,
            body: Aposts[i].body,
            userId: 0,
            tags: [],
            active: false,
          };

          this.posts.push(body);
          console.log(body);
        }

        console.log(this.posts[0].title);

        console.log(Aposts);
      })
      .catch((error) => {
        console.error(
          'There has been a problem with your fetch operation:',
          error
        );
      });
  }
}
