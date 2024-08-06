class Moto {
  constructor(
    private _placa: string,
    private _modelo: string,
    private _fabricante: string,
    private _vendido: boolean = false
  ) {}

  get placa() {
    return this._placa;
  }

  get modelo() {
    return this._modelo;
  }

  get fabricante() {
    return this._fabricante;
  }

  get vendido() {
    return this._vendido;
  }

  vender() {
    this._vendido = true;
  }
}
