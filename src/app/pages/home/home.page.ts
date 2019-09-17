import { Component, OnInit } from '@angular/core';
import { DreamInterface } from '../../models/dreams';
import { DreamsService } from '../../services/dreams.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  protected dreamsList: DreamInterface[] = [];
  isItemAvailable: boolean;
  constructor(protected dreamService: DreamsService , protected router: Router) {
    this.getAllDreams();
   }
   getAllDreams() {
     this.dreamService.showAllDreams().subscribe(res => this.dreamsList = res);
   }
   goToaddNewDream() {
     this.router.navigateByUrl('new-dream');
   }
   showDetail(item: DreamInterface) {
     this.router.navigate(['/dream-detail'], { queryParams: item });
   }
   getItems(ev: any) {

    // Reset items back to all of the items
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.dreamsList = this.dreamsList.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  ngOnInit() {
  }

}
