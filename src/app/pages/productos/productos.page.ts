import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular';
import { ProductsService } from '../../services/products.service';

@Component({
  standalone: true,
  selector: 'app-productos',
  imports: [CommonModule, IonContent, IonGrid, IonRow, IonCol],
  templateUrl: './productos.page.html',
})
export class ProductosPage implements OnInit {
  products: any[] = [];

  constructor(
    private productService: ProductsService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.products = await this.productService.getProducts();
    this.cdr.detectChanges();
  }
}