import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

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

  upload(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const data = new FormData();
      data.append('image', file);

      this.http.post(`${environment.api}/upload`, data)
        .subscribe((res: any) => {
            this.uploaded.emit(res.url);
          }
        );
    }
  }


}
