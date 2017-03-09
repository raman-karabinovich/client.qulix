export interface IPerformer {
  id: number;
  second_name: string;
  first_name: string;
  middle_name: string;
}

/*export class Performer implements IPerformer {
 public id: number;
 constructor(public second_name: string = '',
 public first_name: string = '',
 public  middle_name: string = '') {
 }
 }*/
export class Performer implements IPerformer {
  public id: number;
  public second_name: string;
  public first_name: string;
  public middle_name: string;

  constructor() {
  }
}
export interface ITask {
  id: number;
  name: string;
  workload: string;
  start_date: Date;
  end_date: Date;
  status: number;
  performer: number;
}

export class Task implements ITask {
  public id: number;
  name: string;
  workload: string;
  start_date: Date;
  end_date: Date;
  status: number;
  performer: number;

  constructor() {
  }
}
export interface IStatus {
  id: number;
  name: string;
}
export class Status implements IStatus {
  constructor(public id: number = null, public name: string = "") {
  }
}
