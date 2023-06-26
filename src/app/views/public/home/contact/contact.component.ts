import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactService } from '../../../admin/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formGroup!: FormGroup;
  pageType: any = 'add';

  constructor(
    public _contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.formGroup = this._contactService.createForm();
  }

  async submit() {
    const data = this.formGroup.getRawValue();
    await this._contactService.addOrUpdateData(data, this.formGroup);
    this.formGroup.reset();
  }

}
