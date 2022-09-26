export interface BetMatch {
  partido: {
    idPartido: number;
    fase: string;
    estadio: string;
    estado: string;
    fecha: string;
    resultadoReal: {
      idLocal: number;
      nombreLocal: string;
      fotoLocal: string;
      golesLocal?: number;
      idVisitante: number;
      nombreVisitante: string;
      fotoVisitante: string;
      golesVisitante?: number;
    };
  };
  resultadoUsuario?: {
    goles: {
      golesLocal: number;
      golesVisitante: number;
    };
    resultado: string;
  } | null;
}
