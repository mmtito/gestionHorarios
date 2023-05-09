import { TeacherConfigurationDto } from "./teacherConfigurationDto"

interface Pagination {
    total : number 
    page : number 
    totalPages : number
    capacity : number 
    teacherConfigurations : TeacherConfigurationDto[] 
}

export { Pagination };