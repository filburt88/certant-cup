import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { ToastsService } from 'src/app/core/services/toasts.service';
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

  page: number = 1;
  currentPage: number = 1;

  constructor(private UserService: UserService, private toast: ToastsService) {}

  ngOnInit(): void {
    this.getTableData();
  }

  tenMore() {
    this.page += 1;
    this.UserService.getUsers(this.page).subscribe({
      next: (res) => {
        if (res.length !== 0) {
          this.currentPage += 1;
          this.ranking = res;
        } else if (res.length === 0) {
          this.page -= 1;
          this.toast.errorSnackBar('No hay mas usuarios por el momento', 'Ok');
        }
      },
    });
  }

  tenLess() {
    this.page -= 1;
    this.UserService.getUsers(this.page).subscribe({
      next: (res) => {
        this.currentPage -= 1;
        this.ranking = res;
      },
    });
  }

  getTableData() {
    this.UserService.getUsers(1).subscribe({
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
