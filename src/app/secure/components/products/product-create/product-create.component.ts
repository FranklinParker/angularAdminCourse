import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: ['', Validators.compose([
      Validators.required])],
  }, {validators: []});
  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

}
