export interface HomeMatch {
  idPartido: number;
  fase: string;
  estadio: string;
  estado: string;
  fecha: string;
  resultadoReal: {
    idLocal: number;
    nombreLocal: string;
    fotoLocal: string;
    golesLocal: number | null;
    idVisitante: number;
    nombreVisitante: string;
    fotoVisitante: string;
    golesVisitante: number | null;
  };
}
