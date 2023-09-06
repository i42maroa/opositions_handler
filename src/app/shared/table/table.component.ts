import { Component } from '@angular/core';
import { ColeInterface } from 'src/app/coles.interface';
import { COLES } from 'src/app/data';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {

  dataSource:ColeInterface[] = COLES;
  displayedColumns: string[] = ["centro", 'fFinAus', 'dProvincia', "dMunicipio", "dLocalidad", "lVoluntaria" ,"observaciones"];
}

