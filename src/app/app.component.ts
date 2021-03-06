import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  articles: Observable<any[]>;
  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.articles = this.db.collection('articles').valueChanges();
  }
}
