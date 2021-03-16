import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductService} from '../../../../services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  form: FormGroup = this.fb.group({
    title: ['', Validators.compose([
      Validators.required])],
    description: ['', Validators.compose([
      Validators.required])],
    image: '',
    price: [0, Validators.compose([
      Validators.required])],
  }, {validators: []});
  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  submit(): void {
    const data = this.form.getRawValue();
    this.productService.create(data)
      .subscribe(() => this.router.navigate(['/products']));
  }
}
