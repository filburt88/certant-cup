export interface Bet {
  username: string;
  publicacion: {
    idPartido: number;
    goles: {
      golesLocal: number;
      golesVisitante: number;
    };
  };
}
