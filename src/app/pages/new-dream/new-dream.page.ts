import { Component, OnInit } from '@angular/core';
import { DreamsService } from '../../services/dreams.service';
import { DreamInterface } from '../../models/dreams';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-dream',
  templateUrl: './new-dream.page.html',
  styleUrls: ['./new-dream.page.scss'],
})
export class NewDreamPage implements OnInit {
  dream: DreamInterface= { name: ''};
  constructor(protected dreamService: DreamsService, protected router: Router) { }

  ngOnInit() {
  }
  addNewDream() {
    if (this.dream !== undefined) {
      this.dreamService.addDream(this.dream);
      this.router.navigateByUrl('home');
    }
  }

}
