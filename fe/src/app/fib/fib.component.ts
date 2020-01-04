import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.scss']
})
export class FibComponent implements OnInit {
  seenIndexes;
  values;
  index = null;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    this.http.get('/api/values/current').subscribe(res => {
      this.values = Object.entries(res);
    });
  }

  async fetchIndexes() {
    this.http.get('/api/values/current').subscribe(res => {
      this.seenIndexes = Object.entries(res);
    });
  }

  onInputChange(index: number) {
    this.index = index;
  }

  onSubmit() {
    this.http.post('/api/values', {
      index: this.index
    }).subscribe(res => {
      console.log(res);
      this.index = '';
    });
  }
}
