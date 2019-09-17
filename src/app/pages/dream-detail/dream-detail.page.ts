import { Component, OnInit } from '@angular/core';
import { DreamsService } from '../../services/dreams.service';
import { DreamInterface } from '../../models/dreams';
import { Router , ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-dream-detail',
  templateUrl: './dream-detail.page.html',
  styleUrls: ['./dream-detail.page.scss'],
})
export class DreamDetailPage implements OnInit {
  protected dreamDetail: DreamInterface;
  constructor(protected dreamService: DreamsService, protected route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.dreamDetail = params;
    });
  }

  ngOnInit() {
  }

}
