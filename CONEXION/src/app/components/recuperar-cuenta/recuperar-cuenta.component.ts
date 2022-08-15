import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-recuperar-cuenta',
  templateUrl: './recuperar-cuenta.component.html',
  styleUrls: ['./recuperar-cuenta.component.css'],
})
export class RecuperarCuentaComponent implements OnInit {
  changePass = this.fb.group({
    email: ['', [Validators.email]],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioSrv: UsuarioService
  ) {}

  ngOnInit(): void {}

  sendPass() {
    const { email } = this.changePass.getRawValue();

    if (!email) {
      return;
    }

    this.usuarioSrv.recuperarCuenta(email).subscribe((resp) => {
      console.log(resp);
    });
    this.router.navigateByUrl('login');
  }
}
