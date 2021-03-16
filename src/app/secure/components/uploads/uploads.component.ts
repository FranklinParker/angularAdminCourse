import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss']
})
export class UploadsComponent implements OnInit {

  @Output() uploaded = new EventEmitter<string>();

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  upload(files: FileList): void {
    const file = files.item(0);

    const data = new FormData();
    data.append('image', file);

    this.http.post(`${environment.api}/upload`, data)
      .subscribe((res: any) => {
          this.uploaded.emit(res.url);
        }
      );
  }

}
