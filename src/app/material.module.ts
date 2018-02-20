import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule, MatTabsModule, MatGridListModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatGridListModule,
  ],
  exports: [MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatGridListModule,
  ],
})
export class MaterialModule { }
