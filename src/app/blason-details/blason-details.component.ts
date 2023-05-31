import { Component, OnInit } from '@angular/core';
import { HeraldryService } from '../services/heraldry.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blason-details',
  templateUrl: './blason-details.component.html',
  styleUrls: ['./blason-details.component.css']
})
export class BlasonDetailsComponent implements OnInit {
  blazon: any;

  constructor(
    private blason: HeraldryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //this.route.snapshot.paramMap.get("id");
    this.route.params.subscribe(params => {
      this.getBlazonDetails(params['id']);
    });
  }


  getBlazonDetails(id: any) {
    this.blason.getBlazon(id)
      .subscribe(data => {
        this.blazon = data;
      })
  }

  delete() {
    if (window.confirm('Are you sure?')) {
      this.blason.deleteBlazon(this.blazon.id)
        .subscribe(() => {
          this.router.navigate(['']);
        });
    }
  }
}