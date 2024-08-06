class Servico {
  private repositorio: Repositorio;
  constructor() {
    this.repositorio = new Repositorio();
  }

  inserir(placa: string, modelo: string, fabricante: string) {
    this.validarPlacaUnica(placa);

    const moto = new Moto(placa, modelo, fabricante);

    this.repositorio.inserir(moto);
    return moto;
  }

  listar(): Moto[] {
    return this.repositorio.listar();
  }

  editar(placa: string) {
    if (this.buscar(placa)[0].vendido) {
      throw 'A moto já está vendida.';
    } else {
      this.buscar(placa)[0].vender;
    }
  }

  remover(placa: string) {
    return this.repositorio.remover(placa);
  }

  buscar(placa: string): Moto[] {
    return this.repositorio.buscarPorPlaca(placa);
  }

  validarPlacaUnica(placa: string) {
    // placa nao duplicada
    const motoProcurada = this.repositorio.buscarPorPlaca(placa);

    if (motoProcurada && motoProcurada.length > 0) {
      throw new Error('Placa já cadastrada!');
    }
  }
}
