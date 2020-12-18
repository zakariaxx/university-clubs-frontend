export class event{
  id: number;
  theme: string;
  description: string;
  event_date:Date;
  creation_date: Date;
  event_time: Date;
  location:string;
  target_population:string;
  needs_for_realization:string;
  estimated_budget:string;
  communication_needs:string;
  clubs_involved:Array<number>;
  sponsors_list:Array<String>;
  expected_benefits:string;
  club_name:string;
  event_type: string;
  pictures:string;

}
