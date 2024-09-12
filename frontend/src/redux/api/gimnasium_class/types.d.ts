namespace GIMNASIUM_CLASS {
  interface IGimnasiumClassRequest {
    student: { name: string; surname: string };
    name_of_grade: { grade: string; parallel: string };
  }
  type GetGimnasiumClassResponse = IGimnasiumClassRequest[];

  type GetGimnasiumClassRequest = IGimnasiumClassRequest[];
}
