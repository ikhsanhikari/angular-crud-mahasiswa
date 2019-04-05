import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hikari-modal',
  templateUrl: './hikari-modal.component.html',
  styleUrls: ['./hikari-modal.component.css']
})
export class HikariModalComponent {

  public visible = false;
  public headerTitle = '';
  public mode = '';
  public data: any = '';

  public visibleAnimate = false;

  public show(data?: any): void {
    if (data !== null) {
      this.data = data;
      console.log('Data from parameter : ' + data);
    }

    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.data = {};
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement> event.target).classList.contains('modal')) {
      this.hide();
    }
  }

  public editMode() {
    this.mode = 'Edit';
  }

  public addMode() {
    this.mode = 'Add';
  }

  public isEditMode() {
    return this.mode === 'Edit';
  }

  public isAddMode() {
    return this.mode === 'Add';
  }

}
