import { Component } from '@angular/core';
import { TABLES } from '../../shared/utils/tables';
import { Table } from '../../shared/models/table';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tables-tab',
  imports: [
    TableModule,
    CommonModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
  ],
  templateUrl: './tables-tab.html',
  styleUrl: './tables-tab.css',
})
export class TablesTab {
  allTables = TABLES;
  cols!: { field: string; header: string }[];
  visible = false;
  selectedTable: Table | null = null;
  editData = {
    capacity: 0,
    isAvailable: true,
  };


  ngOnInit() {
    this.cols = [
      { field: 'tableID', header: 'tableID' },
      { field: 'capacity', header: 'capacity' },
      { field: 'isAvailable', header: 'isAvailable' },
    ];
  }

  openEditDialog(table: Table) {
      this.selectedTable = table;
      this.visible = true;
  
      this.editData = {
        capacity: table.capacity,
        isAvailable: table.isAvailable,
      };
    }

  deleteTable(tableID: number) {
    this.allTables = this.allTables.filter((u) => u.tableID !== tableID);
  }

  saveChanges() {
    if (!this.selectedTable) return;

    this.allTables = this.allTables.map((u) =>
      u.tableID === this.selectedTable!.tableID
        ? {
            ...u,
            username: this.editData.capacity,
            email: this.editData.isAvailable,
          }
        : u
    );

    this.visible = false;
    this.selectedTable = null;
  }
}