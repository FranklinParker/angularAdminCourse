import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  id = 0;
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
              private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router) { }
  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.params.id;
    const product = await  this.productService.get(this.id);
    this.form.patchValue(product);
  }

  submit(): void {
    this.productService.update(this.form.getRawValue(), this.id)
      .subscribe(() => this.router.navigate(['/products']));

  }
}
