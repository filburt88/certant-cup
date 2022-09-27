import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns = ['position', 'name', 'lastName', 'points'];
  ranking: User[] = [];
  myRanking: User = {
    posicion: 999,
    nombre: 'Nombre',
    apellido: 'Apellido',
    puntos: 0,
  };

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    this.UserService.getUsers().subscribe({
      next: (res) => {
        this.ranking = res;
      },
    });

    this.UserService.getMyRanking().subscribe({
      next: (res) => {
        console.log(res);
        this.myRanking = res;
      },
    });
  }
}
