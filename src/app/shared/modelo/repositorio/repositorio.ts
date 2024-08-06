class Repositorio {
  private motos: Moto[];
  constructor() {
    this.motos = [];
  }

  inserir(moto: Moto) {
    this.motos.push(moto);
    return moto;
  }

  listar(): Moto[] {
    return this.motos;
  }

  remover(placa: string) {
    const indx = this.motos.findIndex((moto) => moto.placa === placa);

    if (indx >= 0) {
      const motoARemover = this.motos[indx];
      this.motos.splice(indx, 1);
      return motoARemover;
    }

    return undefined;
  }

  buscarPorModelo(modelo: string): Moto[] {
    return this.motos.filter((moto) => moto.modelo === modelo);
  }

  buscarPorPlaca(placa: string): Moto[] {
    return this.motos.filter((moto) => moto.placa === placa);
  }
}
