import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


// material
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTreeModule } from '@angular/material/tree';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {ClipboardModule} from '@angular/cdk/clipboard';


// import { MatNativeDateModule } from '@angular/material/da';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTreeModule,
    MatFormFieldModule,
    MatSelectModule,
    MatChipsModule,
    MatProgressBarModule,
    MatGridListModule,
    MatSnackBarModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatRadioModule,
    MatStepperModule,
    MatButtonToggleModule,
    ClipboardModule,
    MatSnackBarModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule,
    MatChipsModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTreeModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatProgressBarModule,
    MatGridListModule,
    MatSnackBarModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatStepperModule,
    MatButtonToggleModule,
    ClipboardModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
 ],
})
export class MaterialModule {}
