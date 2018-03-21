import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'myblog';
  articles: Observable<any[]>;
  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.articles = this.db.collection('articles').valueChanges();
  }
}
