import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { EmailModule } from '../../models/email/email.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  mensaje: any;
  datos: any;
  formData: FormData = new FormData();
  emailDatos: EmailModule = new EmailModule();

  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
  }

  enviarEmail() {
    Swal.fire({
      title: 'Alerta',
      text: "Desea enviar este correo?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.formData.append('correoCliente', this.emailDatos.email);
        this.formData.append('telefonoCliente', this.emailDatos.telefono);
        this.formData.append('nombreCliente', this.emailDatos.nombre);
        this.formData.append('mensaje', this.emailDatos.mensaje);
        this.apiService.sendEmail(this.formData).subscribe(
          res => {
            this.mensaje = res;
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: this.mensaje['Mensaje'],
              showConfirmButton: false,
              timer: 1500
            });
          }, err => {
            Swal.fire({
              icon: 'error',
              title: 'Lo sentimos',
              text: 'Algo ocurrió con el servidor interno.',
            });
          }
        );
      }
    });
  }
}
