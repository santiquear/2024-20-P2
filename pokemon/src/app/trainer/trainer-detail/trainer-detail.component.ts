import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { ActivatedRoute } from '@angular/router';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  @Input() trainerDetail!: Trainer;
  constructor(private route: ActivatedRoute, private trainerservice: TrainerService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.trainerservice.gettrainersdetail(+id).subscribe(data =>{
        this.trainerDetail = data;
      })
    }

  }
}
