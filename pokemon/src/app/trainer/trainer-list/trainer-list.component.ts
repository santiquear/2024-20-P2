import { Component, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { dataTrainers } from '../dataTrainers';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: Trainer[] = [];
  selected: Boolean = false;
  selectedTrainer!: Trainer;
  constructor(private trainerservice: TrainerService) {}

  getTraunersList(): Array<Trainer> {
    return dataTrainers;
  }

  ngOnInit(): void {
    this.trainerservice.gettrainers().subscribe(data =>{
      this.trainers = data;
    });
  }

  onSelected(trainer: Trainer) {
    this.selected = true;
    this.selectedTrainer = trainer;
  }
}
