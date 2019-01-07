import {Section} from "./section"
export  class Course {
  transportLearningId:string
  learningTitle:string
  learningProfile:string
  learningPrice:string
  frontCover:string
  requestTime:string
  courseQuantity:number
  totalCourseTime:number
  otalProgress:string
  courseList:Section[]=[]
}
