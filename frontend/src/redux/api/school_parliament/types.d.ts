namespace SCHOOL_PARLIAMENT {
  interface ISchoolParliament {
    student: any[];
    type_of_administrator: null;
  }
  type GetSchoolParliamentResponse = ISchoolParliament[];
  type GetSchoolParliamentRequest = null;
}
