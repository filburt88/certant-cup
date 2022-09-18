import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/core/models/Player';
import { TopScorersService } from 'src/app/core/services/top-scorers.service';

@Component({
  selector: 'app-scorers-table',
  templateUrl: './scorers-table.component.html',
  styleUrls: ['./scorers-table.component.scss'],
})
export class ScorersTableComponent implements OnInit {
  displayedColumns = ['position', 'flag', 'name', 'lastName', 'goals'];
  ranking: Player[] = [];

  constructor(private topScorersService: TopScorersService) {}

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    this.topScorersService.getScorers().subscribe({
      next: (res) => {
        this.ranking = res;
      },
    });
  }
}
