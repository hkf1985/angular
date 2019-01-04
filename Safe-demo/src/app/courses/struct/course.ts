import {Section} from "./section"
export  class Course {
  transportLearningId:string
  learningTitle:string
  learningProfile:string
  learningPrice:string
  frontCover:string
  courseList:Section[]=[]
}
