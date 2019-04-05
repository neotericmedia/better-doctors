import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
    exports: [
      MatCardModule,
      MatIconModule,
      MatToolbarModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule
    ]
})
export class AppMaterialModule {}